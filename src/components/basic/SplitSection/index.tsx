import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface SplitSectionProps {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
  gap?: 'none' | 'small' | 'medium' | 'large';
  align?: 'top' | 'center' | 'bottom';
}

export interface SplitSectionItemProps {
  children: React.ReactNode;
  className?: string;
}

const SplitSection: React.FC<SplitSectionProps> & {
  Item: React.FC<SplitSectionItemProps>;
} = ({ 
  children, 
  reverse = false, 
  className,
  gap = 'medium',
  align = 'center'
}) => {
  return (
    <section className={clsx(
      styles.splitSection,
      styles[`gap-${gap}`],
      styles[`align-${align}`],
      { [styles.reverse]: reverse },
      className
    )}>
      {children}
    </section>
  );
};

const SplitSectionItem: React.FC<SplitSectionItemProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={clsx(styles.splitSectionItem, className)}>
      {children}
    </div>
  );
};

SplitSection.Item = SplitSectionItem;

export default SplitSection;