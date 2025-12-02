import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface GenericSectionProps {
  /** The header content for the section */
	title: string,
	subtitle: string,
  /** The main content to be displayed in the container */
  children: React.ReactNode;
  /** Optional CSS class name for the section */
  className?: string;
  /** Optional CSS class name for the header */
  headerClassName?: string;
  /** Optional CSS class name for the header wrapper */
  headerWrapperClassName?: string;
  /** Optional CSS class name for the container */
  containerClassName?: string;
  /** Optional ID for the section */
  id?: string;
  /** Background color variant */
  variant?: 'default' | 'primary' | 'secondary' | 'light' | 'dark' | 'gradient';
  /** Whether the section should have a top/bottom padding */
  padding?: 'none' | 'small' | 'medium' | 'large';
  /** Header alignment */
  headerAlignment?: 'left' | 'center' | 'right';
  /** Maximum width of the header content */
  headerMaxWidth?: string;
  /** Whether to apply a bottom margin to the header */
  headerSpacing?: 'none' | 'small' | 'medium' | 'large';
}

/**
 * A generic, reusable section component with a customizable centered header and content container.
 * Responsive and accessible by default.
 */
const GenericSection: React.FC<GenericSectionProps> = ({
	title,
	subtitle,
  children,
  className,
  headerClassName,
  headerWrapperClassName,
  containerClassName,
  id,
  variant = 'default',
  padding = 'medium',
  headerAlignment = 'center',
  headerMaxWidth,
  headerSpacing = 'medium',
}) => {
  return (
    <section
      id={id}
      className={clsx(
        styles.section,
        styles[`variant-${variant}`],
        styles[`padding-${padding}`],
        className
      )}
    >
      {/* Header Wrapper for centering */}
      <div className={clsx(styles.headerWrapper, headerWrapperClassName)}>

        <header 
					className={clsx(
            styles.header,
            styles[`header-align-${headerAlignment}`],
            styles[`header-spacing-${headerSpacing}`],
            headerClassName
          )}
          style={headerMaxWidth ? { maxWidth: headerMaxWidth } : undefined}
        >

					<div className={styles.heroHeader}>
			      <h1 className={styles.title}>{title}</h1>
  			    <p className={styles.subtitle}>{subtitle}</p>
    			</div>

        </header>
      </div>
      
      {/* Content Container */}
      <div className={clsx(styles.container, containerClassName)}>
        {children}
      </div>

    </section>
  );
};

export default GenericSection;