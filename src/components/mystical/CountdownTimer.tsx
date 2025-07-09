import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  initialMinutes?: number;
  onExpire?: () => void;
}

const CountdownTimer = ({ initialMinutes = 30, onExpire }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    console.log('[OdusLanding] Countdown timer started with', initialMinutes, 'minutes');
    
    if (timeLeft <= 0) {
      onExpire?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onExpire?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center justify-center space-x-2 p-4 card-mystical pulse-glow">
      <Clock className="w-5 h-5 text-primary animate-pulse" />
      <span className="font-playfair text-lg font-semibold text-primary">
        {formatTime(timeLeft)}
      </span>
      <span className="text-sm text-muted-foreground">restantes</span>
    </div>
  );
};

export default CountdownTimer;