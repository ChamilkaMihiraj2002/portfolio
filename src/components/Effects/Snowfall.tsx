import React, { useMemo } from 'react';
import './snow.css';

interface Snowflake {
  id: number;
  size: number; // px
  left: number; // percentage
  delay: number; // seconds
  duration: number; // seconds
  opacity: number; // 0-1
  drift: number; // px horizontal drift amplitude
}

interface SnowfallProps {
  /** Number of flakes (defaults responsive if not provided) */
  count?: number;
  /** Max flake size in px */
  maxSize?: number;
  /** Allow turning off the animation (pref toggle) */
  active?: boolean;
}

const Snowfall: React.FC<SnowfallProps> = ({ count, maxSize = 6, active = true }) => {
  const flakes = useMemo(() => {
    if (!active) return [] as Snowflake[];
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const target = count ?? (width < 640 ? 40 : width < 1024 ? 70 : 100);
    return Array.from({ length: target }, (_, i) => {
      const size = Math.random() * (maxSize - 1) + 1;
      return {
        id: i,
        size: parseFloat(size.toFixed(2)),
        left: Math.random() * 100,
        delay: parseFloat((Math.random() * 10).toFixed(2)),
        duration: parseFloat((12 + Math.random() * 12).toFixed(2)),
        opacity: parseFloat((0.3 + Math.random() * 0.7).toFixed(2)),
        drift: parseFloat((Math.random() * 40 - 20).toFixed(2)),
      } as Snowflake;
    });
  }, [count, maxSize, active]);

  return (
    <div className="snow-container" aria-hidden="true">
      {flakes.map(f => {
        const style: React.CSSProperties = {
          '--flake-size': `${f.size}px`,
          '--flake-left': `${f.left}%`,
          '--flake-delay': `${f.delay}s`,
          '--flake-duration': `${f.duration}s`,
          '--flake-opacity': f.opacity,
          '--flake-drift': `${f.drift}px`,
        } as any;
        return <div key={f.id} className="snowflake" style={style} />;
      })}
    </div>
  );
};

export default Snowfall;
