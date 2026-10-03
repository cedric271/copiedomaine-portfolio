export interface CaseStudyImage {
  src: string;
  alt: string;
}

export interface CaseStudyLink {
  label: string;
  url?: string;
  wide?: boolean;
  youtubeId?: string;
}

export interface CaseStudyResultBlock {
  text?: string;
  images?: CaseStudyImage[];
}

export interface CaseStudySection {
  title: string;
  /** Adds extra vertical space above this section. */
  spaced?: boolean;
  paragraphs?: string[];
  resultBlocks?: CaseStudyResultBlock[];
  closing?: string[];
  links?: CaseStudyLink[];
}

export interface CaseStudy {
  context?: string[];
  actions?: string[];
  result?: string[];
  resultBlocks?: CaseStudyResultBlock[];
  resultImages?: CaseStudyImage[];
  resultLinks?: CaseStudyLink[];
  /** Generic section-based layout (title + content), used to fully customize a case study. */
  sections?: CaseStudySection[];
}

export interface Client {
  slug: string;
  name: string;
  description?: string;
  logo?: string;
  caseStudy?: CaseStudy;
}

export const clients: Client[] = [
  {
    slug: "maubius-crm",
    name: "Maubius CRM",
    description: "CRM IA pour les concessionnaires automobiles.",
    logo: "/logos/maubius-crm.png",
    caseStudy: {
      sections: [
        {
          title: "Le problème",
          paragraphs: [
            "Maubius développait un CRM IA spécialement conçu pour les concessionnaires automobiles. Le produit était encore en développement et testé auprès de quelques concessionnaires pilotes.",
            "Avant même sa commercialisation à grande échelle, l'entreprise avait besoin de commencer à occuper le terrain et à construire sa notoriété auprès du marché automobile.",
          ],
        },
        {
          title: "La stratégie",
          spaced: true,
          paragraphs: [
            "Plutôt que de faire reposer la visibilité de Maubius sur une seule page entreprise, nous avons multiplié les points de contact avec le marché automobile.",
            "La stratégie : déployer une stratégie de ghostwriting pour faire prendre la parole à <strong>5 dirigeants de Maubius sur LinkedIn</strong>, au Québec et en France.",
          ],
        },
        {
          title: "L'exécution",
          paragraphs: [
            "Jusqu'à 12 publications <strong>LinkedIn</strong> par semaine, contenus <strong>Instagram</strong>, conception de l'arborescence et rédaction des pages du site, articles SEO/GEO, landing pages et préparation de podcasts.",
          ],
        },
        {
          title: "Résultats",
          spaced: true,
          paragraphs: ["En 6 mois :"],
          resultBlocks: [
            {
              text: "<strong>1,4 M+ d'impressions</strong>",
              images: [
                { src: "/case-studies/maubius-crm/nombre-impressions.png", alt: "Nombre d'impressions cumulées — Maubius CRM" },
              ],
            },
            {
              text: "<strong>+2 500 abonnés</strong>",
              images: [
                { src: "/case-studies/maubius-crm/nombre-abonnes.png", alt: "Augmentation du nombre d'abonnés — Maubius CRM" },
              ],
            },
            {
              text: "Plusieurs publications à <strong>+100 000 vues</strong>",
              images: [
                { src: "/case-studies/maubius-crm/post-1.png", alt: "Publication à plus de 100 000 vues — Maubius CRM" },
                { src: "/case-studies/maubius-crm/post-2.png", alt: "Publication à plus de 100 000 vues — Maubius CRM" },
              ],
            },
          ],
          closing: [
            "<p>Et cette visibilité ne s'est pas limitée aux statistiques LinkedIn. Lors d'un événement du secteur automobile, l'un des dirigeants de Maubius m'a expliqué :</p>",
            "<blockquote>« Oui, ça marche ! Les gens en parlent. L'autre jour pendant l'événement, les gens venaient me voir et savaient tous qui j'étais et ce que je faisais. »</blockquote>",
            "<p>Il ajoutait également :</p>",
            "<blockquote>« On a des leads qui rentrent aussi via la landing page. On a une bonne base de clients intéressés maintenant. »</blockquote><cite>— Christopher Houde, co-fondateur, Maubius</cite>",
          ],
          links: [
            { label: "Voir les publications LinkedIn du compte 1", url: "/maubius-crm/publications-linkedin-compte-1" },
            { label: "Voir les publications LinkedIn du compte 2", url: "/maubius-crm/publications-linkedin-compte-2" },
            { label: "Voir les pages du site Internet", url: "/maubius-crm/pages-site" },
            { label: "Voir le site Internet", url: "https://maubius.com/" },
          ],
        },
      ],
    },
  },
  {
    slug: "groupe-mg-marketing",
    name: "Groupe M&G Marketing",
    description: "Centre d'appels et organisation de ventes privées dans l'automobile.",
    logo: "/logos/groupe-mg-marketing.gif",
    caseStudy: {
      sections: [
        {
          title: "Le problème",
          paragraphs: [
            "Groupe M&G Marketing aide les concessionnaires automobiles à augmenter leurs ventes grâce à son centre d'appels, ses formations et l'organisation de ventes privées.",
            "L'entreprise souhaitait développer sa visibilité sur les réseaux sociaux pour se faire connaître auprès de nouveaux concessionnaires.",
          ],
        },
        {
          title: "La stratégie",
          spaced: true,
          paragraphs: [
            "Nous avons travaillé sur deux fronts : développer la présence de M&G sur les réseaux sociaux, tout en faisant du président de l'entreprise l'un des principaux visages de cette communication.",
            "L'objectif était de publier régulièrement du contenu pour expliquer ce que fait M&G, montrer son expertise et ses résultats sur le terrain, et rester présent dans l'esprit des décideurs du secteur automobile.",
          ],
        },
        {
          title: "L'exécution",
          paragraphs: [
            "Sur les comptes <strong>LinkedIn, Instagram et Facebook</strong> de l'entreprise :<ul><li>2 publications par semaine, soit 104 publications sur 12 mois</li><li>1 vidéo courte par mois</li><li>1 vidéo corporative pour le site internet</li></ul>",
            "En parallèle, j'ai assuré le <strong>ghostwriting LinkedIn</strong> du président, à raison de 2 publications par semaine.",
          ],
        },
        {
          title: "Les résultats",
          spaced: true,
          paragraphs: [
            "Les premiers résultats commerciaux sont arrivés <strong>moins de 2 mois après le lancement de la stratégie</strong>.",
            "<strong>2 nouveaux clients</strong> ont sollicité les services de M&G après avoir vu passer les publications sur les réseaux sociaux.",
            "Ces prises de contact ont débouché sur <strong>2 contrats signés pour une valeur totale d'environ 10 000 $</strong>.",
          ],
          closing: [
            "<blockquote>« J'ai eu deux clients aussi qui ont sollicité nos services parce qu'ils ont vu passer les publications. Ça leur a fait penser de travailler avec nous. »</blockquote><cite>— Christopher Houde, Président, Groupe M&G Marketing</cite>",
          ],
          links: [
            { label: "Voir les 104 publications", url: "/groupe-mg-marketing/recueil-publications", wide: true },
            { label: "Voir la vidéo courte 1", youtubeId: "o2OBIcGMs84" },
            { label: "Voir la vidéo courte 2", youtubeId: "4YcD4S3QINA" },
            { label: "Voir la vidéo courte 3", youtubeId: "_9z53_mk5qE" },
            { label: "Voir la vidéo courte 4", youtubeId: "GWt7VGtjZVk" },
            { label: "Voir la vidéo courte 6", youtubeId: "gbgy5Bp-s4M" },
            { label: "Voir la vidéo courte 7", youtubeId: "TIBi4tqKeNo" },
            { label: "Voir la vidéo corporative (à venir)", wide: true },
          ],
        },
      ],
    },
  },
  {
    slug: "groupe-automax",
    name: "Groupe Automax",
  },
  {
    slug: "quercus-gestion",
    name: "Quercus Gestion",
    description: "Cabinet de direction administrative et financière.",
    logo: "/logos/quercus-gestion.png",
    caseStudy: {
      sections: [
        {
          title: "Le problème",
          paragraphs: [
            "Quercus Gestion est un cabinet de direction administrative et financière externalisée qui accompagne les dirigeants de PME dans la structuration et le pilotage de leur entreprise.",
            "L'entreprise avait besoin d'un système capable de présenter son accompagnement, de répondre aux principales questions des prospects et de les qualifier avant une prise de rendez-vous.",
          ],
        },
        {
          title: "L'approche",
          paragraphs: [
            "J'ai proposé de construire le parcours autour d'une <strong>VSL Call</strong> : une vidéo de vente chargée de présenter le problème, développer la solution proposée par Quercus et amener les prospects intéressés vers un questionnaire de qualification, puis une prise de rendez-vous.",
            "L'objectif était de faire une partie du travail de présentation et de qualification <strong>avant l'appel commercial</strong>.",
          ],
        },
        {
          title: "L'exécution",
          paragraphs: [
            "J'ai travaillé sur la structure et rédigé le <strong>script complet de la VSL</strong>, de l'accroche jusqu'à l'appel à l'action vers la prise de rendez-vous.",
          ],
          links: [{ label: "Lire le script de la VSL", url: "/quercus/vsl-script" }],
        },
      ],
    },
  },
  {
    slug: "copy-camp",
    name: "Copy House",
    description: "Formation en copywriting et marketing digital.",
    logo: "/logos/copy-camp.jpg",
    caseStudy: {
      sections: [
        {
          title: "Le contexte",
          paragraphs: [
            "Dans le cadre du Copy Camp, une formation en copywriting et marketing digital, j'ai travaillé pendant 2 mois à partir du cas réel d'une entreprise dans l'infoprenariat afin de construire un <strong>tunnel de vente complet</strong>.",
            "L'objectif : partir d'une offre et de son persona pour construire <strong>l'intégralité du parcours de vente</strong>, de la première publicité jusqu'à la conversion.",
          ],
        },
        {
          title: "L'approche",
          paragraphs: [
            "Plutôt que de travailler chaque pièce de copy séparément, j'ai construit le tunnel de vente comme un ensemble cohérent.",
            "J'ai d'abord réalisé l'étude du persona pour identifier ses problèmes, ses désirs, ses objections et les angles à exploiter.",
            "Chaque étape du tunnel a ensuite été pensée pour prolonger la précédente et faire avancer le prospect jusqu'à l'offre.",
          ],
        },
        {
          title: "L'exécution",
          paragraphs: [
            "J'ai conçu et rédigé l'ensemble du tunnel :",
            "<strong>Publicité → Page d'opt-in → Emails post opt-in → VSL → Page de prise de rendez-vous → Upsell</strong>",
            "<h5>Voir le projet</h5>",
          ],
          links: [
            { label: "Publicité", url: "/copy-camp/publicites" },
            { label: "Page d'opt-in", url: "/copy-camp/page-optin" },
            { label: "Emails post opt-in", url: "/copy-camp/emails" },
            { label: "Script de la VSL", url: "/copy-camp/script-vsl" },
            { label: "Page de prise de rendez-vous", url: "/copy-camp/page-appel" },
            { label: "Upsell", url: "/copy-camp/upsell" },
          ],
        },
      ],
    },
  },
  {
    slug: "creativminds",
    name: "CreativMinds",
    description: "Consulting en transformation digitale et business analyse.",
    logo: "/logos/creativminds.jpg",
    caseStudy: {
      sections: [
        {
          title: "Le problème",
          paragraphs: [
            "CreativMinds est une entreprise de conseil spécialisée dans la transformation digitale.",
            "La cliente avait développé un produit disponible en version physique et digitale, mais n'avait pas encore de véritable stratégie pour le commercialiser en ligne.",
            "Il fallait donc partir de zéro : structurer l'offre, construire le parcours de vente et commencer à attirer des prospects vers celui-ci.",
          ],
        },
        {
          title: "La stratégie",
          paragraphs: [
            "J'ai commencé par retravailler la manière dont le produit était vendu en créant une tiered offer (offre à 3 niveaux), à 69 €, 89 € et 97 €.",
            "Les trois paliers ont été construits pour augmenter progressivement la valeur perçue et orienter naturellement le choix vers l'offre la plus complète.",
            "Une fois l'offre structurée, nous pouvions construire le parcours permettant de la présenter et de l'acheter directement sur le site.",
          ],
        },
        {
          title: "L'exécution",
          paragraphs: [
            "J'ai mis en place le parcours de vente complet :",
            "Landing page → Bon de commande → Page de remerciement → Séquence d'emails post-achat",
            "En parallèle, nous avons développé la visibilité de la fondatrice grâce au ghostwriting sur LinkedIn, avec l'objectif d'attirer de nouveaux prospects vers l'offre.",
          ],
        },
        {
          title: "Les résultats",
          paragraphs: [
            "En moins d'un mois, le nouveau parcours a généré près de 900 € de ventes, permettant à la cliente de rentabiliser intégralement le coût de ma prestation.",
          ],
          resultBlocks: [
            {
              images: [
                { src: "/case-studies/creativminds-1.png", alt: "Statistiques de ventes du Deck BADASS — CreativMinds" },
                { src: "/case-studies/creativminds-2.png", alt: "Liste des commandes du Deck BADASS — CreativMinds" },
              ],
            },
          ],
          links: [
            { label: "Voir la landing page", url: "/case-studies/creativminds/landing-page.html" },
            { label: "Voir le bon de commande", url: "/case-studies/creativminds/bon-de-commande.html" },
            { label: "Voir la page de remerciement", url: "/case-studies/creativminds/page-de-remerciement.html" },
          ],
        },
      ],
    },
  },
];
