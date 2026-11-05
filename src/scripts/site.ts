// Menu mobile + apparition des titres ligne par ligne.
// Sans JavaScript, tout reste visible (les styles d'animation dépendent de la classe .js).

// ---------- Menu mobile ----------
const racine = document.documentElement;
const burger = document.querySelector<HTMLButtonElement>('.burger');

function basculer(ouvrir: boolean) {
  if (!burger) return;
  burger.setAttribute('aria-expanded', String(ouvrir));
  burger.setAttribute('aria-label', ouvrir ? 'Fermer le menu' : 'Ouvrir le menu');
  racine.classList.toggle('menu-ouvert', ouvrir);
}
burger?.addEventListener('click', () => basculer(burger.getAttribute('aria-expanded') !== 'true'));
document.querySelectorAll('.entete__liens a').forEach((a) => a.addEventListener('click', () => basculer(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && racine.classList.contains('menu-ouvert')) {
    basculer(false);
    burger?.focus();
  }
});
matchMedia('(min-width: 960px)').addEventListener('change', (e) => e.matches && basculer(false));

// ---------- Titres ligne par ligne ----------
const calme = matchMedia('(prefers-reduced-motion: reduce)').matches;
const titres = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];

/** Découpe le titre en lignes telles que le navigateur les affiche. */
function decouper(el: HTMLElement) {
  const texte = el.textContent?.trim() ?? '';
  const mots = texte.split(/\s+/);
  el.textContent = '';
  const spans = mots.map((mot, i) => {
    const s = document.createElement('span');
    s.textContent = mot + (i < mots.length - 1 ? ' ' : '');
    el.append(s);
    return s;
  });
  const lignes: string[][] = [];
  let haut = -Infinity;
  for (const s of spans) {
    if (s.offsetTop > haut + 2) {
      lignes.push([]);
      haut = s.offsetTop;
    }
    lignes[lignes.length - 1].push(s.textContent ?? '');
  }
  el.textContent = '';
  lignes.forEach((l, i) => {
    const ligne = document.createElement('span');
    ligne.className = 'ligne';
    const interieur = document.createElement('span');
    interieur.style.setProperty('--i', String(i));
    interieur.textContent = l.join('');
    ligne.append(interieur);
    el.append(ligne);
  });
  return texte;
}

if (!calme && 'IntersectionObserver' in window && titres.length) {
  const originaux = new Map<HTMLElement, string>();
  document.fonts.ready.then(() => {
    racine.classList.add('js');
    titres.forEach((t) => {
      t.setAttribute('aria-label', t.textContent?.trim() ?? '');
      originaux.set(t, decouper(t));
    });
    const obs = new IntersectionObserver(
      (entrees) => {
        for (const e of entrees) {
          if (!e.isIntersecting) continue;
          const t = e.target as HTMLElement;
          obs.unobserve(t);
          t.classList.add('visible');
          // Une fois l'animation finie, on remet le texte d'origine (re-coupure libre au redimensionnement).
          const n = t.querySelectorAll('.ligne').length;
          setTimeout(() => {
            t.textContent = originaux.get(t) ?? t.textContent;
            t.removeAttribute('aria-label');
          }, 700 + n * 90);
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    titres.forEach((t) => obs.observe(t));
  });
}

// ---------- « Choisir cette formule » : présélection dans le formulaire ----------
// Les liens pointent vers « ?formule=vitrine#devis ». Sans JavaScript, ils mènent au formulaire
// (sans présélection). Avec JavaScript : on choisit l'option, on va au formulaire, focus sur le nom.
const choix = document.querySelector<HTMLSelectElement>('#devis-formule');
const champNom = document.querySelector<HTMLInputElement>('#devis-nom');

function choisirFormule(nom: string | null) {
  if (!choix || !nom) return false;
  const option = [...choix.options].find((o) => o.value.toLowerCase() === nom.toLowerCase());
  if (!option) return false;
  choix.value = option.value;
  return true;
}

// Correspondance slug (?formule=vitrine-plus) → nom de l'option (Vitrine+)
const parSlug = new Map(
  [...document.querySelectorAll<HTMLAnchorElement>('a[data-formule]')].map((a) => [
    new URL(a.href).searchParams.get('formule') ?? '',
    a.dataset.formule ?? '',
  ]),
);

document.querySelectorAll<HTMLAnchorElement>('a[data-formule]').forEach((a) => {
  a.addEventListener('click', (e) => {
    if (!choisirFormule(a.dataset.formule ?? null)) return; // pas de formulaire ici : lien normal
    e.preventDefault();
    document.getElementById('devis')?.scrollIntoView({ behavior: calme ? 'auto' : 'smooth', block: 'start' });
    champNom?.focus({ preventScroll: true });
    history.replaceState(null, '', '#devis');
  });
});

// Arrivée directe avec ?formule=… (lien partagé, page Tarifs, ou JavaScript chargé après le clic)
const demande = new URLSearchParams(location.search).get('formule');
if (demande && choisirFormule(parSlug.get(demande) || demande.replace(/-plus$/, '+'))) {
  champNom?.focus({ preventScroll: true });
}

// ---------- Formules : « Exemple de site » qui suit la formule choisie ----------
// Sans JavaScript, l'exemple de la formule « Recommandé » est déjà dans le HTML.
const blocExemple = document.querySelector<HTMLElement>('#formule-exemple');
const boutonsExemple = [...document.querySelectorAll<HTMLButtonElement>('[data-exemple-choix]')];
const cartes = [...document.querySelectorAll<HTMLElement>('[data-formule-carte]')];

function afficherExemple(slug: string, animer = true) {
  const modele = document.querySelector<HTMLTemplateElement>(`template[data-exemple="${slug}"]`);
  const rang = cartes.findIndex((c) => c.dataset.formuleCarte === slug);
  if (!blocExemple || !modele || rang < 0) return;
  boutonsExemple.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.exempleChoix === slug)));
  cartes.forEach((c) => c.toggleAttribute('data-choisie', c.dataset.formuleCarte === slug));
  blocExemple.style.setProperty('--ordre-mobile', String(rang * 2 + 1));
  blocExemple.replaceChildren(modele.content.cloneNode(true));
  if (animer && !calme) {
    blocExemple.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], {
      duration: 320,
      easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
    });
  }
}

boutonsExemple.forEach((b) => b.addEventListener('click', () => afficherExemple(b.dataset.exempleChoix ?? '')));
// Clic n'importe où sur la carte (hors liens et boutons) : même effet
cartes.forEach((c) =>
  c.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a, button')) return;
    afficherExemple(c.dataset.formuleCarte ?? '');
  }),
);
// Clic sur « Choisir cette formule » : l'exemple suit aussi
document.querySelectorAll<HTMLAnchorElement>('a[data-formule]').forEach((a) =>
  a.addEventListener('click', () => {
    const slug = new URL(a.href).searchParams.get('formule');
    if (slug) afficherExemple(slug, false);
  }),
);
// Arrivée avec ?formule=… : présélection de l'exemple
if (demande) afficherExemple(demande, false);
