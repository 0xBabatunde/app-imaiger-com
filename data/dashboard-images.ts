export interface DashboardImages {
  name: string;
  description: string;
  cover: string;
  href: string;
}

export const generateImages: DashboardImages[] = [
  {
    name: "HERO IMAGE",
    description: "Grab your visitors' attention",
    cover: "/for-you-001.webp",
    href: "/generate/hero",
  },
  {
    name: "FEATURED IMAGE",
    description: "For your blog posts",
    cover: "/for-you-002.webp",
    href: "/generate/featured",
  },
  {
    name: "CAROUSEL IMAGE",
    description: "Showcase multiple highlights",
    cover: "/for-you-004.webp",
    href: "/generate/carousel",
  },
  {
    name: "OPEN GRAPH IMAGE",
    description: "For social media sharing",
    cover: "/for-you-005.webp",
    href: "/generate/social",
  },
  {
    name: "BACKGROUND IMAGE",
    description: "Get that stunning backdrop",
    cover: "/for-you-007.webp",
    href: "/generate/background",
  },
  {
    name: "PRODUCT IMAGE",
    description: "Bring your products to life",
    cover: "/for-you-006.webp",
    href: "/generate/product",
  },
];

export const madeForYouImages: DashboardImages[] = [
  {
    name: "",
    description: "",
    cover: "",
    href: "",
  },
];
