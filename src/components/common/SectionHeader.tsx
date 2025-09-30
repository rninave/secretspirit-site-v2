import React from 'react';
import { SectionHeaderProps } from '@/interface/sectionheader.interface';



export default function SectionHeader({
  title,
  subtitle = '',
  align = 'center',
  className = '',
  variant = 'light',
}: SectionHeaderProps) {
  const alignClass =
    align === 'left'
      ? 'items-start text-left'
      : align === 'right'
      ? 'items-end text-right'
      : 'items-center text-center';

  const titleColorClass = variant === 'dark' ? 'text-white' : 'text-heading';

  return (
    <div className={`flex flex-col font-display ${alignClass} ${className}`}>
      {subtitle && (
        <span className="text-primary text-[8px] md:text-xs font-heading font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
          <span className="inline-block w-10 h-0.5 bg-primary" />
          {subtitle}
          <span className="inline-block w-10 h-0.5 bg-primary" />
        </span>
      )}
      {title && (
        <h2 className={`text-2xl md:text-[32px] font-bold font-heading ${titleColorClass} mt-2`} >{title}</h2>
      )}
    </div>
  );
}
