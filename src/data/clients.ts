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

export interface CaseStudy {
  context: string[];
  actions: string[];
  result?: string[];
  resultImages?: CaseStudyImage[];
  resultLinks?: CaseStudyLink[];
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
  },
  {
    slug: "groupe-mg-marketing",
    name: "Groupe M&G Marketing",
    description: "Centre d'appels et organisation de ventes privées dans l'automobile.",
    logo: "/logos/groupe-mg-marketing.gif",
    caseStudy: {
      context: [
        "Groupe M&G Marketing aide les concessionnaires automobiles à augmenter leurs ventes de véhicules. Notamment via leur centre d'appel, leurs formations pour le personnel en concession et l'organisation de ventes privées.",
      ],
      actions: [
        "L'entreprise voulait se faire connaître auprès d'autres clients potentiels. J'ai mis en place une stratégie de contenu sur les réseaux sociaux pour développer leur visibilité, expliquer ce qu'ils font et montrer leurs résultats.",
        "L'ensemble de la stratégie consistait en la publication sur les comptes <strong>LinkedIn, Instagram et Facebook</strong> de l'entreprise :<ul><li>2 publications/semaine | 104 publications sur 12 mois</li><li>1 vidéo courte/mois | 12 vidéos sur 12 mois</li><li>1 vidéo corporative sur le site internet</li></ul>",
        "Ainsi que du <strong>ghostwriting LinkedIn</strong> sur le compte personnel du président directeur, à raison de 2 publications par semaine.",
      ],
      result: [
        "Moins de deux mois après le début de la stratégie, 2 nouveaux clients ont contacté l'entreprise après avoir vu passer les publications sur les réseaux sociaux. Ce sont 2 contrats qui ont été signés pour une valeur d'environ 10 000 $.",
      ],
      resultLinks: [
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
      context: [
        "Quercus Gestion est un cabinet de conseil en direction administrative et financière externalisée qui accompagne les PME en les aidant à se structurer.",
      ],
      actions: [
        "Pour développer son activité, j'ai proposé à l'entreprise de mettre en place une <strong>VSL Call</strong>. C'est une VSL (video sales letter) qui renvoie sur un questionnaire et une prise de rendez-vous.",
        "La VSL est pertinente dans ce cas-là, car elle permet de :<ul><li>filtrer les prospects en amont en faisant bien comprendre à qui s'adresse l'entreprise et pour qui est l'offre.</li><li>répondre aux questions récurrentes.</li><li>automatiser la prospection 24h/24, 7j/7.</li></ul>",
        '<a href="/quercus/vsl-script" target="_blank" rel="noopener noreferrer">Voir le script de la VSL →</a>',
      ],
    },
  },
  {
    slug: "copy-camp",
    name: "Copy camp",
    description: "Formation en copywriting et marketing digital.",
    logo: "/logos/copy-camp.jpg",
    caseStudy: {
      context: [
        "Copy camp est une formation de référence en copywriting et en marketing digital sur le marché francophone.",
      ],
      actions: [
        "Pendant 2 mois, j'ai travaillé sur le cas d'une entreprise dans l'infoprenariat, pour laquelle j'ai créé un <strong>tunnel de vente complet</strong> avec <strong>l'étude du persona</strong> et la rédaction de toutes les pièces de copy : Publicité ➤ Page optin ➤ Emails post optin ➤ VSL ➤ Page de rendez-vous ➤ Upsell",
        `<div class="action-links">
          <a href="/copy-camp/publicites" target="_blank" rel="noopener noreferrer">Voir la publicité →</a>
          <a href="/copy-camp/page-optin" target="_blank" rel="noopener noreferrer">Voir la page d'optin →</a>
          <a href="/copy-camp/emails" target="_blank" rel="noopener noreferrer">Voir les emails post optin →</a>
          <a href="/copy-camp/script-vsl" target="_blank" rel="noopener noreferrer">Voir le script VSL →</a>
          <a href="/copy-camp/page-appel" target="_blank" rel="noopener noreferrer">Voir la page d'appel →</a>
          <a href="/copy-camp/upsell" target="_blank" rel="noopener noreferrer">Voir la page d'upsell →</a>
        </div>`,
      ],
    },
  },
  {
    slug: "creativminds",
    name: "CreativMinds",
    description: "Consulting en transformation digitale et business analyse.",
    logo: "/logos/creativminds.jpg",
    caseStudy: {
      context: [
        "CreativMinds est une entreprise de conseil spécialisée dans la transformation digitale.",
        "L'entreprise voulait vendre son produit mais n'avait aucune idée de comment faire.",
      ],
      actions: [
        "Pour vendre le produit (physique et digital), j'ai d'abord créé une offre type <strong>tiered offer</strong> avec 3 offres possibles : 69€, 89€ et 97€.",
        "J'ai ensuite mis en place une <strong>landing page</strong> avec un <strong>bon de commande</strong> et une <strong>page de remerciement</strong> pour vendre l'offre directement sur son site.",
        "Enfin, l'entreprise avait besoin de visibilité, avant tout. Nous avons donc fait du <strong>ghostwriting sur LinkedIn</strong> pour développer l'acquisition de prospects et les réorienter vers la landing page.",
      ],
      result: [
        "En moins d'un mois, ma cliente a vendu pour presque 900€ de produit et a pu rembourser le prix de sa prestation.",
      ],
      resultImages: [
        { src: "/case-studies/creativminds-1.png", alt: "Statistiques de ventes du Deck BADASS — CreativMinds" },
        { src: "/case-studies/creativminds-2.png", alt: "Liste des commandes du Deck BADASS — CreativMinds" },
      ],
      resultLinks: [
        { label: "Voir la landing page", url: "/case-studies/creativminds/landing-page.html" },
        { label: "Voir le bon de commande", url: "/case-studies/creativminds/bon-de-commande.html" },
        { label: "Voir la page de remerciement", url: "/case-studies/creativminds/page-de-remerciement.html" },
      ],
    },
  },
];
