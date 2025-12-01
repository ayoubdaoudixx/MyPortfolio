'use client';

import { Button } from "./ui/button";
import { Eye, Download } from "lucide-react";
import { useState, useEffect } from "react";

export function ResumeButtons() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're at the top of the page
      const atTop = currentScrollY < 10;
      setIsAtTop(atTop);
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down & past 50px - hide buttons
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show buttons
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isAtTop ? 'shadow-none' : 'shadow-md'}`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-center gap-3">
        {/* View Resume Button */}
        <Button
          onClick={() => window.open('/CV Ayoub DAOUDI.pdf', '_blank')}
          className="h-10 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-2 flex-1 max-w-[200px]"
          aria-label="View Resume"
        >
          <Eye className="h-4 w-4" />
          <span className="text-sm font-medium">View Resume</span>
        </Button>
        
        {/* Download Resume Button */}
        <Button
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/CV Ayoub DAOUDI.pdf';
            link.download = 'CV Ayoub DAOUDI.pdf';
            link.click();
          }}
          className="h-10 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-2 flex-1 max-w-[200px]"
          aria-label="Download Resume"
        >
          <Download className="h-4 w-4" />
          <span className="text-sm font-medium">Download Resume</span>
        </Button>
      </div>
    </div>
  );
}
