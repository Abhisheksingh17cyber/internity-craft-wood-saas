export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

export const products: Product[] = [
    {
        id: "1",
        name: "Obsidian Bed Frame",
        price: 2400,
        description: "Solid charred oak with invisible joinery. A masterpiece of dark minimalism.",
        category: "Bedroom",
        image: "https://images.unsplash.com/photo-1505693416383-d7324b8c6d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "2",
        name: "Nimbus Lounge Chair",
        price: 1850,
        description: "Cloud-like comfort carved from ash wood. Designed for contemplation.",
        category: "Living",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: "3",
        name: "Terra Dining Table",
        price: 3200,
        description: "A monolithic slab of walnut for gathering. Each grain tells a century-old story.",
        category: "Dining",
        image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "4",
        name: "Apex Desk",
        price: 2100,
        description: "Minimalist workspace designed for focus. Integrated cable management.",
        category: "Workspace",
        image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "5",
        name: "Solstice Lamp",
        price: 450,
        description: "Ambient lighting carved from solid maple. Warmth for the modern home.",
        category: "Lighting",
        image: "https://images.unsplash.com/photo-1513506003011-3b03c801c213?q=80&w=1978&auto=format&fit=crop"
    },
    {
        id: "6",
        name: "Haven Sideboard",
        price: 2800,
        description: "Seamless storage with push-to-open doors. Elevated on slender brass legs.",
        category: "Storage",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1976&auto=format&fit=crop"
    }
];
