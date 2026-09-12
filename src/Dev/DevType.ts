export interface TechCard {
  id: string;
  name: string;
  icon: string;
  badge: string;
  description: string;
  category: string;
  level: "Beginner-Friendly" | "Intermediate";
  rating: number;
  type: "Frontend" | "Backend" | "Database" | "Language" | "Styling" | "DevOps";
}
