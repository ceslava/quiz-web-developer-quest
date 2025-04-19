
import React from 'react';
import TopicCard from './TopicCard';
import { TopicItem } from '../../config/topicsConfig';

interface TopicCategoryProps {
  categoryName: string;
  topics: TopicItem[];
  completedTopics: string[];
  onTopicSelect: (topicId: string) => void;
}

const TopicCategory = ({ categoryName, topics, completedTopics, onTopicSelect }: TopicCategoryProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-white mb-4">{categoryName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            isCompleted={completedTopics.includes(topic.id)}
            onSelect={onTopicSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default TopicCategory;
