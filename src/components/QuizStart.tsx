import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { BookOpen, Code, Palette, Globe, BookType, Brain, Landmark, FilmIcon, Tv, Users, Layout, Figma, Image, Cube, Map } from "lucide-react";

const topics = [
  { id: "desarrollo-web", name: "Desarrollo Web", icon: Code, category: "Desarrollo" },
  { id: "historia", name: "Historia", icon: BookOpen, category: "Cultura" },
  { id: "diseño", name: "Diseño", icon: Palette, category: "Diseño" },
  { id: "tipografía", name: "Tipografía", icon: BookType, category: "Diseño" },
  { id: "ia", name: "IA", icon: Brain, category: "Tecnología" },
  { id: "geografía", name: "Geografía", icon: Globe, category: "Cultura" },
  { id: "arte", name: "Arte", icon: Palette, category: "Arte" },
  { id: "cine", name: "Cine", icon: FilmIcon, category: "Entretenimiento" },
  { id: "series", name: "Series", icon: Tv, category: "Entretenimiento" },
  { id: "cultura", name: "Cultura", icon: Users, category: "Cultura" },
  { id: "ux", name: "UX Design", icon: Layout, category: "Diseño" },
  { id: "figma", name: "Figma", icon: Figma, category: "Diseño" },
  { id: "photoshop", name: "Photoshop", icon: Image, category: "Diseño" },
  { id: "3d", name: "3D", icon: Cube, category: "Diseño" },
  { id: "paises", name: "Países", icon: Map, category: "Geografía" },
  { id: "continentes", name: "Continentes", icon: Globe, category: "Geografía" }
];

interface QuizStartProps {
  onStart: (data: { topic: string; name?: string }) => void;
  isDarkMode?: boolean;
  userName?: string;
}

const QuizStart = ({ onStart, isDarkMode = false, userName }: QuizStartProps) => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [localName, setLocalName] = useState(userName || "");

  const formSchema = z.object({
    name: z.string().optional(),
    topic: z.string({
      required_error: "Por favor selecciona un tema",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      name: localName,
    },
  });

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    form.setValue("topic", topicId);
  };

  const filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedTopics = filteredTopics.reduce((acc, topic) => {
    const category = topic.category || "Otros";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(topic);
    return acc;
  }, {} as Record<string, typeof topics>);

  const cardClassName = isDarkMode 
    ? "bg-slate-800 border-slate-700 shadow-xl" 
    : "bg-white shadow-lg";

  return (
    <div className="flex-grow flex items-center justify-center p-4">
      <Card className={`w-full max-w-4xl p-6 space-y-6 ${cardClassName}`}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onStart)} className="space-y-4">
            {!userName && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre (opcional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Tu nombre" 
                        {...field} 
                        className={isDarkMode ? "bg-slate-700 border-slate-600" : ""}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            )}
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Buscar temas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-10 ${isDarkMode ? "bg-slate-700 border-slate-600" : ""}`}
              />
            </div>

            <FormField
              control={form.control}
              name="topic"
              render={() => (
                <FormItem>
                  <div className="space-y-6">
                    {Object.entries(groupedTopics).map(([category, categoryTopics]) => (
                      <div key={category}>
                        <h3 className="text-lg font-semibold mb-3">{category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {categoryTopics.map((topic) => {
                            const TopicIcon = topic.icon;
                            const isSelected = selectedTopic === topic.id;
                            
                            return (
                              <motion.div
                                key={topic.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleTopicSelect(topic.id)}
                                className={`cursor-pointer rounded-xl p-4 flex flex-col items-center gap-2 transition-colors ${
                                  isSelected 
                                    ? 'bg-primary text-primary-foreground' 
                                    : isDarkMode 
                                      ? 'bg-slate-700 hover:bg-slate-600 text-slate-200' 
                                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                                }`}
                              >
                                <TopicIcon size={24} />
                                <span className="text-sm font-medium text-center">{topic.name}</span>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                  {form.formState.errors.topic && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.topic.message}</p>
                  )}
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full mt-6"
              disabled={!selectedTopic}
            >
              Comenzar Quiz
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default QuizStart;
