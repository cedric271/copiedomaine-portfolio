export interface Client {
  slug: string;
  name: string;
  description?: string;
  logo?: string;
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
    description: "Centre d'appels et organisation de ventes privés dans l'automobile.",
    logo: "/logos/groupe-mg-marketing.gif",
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
  },
  {
    slug: "copy-camp",
    name: "Copy camp",
    description: "Formation en copywriting et marketing digital.",
    logo: "/logos/copy-camp.jpg",
  },
  {
    slug: "creativminds",
    name: "CreativMinds",
    description: "Consulting en gestion de projets.",
    logo: "/logos/creativminds.jpg",
  },
];
