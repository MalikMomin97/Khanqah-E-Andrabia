import React from 'react';

interface AllahCrestProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export const AllahCrest: React.FC<AllahCrestProps> = ({
  className = '',
  size = 'md',
  text = 'الله'
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-4xl sm:text-5xl'
  };

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <span
        className={`font-amiri font-bold text-[#d59b35] dark:text-[#e0a845] tracking-widest drop-shadow-sm transition-transform hover:scale-110 duration-300 ${sizeClasses[size]}`}
        title="Allah (The Almighty)"
      >
        {text}
      </span>
    </div>
  );
};
