
import React from 'react';
import { Check } from 'lucide-react';
import { TopicItem } from '../../config/topicsConfig';
import { IconMap } from './iconMap';

interface TopicCardProps {
  topic: TopicItem;
  isCompleted: boolean;
  onSelect: (topicId: string) => void;
}

const TopicCard = ({ topic, isCompleted, onSelect }: TopicCardProps) => {
  const TopicIcon = IconMap[topic.id] || IconMap[topic.category || ''] || IconMap.default;

  return (
    <button 
      onClick={() => onSelect(topic.id)}
      className={`flex items-center gap-3 p-4 rounded-lg transition-all transform hover:scale-105 ${
        isCompleted 
          ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
          : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
      }`}
    >
      <div className="p-2 rounded-full bg-purple-500/20">
        {React.createElement(TopicIcon, { className: "w-5 h-5" })}
      </div>
      <span className="flex-1 text-left">{topic.name}</span>
      {isCompleted && (
        <Check className="w-5 h-5 text-green-500" />
      )}
    </button>
  );
};

export default TopicCard;
