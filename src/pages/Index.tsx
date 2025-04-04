
import React from 'react';
import Navbar from '@/components/Navbar';
import FitnessCard from '@/components/FitnessCard';
import WorkoutGenerator from '@/components/WorkoutGenerator';
import FitnessTips from '@/components/FitnessTips';
import MotivationQuote from '@/components/MotivationQuote';
import { Activity, Dumbbell, Heart, ListChecks, Trophy } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const handleCardClick = (category: string) => {
    toast({
      title: `Exploring ${category}`,
      description: `You're now exploring ${category.toLowerCase()} workouts and exercises.`,
      duration: 3000,
    });
    
    // Scroll to workout generator section
    document.getElementById('workouts')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero Section */}
        <section className="py-10 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fitspark-green via-fitspark-blue to-fitspark-purple bg-clip-text text-transparent">
              FitSpark Ideas
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover fresh fitness inspiration, effective workouts, and expert tips to spark your fitness journey
            </p>
          </div>
        </section>
        
        {/* Fitness Inspiration Cards */}
        <section id="inspiration" className="py-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Activity className="mr-2 h-6 w-6 text-fitspark-green" />
            Fitness Inspiration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FitnessCard
              title="Build Your Strength"
              description="Discover strength training routines that build muscle and boost metabolism."
              gradient="green"
              icon={<Dumbbell className="h-6 w-6" />}
              buttonText="Explore Strength"
              onClick={() => handleCardClick('Strength')}
            />
            
            <FitnessCard
              title="Boost Your Endurance"
              description="Cardio workouts to improve stamina, heart health, and burn calories effectively."
              gradient="blue"
              icon={<Heart className="h-6 w-6" />}
              buttonText="Explore Cardio"
              onClick={() => handleCardClick('Cardio')}
            />
            
            <FitnessCard
              title="Achieve Your Goals"
              description="Set smart fitness goals and track your progress to stay motivated."
              gradient="purple"
              icon={<Trophy className="h-6 w-6" />}
              buttonText="Set Goals"
              onClick={() => handleCardClick('Goals')}
            />
          </div>
        </section>
        
        {/* Workout Generator */}
        <section id="workouts" className="py-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Dumbbell className="mr-2 h-6 w-6 text-fitspark-blue" />
            Workout Ideas
          </h2>
          
          <WorkoutGenerator />
        </section>
        
        {/* Fitness Tips */}
        <section id="tips" className="py-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <ListChecks className="mr-2 h-6 w-6 text-fitspark-purple" />
            Fitness Tips
          </h2>
          
          <FitnessTips />
        </section>
        
        {/* Motivation Quote */}
        <section id="motivation" className="py-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Heart className="mr-2 h-6 w-6 text-fitspark-orange" />
            Daily Motivation
          </h2>
          
          <MotivationQuote />
        </section>
        
        {/* Call to Action */}
        <section className="py-10 md:py-16">
          <div className="bg-gradient-to-r from-fitspark-green/10 to-fitspark-blue/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to spark your fitness journey?</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Use these ideas to create your personalized fitness plan and start making progress today.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-fitspark-green to-fitspark-blue text-white rounded-lg font-medium hover:opacity-90 transition-opacity animate-pulse-slow">
              Start Now
            </button>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-50 border-t py-8">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center text-gray-500">
          <div className="flex items-center justify-center mb-4">
            <Dumbbell className="h-5 w-5 text-fitspark-green mr-2" />
            <span className="font-bold bg-gradient-to-r from-fitspark-green to-fitspark-blue bg-clip-text text-transparent">
              FitSpark
            </span>
          </div>
          <p>© {new Date().getFullYear()} FitSpark Ideas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
