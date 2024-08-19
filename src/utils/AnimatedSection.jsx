import React, { useEffect, useRef, useState } from 'react'


const AnimatedSection = ({ children, from = 'left' }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
  
    return (
      <div
        ref={sectionRef}
        className={`transform transition-opacity duration-1000 ease-out ${isVisible ? (from === 'left' ? 'slide-in-left' : 'slide-in-right') : ''}`}
      >
        {children}
      </div>
      )
}

export default AnimatedSection
