export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  prices: {
    A4: number;
    A3: number;
    "6:4": number;
  };
  featured?: boolean;
  trending?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Cars",
    slug: "cars",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    description: "Stunning automotive artwork",
    count: 24,
  },
  {
    id: "2",
    name: "Bikes",
    slug: "bikes",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description: "Two-wheeled legends",
    count: 18,
  },
  {
    id: "3",
    name: "Anime",
    slug: "anime",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    description: "Japanese animation art",
    count: 42,
  },
  {
    id: "4",
    name: "Movies",
    slug: "movies",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    description: "Iconic film moments",
    count: 35,
  },
  {
    id: "5",
    name: "Cricket",
    slug: "cricket",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    description: "Celebrate the legends",
    count: 20,
  },
  {
    id: "6",
    name: "Custom Posters",
    slug: "custom",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    description: "Your vision, our print",
    count: 0,
  },
];

export const products: Product[] = [
  // Cars
  {
    id: "car-1",
    name: "Ferrari 488 GTB",
    description: "The iconic Italian supercar in stunning red, captured in dynamic motion.",
    category: "cars",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    prices: { A4: 199, A3: 349, "6:4": 499 },
    featured: true,
    trending: true,
  },
  {
    id: "car-2",
    name: "Porsche 911 GT3",
    description: "German engineering perfection, the ultimate driver's car.",
    category: "cars",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
    prices: { A4: 199, A3: 349, "6:4": 499 },
    trending: true,
  },
  {
    id: "car-3",
    name: "Lamborghini Huracán",
    description: "Bold, aggressive, and unmistakably Italian.",
    category: "cars",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    prices: { A4: 199, A3: 349, "6:4": 499 },
  },
  {
    id: "car-4",
    name: "Mercedes AMG GT",
    description: "Luxury meets raw performance.",
    category: "cars",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    prices: { A4: 199, A3: 349, "6:4": 499 },
  },
  // Bikes
  {
    id: "bike-1",
    name: "Ducati Panigale V4",
    description: "Italian racing DNA in its purest form.",
    category: "bikes",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    prices: { A4: 179, A3: 299, "6:4": 449 },
    featured: true,
  },
  {
    id: "bike-2",
    name: "Kawasaki Ninja H2",
    description: "Supercharged perfection on two wheels.",
    category: "bikes",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    prices: { A4: 179, A3: 299, "6:4": 449 },
    trending: true,
  },
  {
    id: "bike-3",
    name: "Royal Enfield Classic",
    description: "Timeless design meets modern reliability.",
    category: "bikes",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80",
    prices: { A4: 179, A3: 299, "6:4": 449 },
  },
  // Anime
  {
    id: "anime-1",
    name: "Attack on Titan",
    description: "Epic battle scene from the legendary anime.",
    category: "anime",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    prices: { A4: 149, A3: 249, "6:4": 399 },
    featured: true,
    trending: true,
  },
  {
    id: "anime-2",
    name: "Demon Slayer",
    description: "Tanjiro and the art of breath.",
    category: "anime",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&q=80",
    prices: { A4: 149, A3: 249, "6:4": 399 },
    trending: true,
  },
  {
    id: "anime-3",
    name: "One Piece Adventure",
    description: "Join the Straw Hat crew on their journey.",
    category: "anime",
    image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&q=80",
    prices: { A4: 149, A3: 249, "6:4": 399 },
  },
  // Movies
  {
    id: "movie-1",
    name: "The Dark Knight",
    description: "Why so serious? The iconic Joker moment.",
    category: "movies",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    prices: { A4: 199, A3: 349, "6:4": 499 },
    featured: true,
  },
  {
    id: "movie-2",
    name: "Interstellar",
    description: "Beyond the stars, into the unknown.",
    category: "movies",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
    prices: { A4: 199, A3: 349, "6:4": 499 },
    trending: true,
  },
  {
    id: "movie-3",
    name: "Pulp Fiction",
    description: "Tarantino's masterpiece captured.",
    category: "movies",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    prices: { A4: 199, A3: 349, "6:4": 499 },
  },
  // Cricket
  {
    id: "cricket-1",
    name: "Virat Kohli - King",
    description: "The chase master in action.",
    category: "cricket",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    prices: { A4: 179, A3: 299, "6:4": 449 },
    featured: true,
    trending: true,
  },
  {
    id: "cricket-2",
    name: "MS Dhoni - Finisher",
    description: "Captain Cool, the greatest finisher.",
    category: "cricket",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80",
    prices: { A4: 179, A3: 299, "6:4": 449 },
  },
  {
    id: "cricket-3",
    name: "Sachin Tendulkar",
    description: "The God of Cricket.",
    category: "cricket",
    image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&q=80",
    prices: { A4: 179, A3: 299, "6:4": 449 },
  },
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter((p) => p.category === categorySlug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};

export const getTrendingProducts = (): Product[] => {
  return products.filter((p) => p.trending);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((c) => c.slug === slug);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  );
};
