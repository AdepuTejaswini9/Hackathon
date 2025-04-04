
export interface TipType {
  id: number;
  category: string;
  title: string;
  content: string;
}

export const tipCategories = [
  'Nutrition',
  'Hydration', 
  'Recovery',
  'Training',
  'Motivation',
  'Sleep',
  'Stretching',
  'Mindfulness'
];

export const tips: TipType[] = [
  {
    id: 1,
    category: 'Nutrition',
    title: 'Protein Timing Matters',
    content: 'Consuming protein within 30 minutes after your workout helps maximize muscle recovery and growth. Aim for 20-30g of high-quality protein.'
  },
  {
    id: 2,
    category: 'Hydration',
    title: 'Pre-Hydrate for Better Performance',
    content: 'Drink 16-20oz of water 2-3 hours before exercise to ensure you start your workout properly hydrated, which can improve performance by up to 25%.'
  },
  {
    id: 3,
    category: 'Recovery',
    title: 'Cold Immersion Benefits',
    content: 'A 10-15 minute cold shower or ice bath after intense training can reduce inflammation and speed up recovery by constricting blood vessels and reducing metabolic activity.'
  },
  {
    id: 4,
    category: 'Training',
    title: 'Progressive Overload Principle',
    content: 'Gradually increase the weight, frequency, or number of repetitions in your strength training routine to continuously challenge your muscles and promote growth.'
  },
  {
    id: 5,
    category: 'Motivation',
    title: 'Set SMART Fitness Goals',
    content: 'Make your fitness goals Specific, Measurable, Achievable, Relevant, and Time-bound to increase your chances of success and maintain motivation.'
  },
  {
    id: 6,
    category: 'Sleep',
    title: 'Sleep for Muscle Growth',
    content: 'Aim for 7-9 hours of quality sleep per night. During deep sleep, your body releases growth hormone which is essential for muscle repair and growth.'
  },
  {
    id: 7,
    category: 'Stretching',
    title: 'Dynamic vs. Static Stretching',
    content: 'Perform dynamic stretches (moving stretches) before workouts to prepare your body, and static stretches (held positions) after workouts to improve flexibility.'
  },
  {
    id: 8,
    category: 'Nutrition',
    title: 'Carb Timing for Energy',
    content: 'Consume easily digestible carbohydrates 1-2 hours before intense workouts to fuel your exercise and improve performance during high-intensity activities.'
  },
  {
    id: 9,
    category: 'Mindfulness',
    title: 'Mind-Muscle Connection',
    content: 'Focus your attention on the specific muscle you\'re working during each exercise. This conscious control can increase muscle activation by up to 20%.'
  },
  {
    id: 10,
    category: 'Recovery',
    title: 'Rest Days Are Essential',
    content: 'Schedule at least 1-2 rest days per week. Recovery time allows your body to repair tissues, replenish energy stores, and prevent overtraining.'
  },
  {
    id: 11,
    category: 'Hydration',
    title: 'Electrolyte Balance',
    content: 'For workouts lasting longer than 60 minutes, consider a sports drink with electrolytes to replace what you lose through sweat and maintain proper muscle function.'
  },
  {
    id: 12,
    category: 'Training',
    title: 'Compound Exercises Efficiency',
    content: 'Prioritize compound exercises like squats, deadlifts, and pull-ups that work multiple muscle groups simultaneously for more efficient workouts and greater hormonal response.'
  }
];
