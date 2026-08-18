import throne from "@/assets/p1.jpg";
import orion from "@/assets/p2.jpg";
import verdant from "@/assets/p3.jpg";
import nocturne from "@/assets/p4.jpg";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  notes: string;
  price: number;
  size: string;
  image: string;
  family: string;
  story: string;
  pyramid: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "sovereign",
    name: "Sovereign",
    tagline: "Absolute. Dark. Unrivalled.",
    notes: "Warm · Leather · Amber",
    price: 2499,
    size: "100ml Extrait de Parfum",
    image: throne,
    family: "Amber Leather",
    story:
      "Built for the room you walk into last. Smoked leather laid over amber resins, softened by a breath of vanilla that never asks permission.",
    pyramid: [
      { label: "Top", value: "Saffron, Black Pepper, Bergamot" },
      { label: "Heart", value: "Leather, Tobacco Flower, Rose" },
      { label: "Base", value: "Amber, Labdanum, Vanilla" },
    ],
  },
  {
    slug: "orion",
    name: "Orion",
    tagline: "Infinite. Cold. Ambitious.",
    notes: "Fresh · Citrus · Aromatic",
    price: 2199,
    size: "100ml Eau de Parfum",
    image: orion,
    family: "Frozen Citrus",
    story:
      "Cold air at altitude. Crushed citrus peel over mineral musk and a metallic vetiver trail that lingers long after the room empties.",
    pyramid: [
      { label: "Top", value: "Grapefruit, Frozen Mint, Juniper" },
      { label: "Heart", value: "Sea Salt, Violet Leaf, Lavender" },
      { label: "Base", value: "Vetiver, Mineral Musk, Cedar" },
    ],
  },
  {
    slug: "verdant",
    name: "Verdant",
    tagline: "Silent. Sharp. Disciplined.",
    notes: "Fresh · Woody · Aromatic",
    price: 2199,
    size: "100ml Eau de Parfum",
    image: verdant,
    family: "Green Woods",
    story:
      "Rain on fig leaves at first light. Bitter green stems, dry woods, and a quiet restraint that reads as confidence.",
    pyramid: [
      { label: "Top", value: "Fig Leaf, Green Mandarin, Basil" },
      { label: "Heart", value: "Galbanum, Iris, Geranium" },
      { label: "Base", value: "Cypress, Patchouli, Dry Moss" },
    ],
  },
  {
    slug: "nocturne",
    name: "Nocturne",
    tagline: "Ancient. Liquid. Empire.",
    notes: "Oud · Smoky · Musk",
    price: 2899,
    size: "100ml Extrait de Parfum",
    image: nocturne,
    family: "Oud Smoke",
    story:
      "Aged oud burned over red fruits and incense. The heaviest thing we make, and the one people remember you by.",
    pyramid: [
      { label: "Top", value: "Plum, Clove, Pink Pepper" },
      { label: "Heart", value: "Oud, Incense, Damask Rose" },
      { label: "Base", value: "Sandalwood, Tonka, Black Musk" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
