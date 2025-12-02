import React, { useState } from 'react';
import clsx from 'clsx';
import { FaCopy, FaCheck, FaPlay, FaCode, FaExpand } from 'react-icons/fa';
import { SiTypescript, SiJavascript } from 'react-icons/si';
import { Highlight, Language, PrismTheme } from 'prism-react-renderer';
import styles from './styles.module.css';

export interface CodeShowcaseProps {
  code: string;
  language?: Language;
  title?: string;
  description?: string;
  showLineNumbers?: boolean;
  height?: string;
  preview?: boolean;
  previewComponent?: React.ReactNode;
  className?: string;
  expandable?: boolean;
}

const CodeShowcase: React.FC<CodeShowcaseProps> = ({
  code,
  language = 'tsx',
  title = 'Code Example',
  description,
  showLineNumbers = true,
  height = 'auto',
  preview = false,
  previewComponent,
  className,
  expandable = false
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const getLanguageIcon = (lang: string) => {
    switch (lang) {
      case 'typescript':
      case 'tsx':
      case 'ts':
        return <SiTypescript className={styles.languageIcon} />;
      case 'javascript':
      case 'jsx':
      case 'js':
        return <SiJavascript className={styles.languageIcon} />;
      default:
        return <FaCode className={styles.languageIcon} />;
    }
  };

	const theme: PrismTheme = {
		plain: {
			color: "#ebedf0",
			backgroundColor: "#00FF00",
		},
		styles: [
			{
				types: ["doc-comment"],
				style: {
					color: "#99B3CC", // same result with #99B3CCCC and no opacity field
					opacity: 0.8,
				},
			},
			{
				types: ["comment"],
				style: {
					color: "#CDCFD2", // same result with #CDCFD280 and not opacity field
					opacity: 0.5,
				},
			},
			// etc.
		],
	}

  return (
    <div className={clsx(styles.codeShowcase, className, {
      [styles.expanded]: isExpanded && expandable
    })}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          {getLanguageIcon(language)}
          <span className={styles.title}>{title}</span>
          {description && (
            <span className={styles.description}>{description}</span>
          )}
        </div>
        <div className={styles.headerRight}>
          {preview && (
            <div className={styles.tabs}>
              <button
                className={clsx(styles.tab, { [styles.active]: activeTab === 'code' })}
                onClick={() => setActiveTab('code')}
              >
                <FaCode />
                Code
              </button>
              <button
                className={clsx(styles.tab, { [styles.active]: activeTab === 'preview' })}
                onClick={() => setActiveTab('preview')}
              >
                <FaPlay />
                Preview
              </button>
            </div>
          )}
          {expandable && (
            <button
              className={styles.expandButton}
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              <FaExpand />
            </button>
          )}
          <button
            className={clsx(styles.copyButton, { [styles.copied]: copied })}
            onClick={handleCopy}
            title="Copy code"
          >
            {copied ? <FaCheck /> : <FaCopy />}
            <span className={styles.tooltip}>
              {copied ? 'Copied!' : 'Copy'}
            </span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {preview && activeTab === 'preview' ? (
          <div className={styles.preview}>
            {previewComponent}
          </div>
        ) : (
          <div 
            className={styles.codeContainer}
            style={{ height: expandable && isExpanded ? 'auto' : height }}
          >
            <Highlight
              theme={theme}
              code={code}
              language={language}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={clsx(className, styles.pre)}
                  style={style}
                >
                  <code className={styles.code}>
                    {tokens.map((line, i) => (
                      <div
                        key={i}
                        {...getLineProps({ line, key: i })}
                        className={styles.line}
                      >
                        {showLineNumbers && (
                          <span className={styles.lineNumber}>
                            {i + 1}
                          </span>
                        )}
                        <span className={styles.lineContent}>
                          {line.map((token, key) => (
                            <span
                              key={key}
                              {...getTokenProps({ token, key })}
                            />
                          ))}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              )}
            </Highlight>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeShowcase;