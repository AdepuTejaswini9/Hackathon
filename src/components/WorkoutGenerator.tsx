
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dumbbell, RefreshCw } from 'lucide-react';
import { workouts, WorkoutType, workoutCategories } from '@/data/workoutData';

const WorkoutGenerator = () => {
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredWorkouts, setFilteredWorkouts] = useState<WorkoutType[]>(workouts);
  
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredWorkouts(workouts);
    } else {
      setFilteredWorkouts(workouts.filter(workout => 
        workout.category.toLowerCase() === selectedCategory.toLowerCase()
      ));
    }
  }, [selectedCategory]);
  
  const generateRandomWorkout = () => {
    if (filteredWorkouts.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * filteredWorkouts.length);
    setSelectedWorkout(filteredWorkouts[randomIndex]);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Dumbbell className="mr-2 h-5 w-5 text-fitspark-green" />
          Workout Generator
        </CardTitle>
        <CardDescription>
          Find your perfect workout based on your preferences
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
          <TabsList className="grid grid-cols-4 md:grid-cols-8 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            {workoutCategories.slice(0, 7).map(category => (
              <TabsTrigger key={category} value={category.toLowerCase()}>
                {category.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <Button 
            onClick={generateRandomWorkout}
            size="lg"
            className="w-full mb-6 bg-fitspark-blue hover:bg-fitspark-blue/90"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Generate Workout
          </Button>
          
          {selectedWorkout ? (
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">{selectedWorkout.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-fitspark-green/20 text-fitspark-green text-xs px-2 py-1 rounded-full">
                  {selectedWorkout.duration}
                </span>
                <span className="bg-fitspark-blue/20 text-fitspark-blue text-xs px-2 py-1 rounded-full">
                  {selectedWorkout.difficulty}
                </span>
                <span className="bg-fitspark-purple/20 text-fitspark-purple text-xs px-2 py-1 rounded-full">
                  {selectedWorkout.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{selectedWorkout.description}</p>
              
              <h4 className="font-semibold mb-2">Exercises:</h4>
              <ul className="space-y-2">
                {selectedWorkout.exercises.map((exercise, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-fitspark-blue/10 text-fitspark-blue h-5 w-5 text-xs mr-2 mt-0.5">
                      {index + 1}
                    </span>
                    {exercise}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-center p-8 border border-dashed rounded-lg">
              <p className="text-gray-500">
                Click the button above to generate a random workout suggestion
              </p>
            </div>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default WorkoutGenerator;
