
export interface WorkoutType {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  exercises: string[];
  category: string; // Adding category field to easily filter workouts
}

export const workoutCategories = [
  'Strength Training',
  'Cardio',
  'HIIT',
  'Yoga',
  'Pilates',
  'Bodyweight',
  'Stretching',
  'Core Training'
];

export const workouts: WorkoutType[] = [
  {
    id: 1,
    title: 'Full Body Blast',
    description: 'A comprehensive workout targeting all major muscle groups for total body strength.',
    duration: '45 minutes',
    difficulty: 'Intermediate',
    category: 'Strength Training',
    exercises: [
      'Push-ups - 3 sets of 12 reps',
      'Squats - 3 sets of 15 reps',
      'Lunges - 3 sets of 10 reps per leg',
      'Plank - 3 sets of 45 seconds',
      'Dumbbell rows - 3 sets of 12 reps',
      'Mountain climbers - 3 sets of 30 seconds'
    ]
  },
  {
    id: 2,
    title: 'Quick HIIT Circuit',
    description: 'High-intensity interval training to maximize calorie burn in minimal time.',
    duration: '20 minutes',
    difficulty: 'Advanced',
    category: 'HIIT',
    exercises: [
      'Jumping jacks - 45 seconds',
      'Burpees - 30 seconds',
      'Mountain climbers - 45 seconds',
      'High knees - 30 seconds',
      'Jump squats - 45 seconds',
      'Rest - 15 seconds between each exercise',
      'Repeat circuit 3 times'
    ]
  },
  {
    id: 3,
    title: 'Core Crusher',
    description: 'Focused abdominal workout to build a strong, stable core.',
    duration: '25 minutes',
    difficulty: 'Intermediate',
    category: 'Core Training',
    exercises: [
      'Crunches - 3 sets of 20 reps',
      'Russian twists - 3 sets of 16 reps',
      'Leg raises - 3 sets of 12 reps',
      'Plank - 3 sets of 45 seconds',
      'Bicycle crunches - 3 sets of 20 reps',
      'Side plank - 3 sets of 30 seconds each side'
    ]
  },
  {
    id: 4,
    title: 'Beginner Body Boost',
    description: 'Simple yet effective workout for fitness beginners.',
    duration: '30 minutes',
    difficulty: 'Beginner',
    category: 'Bodyweight',
    exercises: [
      'Wall push-ups - 3 sets of 8 reps',
      'Chair squats - 3 sets of 10 reps',
      'Standing bicep curls (light weight) - 3 sets of 10 reps',
      'Seated knee raises - 3 sets of 10 reps',
      'Modified plank (knees down) - 3 sets of 20 seconds',
      'Marching in place - 3 sets of 30 seconds'
    ]
  },
  {
    id: 5,
    title: 'Yoga Flow',
    description: 'A calming sequence of yoga poses to improve flexibility and mindfulness.',
    duration: '40 minutes',
    difficulty: 'Beginner',
    category: 'Yoga',
    exercises: [
      'Child\'s pose - 1 minute',
      'Cat-cow stretch - 10 repetitions',
      'Downward dog - 1 minute',
      'Warrior I pose - 30 seconds each side',
      'Warrior II pose - 30 seconds each side',
      'Tree pose - 30 seconds each side',
      'Corpse pose - 5 minutes'
    ]
  },
  {
    id: 6,
    title: 'Cardio Kickboxing',
    description: 'Energetic kickboxing moves for an intense cardio session.',
    duration: '35 minutes',
    difficulty: 'Intermediate',
    category: 'Cardio',
    exercises: [
      'Jumping jacks - 2 minutes',
      'Jab-cross punches - 1 minute',
      'Front kicks - 1 minute',
      'Hook punches - 1 minute',
      'Side kicks - 1 minute',
      'Uppercut punches - 1 minute',
      'Repeat sequence 3 times with 30-second rests'
    ]
  },
  {
    id: 7,
    title: 'Upper Body Strength',
    description: 'Focus on building strength in your arms, chest, and back.',
    duration: '40 minutes',
    difficulty: 'Intermediate',
    category: 'Strength Training',
    exercises: [
      'Bench press - 4 sets of 10 reps',
      'Bent-over rows - 4 sets of 12 reps',
      'Overhead press - 3 sets of 10 reps',
      'Bicep curls - 3 sets of 12 reps',
      'Tricep dips - 3 sets of 12 reps',
      'Pull-ups or assisted pull-ups - 3 sets of 8 reps',
      'Lateral raises - 3 sets of 15 reps'
    ]
  },
  {
    id: 8,
    title: 'Lower Body Power',
    description: 'Build strength and power in your legs and glutes.',
    duration: '45 minutes',
    difficulty: 'Intermediate',
    category: 'Strength Training',
    exercises: [
      'Barbell squats - 4 sets of 10 reps',
      'Romanian deadlifts - 4 sets of 10 reps',
      'Walking lunges - 3 sets of 10 steps each leg',
      'Leg press - 3 sets of 12 reps',
      'Calf raises - 3 sets of 15 reps',
      'Glute bridges - 3 sets of 15 reps',
      'Box jumps - 3 sets of 8 reps'
    ]
  },
  {
    id: 9,
    title: '5x5 Strength Program',
    description: 'Classic 5x5 strength training routine for building raw strength.',
    duration: '50 minutes',
    difficulty: 'Advanced',
    category: 'Strength Training',
    exercises: [
      'Barbell squats - 5 sets of 5 reps',
      'Bench press - 5 sets of 5 reps',
      'Barbell rows - 5 sets of 5 reps',
      'Overhead press - 5 sets of 5 reps',
      'Deadlifts - 1 set of 5 reps',
      'Rest 3 minutes between sets'
    ]
  },
  {
    id: 10,
    title: 'Dumbbell Total Body',
    description: 'Complete strength workout using only dumbbells.',
    duration: '35 minutes',
    difficulty: 'Beginner',
    category: 'Strength Training',
    exercises: [
      'Dumbbell goblet squats - 3 sets of 12 reps',
      'Dumbbell chest press - 3 sets of 10 reps',
      'Dumbbell rows - 3 sets of 10 reps per arm',
      'Dumbbell shoulder press - 3 sets of 10 reps',
      'Dumbbell lunges - 3 sets of 10 reps per leg',
      'Dumbbell deadlifts - 3 sets of 12 reps',
      'Dumbbell bicep curls - 2 sets of 12 reps'
    ]
  }
];
