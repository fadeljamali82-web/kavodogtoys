import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: ReactNode;
  variant?: 'light' | 'bone' | 'midnight' | 'teal';
  className?: string;
  id?: string;
  key?: React.Key;
}

export default function Section({ children, variant = 'bone', className = '', id }: SectionProps) {
  const bgColor = {
    light: 'bg-softwhite text-midnight',
    bone: 'bg-bone text-midnight',
    midnight: 'bg-midnight text-softwhite',
    teal: 'bg-teal text-midnight',
  }[variant];

  return (
    <section id={id} className={`section-padding ${bgColor} ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
}
