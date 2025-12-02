import React from 'react';
import styles from './LayersSection.module.css';

interface Layer {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

interface LayersSectionProps {
  title?: string;
  subtitle?: string;
  layers?: Layer[];
	selected?: number;
}

// Default layers data
const defaultLayers: Layer[] = [
  {
    id: 7,
    title: "Application Layer",
    description: "The user interface layer responsible for displaying information to users and capturing user interactions. This includes web components, mobile app interfaces, and desktop applications built with modern frameworks like React, Vue, or Angular.",
    //icon: "🎨"
  },
  {
    id: 6,
    title: "Specialization Layer",
    description: "The user interface layer responsible for displaying information to users and capturing user interactions. This includes web components, mobile app interfaces, and desktop applications built with modern frameworks like React, Vue, or Angular.",
    //icon: "🎨"
  },
  {
    id: 5,
    title: "Principles Layer",
    description: "Contains the business logic and application services. This layer processes user requests, implements business rules, coordinates data flow, and serves as the bridge between the presentation and data layers.",
    //icon: "⚙️"
  },
  {
    id: 4,
    title: "Interop Layer",
    description: "The core of the application where domain logic and business rules are implemented. This layer ensures data integrity, enforces business policies, and contains the essential business functionality.",
    //icon: "🧠"
  },
  {
    id: 3,
    title: "Compose Layer",
    description: "Responsible for communication with data sources including databases, external APIs, and file systems. This layer abstracts data access details and provides a clean API for the business logic layer.",
    //icon: "💾"
  },
  {
    id: 2,
    title: "Standardization Layer",
    description: "Provides technical capabilities that support higher layers, including security, logging, caching, and external service integrations. This layer handles cross-cutting concerns and infrastructure services.",
    //icon: "🏗️"
  },
  {
    id: 1,
    title: "Ecosystems Layer",
    description: "Provides technical capabilities that support higher layers, including security, logging, caching, and external service integrations. This layer handles cross-cutting concerns and infrastructure services.",
    //icon: "🏗️"
  }
];

const LayersSection: React.FC<LayersSectionProps> = ({
  title = "Fungible Standard Maturity Model",
  subtitle = "Instead, technology evolves in an iterative layered model. Every layer, specializes in solving an specific problem, is standardized, hiding the complexity of lower layers and provides services and good practices to upper layers. As a result, a Maturity Model is produced. Fungible Standard understands this process and proposes a Maturity Model for Fungible Tokens.",
  layers = defaultLayers,
	selected = 2
}) => {
  const [selectedLayer, setSelectedLayer] = React.useState<number>(selected);

  const handleLayerClick = (layerId: number) => {
    setSelectedLayer(layerId);
  };

  const currentLayer = layers.find(layer => layer.id === selectedLayer) || layers[0];

  return (
    <section className={styles.section}>

      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      
      <div className={styles.container}>
				
        {/* Layers Visualization Side */}
        <div className={styles.layersSide}>
          <div className={styles.layersContainer}>
            {layers.map((layer) => (
              <div
                key={layer.id}
                className={`${styles.layerItem} ${
                  selectedLayer === layer.id ? styles.layerItemActive : ''
                }`}
                onClick={() => handleLayerClick(layer.id)}
              >
                <div className={styles.layerVisual}>
                  <div className={styles.layerNumber}>{layer.id}</div>
                  {layer.icon && (
                    <div className={styles.layerIcon}>{layer.icon}</div>
                  )}
                </div>
                <div className={styles.layerContent}>
                  <h3 className={styles.layerTitle}>{layer.title}</h3>
                </div>
                <div className={styles.layerIndicator}>
                  <div className={`${styles.indicator} ${
                    selectedLayer === layer.id ? styles.indicatorActive : ''
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description Side */}
        <div className={styles.descriptionSide}>
          <div className={styles.descriptionContent}>
            <div className={styles.descriptionHeader}>
              <span className={styles.descriptionBadge}>
                Layer {currentLayer.id}
              </span>
              <h3 className={styles.descriptionTitle}>{currentLayer.title}</h3>
            </div>
            <div className={styles.descriptionText}>
              {currentLayer.description}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default LayersSection;