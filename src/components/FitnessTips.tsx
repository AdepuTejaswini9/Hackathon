
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { ListChecks, RefreshCw } from 'lucide-react';
import { tips, TipType, tipCategories } from '@/data/tipsData';

const FitnessTips = () => {
  const [selectedTip, setSelectedTip] = useState<TipType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const filteredTips = selectedCategory === 'all' 
    ? tips 
    : tips.filter(tip => tip.category === selectedCategory);
  
  const generateRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * filteredTips.length);
    setSelectedTip(filteredTips[randomIndex]);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <ListChecks className="mr-2 h-5 w-5 text-fitspark-purple" />
          Fitness Tips
        </CardTitle>
        <CardDescription>
          Discover practical advice for your fitness journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="max-w-full">
          <div className="flex space-x-2 pb-4">
            <Badge
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setSelectedCategory('all')}
            >
              All
            </Badge>
            {tipCategories.map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </ScrollArea>
        
        <Button 
          onClick={generateRandomTip}
          size="lg"
          className="w-full my-4 bg-fitspark-purple hover:bg-fitspark-purple/90"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Get Random Tip
        </Button>
        
        {selectedTip ? (
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <Badge variant="outline" className="bg-fitspark-purple/10 text-fitspark-purple">
                {selectedTip.category}
              </Badge>
            </div>
            <h3 className="text-xl font-bold mb-2">{selectedTip.title}</h3>
            <p className="text-gray-600">{selectedTip.content}</p>
          </div>
        ) : (
          <div className="text-center p-8 border border-dashed rounded-lg">
            <p className="text-gray-500">
              Click the button above to get a fitness tip
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FitnessTips;
