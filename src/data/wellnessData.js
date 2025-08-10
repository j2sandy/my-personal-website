// data/wellnessData.js
import { Heart, Brain, Dumbbell, Apple, Users } from 'lucide-react';

export const wellnessPillars = [
  {
    id: 'physical',
    title: 'Physical Health',
    icon: Dumbbell,
    color: 'from-green-400 to-blue-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-700',
    description: 'Stay active, build strength, and maintain your body through regular exercise and movement.',
    features: ['Regular Exercise', 'Strength Training', 'Flexibility & Mobility', 'Active Lifestyle'],
    stats: { value: '150min', label: 'Weekly Activity Goal' }
  },
  {
    id: 'mental',
    title: 'Mental Health',
    icon: Brain,
    color: 'from-purple-400 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-700',
    description: 'Nurture your mind through mindfulness, stress management, and cognitive wellness practices.',
    features: ['Mindfulness', 'Stress Management', 'Meditation', 'Mental Clarity'],
    stats: { value: '10min', label: 'Daily Meditation' }
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    icon: Apple,
    color: 'from-orange-400 to-red-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    borderColor: 'border-orange-200 dark:border-orange-700',
    description: 'Fuel your body with wholesome, nutritious foods that support your health and energy.',
    features: ['Balanced Diet', 'Meal Planning', 'Hydration', 'Mindful Eating'],
    stats: { value: '2L', label: 'Daily Water Goal' }
  },
  {
    id: 'sleep',
    title: 'Sleep & Recovery',
    icon: Heart,
    color: 'from-indigo-400 to-purple-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    borderColor: 'border-indigo-200 dark:border-indigo-700',
    description: 'Prioritize quality sleep and recovery to restore your body and mind each night.',
    features: ['Sleep Hygiene', 'Recovery Time', 'Rest Periods', 'Sleep Schedule'],
    stats: { value: '7-9h', label: 'Nightly Sleep Goal' }
  },
  {
    id: 'social',
    title: 'Social Wellness',
    icon: Users,
    color: 'from-teal-400 to-cyan-500',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    borderColor: 'border-teal-200 dark:border-teal-700',
    description: 'Build meaningful connections and maintain healthy relationships with family and friends.',
    features: ['Community', 'Relationships', 'Support System', 'Social Activities'],
    stats: { value: '3x', label: 'Weekly Social Time' }
  }
];
