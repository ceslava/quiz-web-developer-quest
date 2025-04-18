import { 
  Code, 
  Palette, 
  Brain, 
  Globe, 
  Film, 
  Music, 
  Gamepad2, 
  History, 
  Dumbbell, 
  ChefHat, 
  Microscope,
  Car,
  LucideIcon,
  Users,
  BookOpen,
  Box
} from 'lucide-react';

export interface TopicItem {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface TopicCategory {
  id: string;
  name: string;
  icon: LucideIcon;
  topics: TopicItem[];
}

export const categories: TopicCategory[] = [
  {
    id: "tecnologia",
    name: "Tecnología",
    icon: Brain,
    topics: [
      { id: "desarrollo-web", name: "Desarrollo Web", icon: Code },
      { id: "ia", name: "Inteligencia Artificial", icon: Brain },
      { id: "ciberseguridad", name: "Ciberseguridad", icon: Users },
      { id: "blockchain", name: "Blockchain", icon: Globe }
    ]
  },
  {
    id: "diseno",
    name: "Diseño",
    icon: Palette,
    topics: [
      { id: "ux", name: "UX/UI", icon: Palette },
      { id: "figma", name: "Figma", icon: Box },
      { id: "tipografia", name: "Tipografía", icon: Box },
      { id: "3d", name: "Diseño 3D", icon: Box }
    ]
  },
  {
    id: "ciencia",
    name: "Ciencia",
    icon: Microscope,
    topics: [
      {
        id: "espacio", name: "Astronomía",
        icon: undefined
      },
      {
        id: "biologia", name: "Biología",
        icon: undefined
      },
      {
        id: "quimica", name: "Química",
        icon: undefined
      },
      {
        id: "fisica", name: "Física",
        icon: undefined
      }
    ]
  },
  {
    id: "entretenimiento",
    name: "Entretenimiento",
    icon: Film,
    topics: [
      {
        id: "cine", name: "Cine",
        icon: undefined
      },
      {
        id: "series", name: "Series",
        icon: undefined
      },
      {
        id: "videojuegos", name: "Videojuegos",
        icon: undefined
      },
      {
        id: "anime", name: "Anime y Manga",
        icon: undefined
      }
    ]
  },
  {
    id: "cultura",
    name: "Cultura",
    icon: History,
    topics: [
      {
        id: "historia", name: "Historia",
        icon: undefined
      },
      {
        id: "arte", name: "Arte",
        icon: undefined
      },
      {
        id: "musica", name: "Música",
        icon: undefined
      },
      {
        id: "literatura", name: "Literatura",
        icon: undefined
      }
    ]
  },
  {
    id: "deportes",
    name: "Deportes",
    icon: Dumbbell,
    topics: [
      {
        id: "futbol", name: "Fútbol",
        icon: undefined
      },
      {
        id: "baloncesto", name: "Baloncesto",
        icon: undefined
      },
      {
        id: "tenis", name: "Tenis",
        icon: undefined
      },
      {
        id: "f1", name: "Fórmula 1",
        icon: undefined
      }
    ]
  },
  {
    id: "gastronomia",
    name: "Gastronomía",
    icon: ChefHat,
    topics: [
      {
        id: "cocina", name: "Cocina",
        icon: undefined
      },
      {
        id: "reposteria", name: "Repostería",
        icon: undefined
      },
      {
        id: "vinos", name: "Enología",
        icon: undefined
      },
      {
        id: "comidas-mundo", name: "Comidas del Mundo",
        icon: undefined
      }
    ]
  },
  {
    id: "geografia",
    name: "Geografía",
    icon: Globe,
    topics: [
      {
        id: "paises", name: "Países",
        icon: undefined
      },
      {
        id: "capitales", name: "Capitales",
        icon: undefined
      },
      {
        id: "banderas", name: "Banderas",
        icon: undefined
      },
      {
        id: "maravillas", name: "Maravillas del Mundo",
        icon: undefined
      }
    ]
  }
];

// Helper para obtener todos los topics en formato plano
export const getAllTopics = () => {
  return categories.flatMap(category => 
    category.topics.map(topic => ({
      ...topic,
      category: category.id
    }))
  );
};