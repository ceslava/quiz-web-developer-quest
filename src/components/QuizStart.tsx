
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { BookOpen, Code, Palette, Globe, BookType, Brain, Landmark, FilmIcon, Tv, Users } from "lucide-react";

const topics = [
  { id: "desarrollo-web", name: "Desarrollo Web", icon: Code },
  { id: "historia", name: "Historia", icon: BookOpen },
  { id: "diseño", name: "Diseño", icon: Palette },
  { id: "tipografía", name: "Tipografía", icon: BookType },
  { id: "ia", name: "IA", icon: Brain },
  { id: "geografía", name: "Geografía", icon: Globe },
  { id: "arte", name: "Arte", icon: Palette },
  { id: "cine", name: "Cine", icon: FilmIcon },
  { id: "series", name: "Series", icon: Tv },
  { id: "cultura", name: "Cultura", icon: Users }
];

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  topic: z.string({
    required_error: "Por favor selecciona un tema",
  }),
});

interface QuizStartProps {
  onStart: (data: z.infer<typeof formSchema>) => void;
  isDarkMode?: boolean;
}

const QuizStart = ({ onStart, isDarkMode = false }: QuizStartProps) => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
    },
  });

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    form.setValue("topic", topicId);
  };

  const cardClassName = isDarkMode 
    ? "bg-slate-800 border-slate-700 shadow-xl" 
    : "bg-white shadow-lg";

  return (
    <div className="flex-grow flex items-center justify-center p-4">
      <Card className={`w-full max-w-md p-6 space-y-6 ${cardClassName}`}>
        <h2 className="text-2xl font-bold text-center">
          ¡Bienvenido al Quiz!
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onStart)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre (opcional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre" {...field} className={isDarkMode ? "bg-slate-700 border-slate-600" : ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (opcional)</FormLabel>
                  <FormControl>
                    <Input placeholder="tu@email.com" type="email" {...field} className={isDarkMode ? "bg-slate-700 border-slate-600" : ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="topic"
              render={() => (
                <FormItem>
                  <FormLabel>Elige un tema</FormLabel>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {topics.map((topic) => {
                      const TopicIcon = topic.icon;
                      const isSelected = selectedTopic === topic.id;
                      
                      return (
                        <motion.div
                          key={topic.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleTopicSelect(topic.id)}
                          className={`cursor-pointer rounded-full px-3 py-1.5 flex items-center gap-2 transition-colors ${
                            isSelected 
                              ? 'bg-primary text-primary-foreground' 
                              : isDarkMode 
                                ? 'bg-slate-700 hover:bg-slate-600 text-slate-200' 
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                          }`}
                        >
                          <TopicIcon size={16} />
                          <span className="text-sm font-medium truncate">{topic.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                  {form.formState.errors.topic && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.topic.message}</p>
                  )}
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-6">
              Comenzar Quiz
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default QuizStart;
