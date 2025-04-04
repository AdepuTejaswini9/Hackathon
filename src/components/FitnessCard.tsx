
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FitnessCardProps {
  title: string;
  description: string;
  className?: string;
  gradient?: 'green' | 'blue' | 'purple';
  icon?: React.ReactNode;
  buttonText?: string;
  onClick?: () => void;
  actionPath?: string;
}

const FitnessCard = ({
  title,
  description,
  className,
  gradient = 'green',
  icon,
  buttonText,
  onClick,
  actionPath
}: FitnessCardProps) => {
  const navigate = useNavigate();
  const gradientClass = 
    gradient === 'green' 
      ? 'card-gradient' 
      : gradient === 'blue' 
        ? 'card-blue-gradient' 
        : 'card-purple-gradient';
        
  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    } else if (actionPath) {
      navigate(actionPath);
    }
  };

  return (
    <div 
      className={cn(
        "rounded-xl p-6 text-white overflow-hidden relative card-hover",
        gradientClass,
        className
      )}
    >
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 inline-block bg-white/20 p-3 rounded-lg">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="opacity-90 mb-6">{description}</p>
        
        {buttonText && (
          <Button 
            onClick={handleButtonClick} 
            variant="secondary" 
            className="bg-white text-gray-800 hover:bg-white/90"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
};

export default FitnessCard;
