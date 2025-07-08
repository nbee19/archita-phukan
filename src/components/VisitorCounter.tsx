
import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get current visitor count from localStorage
    const currentCount = localStorage.getItem('visitorCount');
    const count = currentCount ? parseInt(currentCount, 10) : 0;
    
    // Increment visitor count
    const newCount = count + 1;
    
    // Store updated count
    localStorage.setItem('visitorCount', newCount.toString());
    setVisitorCount(newCount);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2 text-purple-200">
      <Users className="w-4 h-4" />
      <span className="text-sm">
        Total Visitors: {visitorCount.toLocaleString()}
      </span>
    </div>
  );
};

export default VisitorCounter;
