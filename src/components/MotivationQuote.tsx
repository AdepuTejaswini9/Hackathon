
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, RefreshCw } from 'lucide-react';
import { quotes, QuoteType } from '@/data/quotesData';

const MotivationQuote = () => {
  const [currentQuote, setCurrentQuote] = useState<QuoteType | null>(null);
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };
  
  useEffect(() => {
    getRandomQuote();
    
    // Auto-rotate quotes every 30 seconds
    const interval = setInterval(() => {
      getRandomQuote();
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  if (!currentQuote) return null;
  
  return (
    <Card className="w-full bg-gradient-to-r from-fitspark-orange/80 to-fitspark-purple/80 text-white">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Heart className="h-6 w-6 text-white/80" />
          <Button 
            variant="ghost" 
            size="sm"
            className="text-white/90 hover:text-white hover:bg-white/10"
            onClick={getRandomQuote}
          >
            <RefreshCw className="h-4 w-4 mr-1" />
            New Quote
          </Button>
        </div>
        
        <blockquote className="text-xl md:text-2xl font-medium mb-3 relative">
          <span className="absolute -left-2 -top-2 text-4xl opacity-20">"</span>
          {currentQuote.text}
          <span className="absolute -bottom-5 right-0 text-4xl opacity-20">"</span>
        </blockquote>
        
        <footer className="text-right text-white/80 mt-6">
          — {currentQuote.author}
        </footer>
      </CardContent>
    </Card>
  );
};

export default MotivationQuote;
