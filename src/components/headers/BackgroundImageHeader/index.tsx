import React from 'react';
import type { CSSProperties } from 'react';

interface HeroHeaderProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  textSide?: 'left' | 'right';
  overlayOpacity?: number;
  className?: string;
}

const BackgroundImageHeader: React.FC<HeroHeaderProps> = ({
  backgroundImage,
  title,
  subtitle,
  textSide = 'left',
  overlayOpacity = 0.3,
  className = '',
}) => {
  const containerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
  };

  const overlayStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
    zIndex: 1,
  };

  const contentStyle: CSSProperties = {
    position: 'relative',
    zIndex: 2,
    color: 'white',
    maxWidth: '600px',
    margin: textSide === 'left' ? '0 0 0 10%' : '0 10% 0 auto',
    textAlign: textSide === 'left' ? 'left' : 'right',
  };

  const titleStyle: CSSProperties = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  };

  const subtitleStyle: CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '300',
    lineHeight: '1.4',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
  };

  return (
    <header style={containerStyle} className={className}>
      <div style={overlayStyle} />
      <div style={contentStyle}>
        <h1 style={titleStyle}>{title}</h1>
        {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
      </div>
    </header>
  );
};

export default BackgroundImageHeader;