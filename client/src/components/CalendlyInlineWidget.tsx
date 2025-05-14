import React, { useEffect } from 'react';

interface CalendlyInlineWidgetProps {
  url: string;
  styles?: React.CSSProperties;
}

const CalendlyInlineWidget: React.FC<CalendlyInlineWidgetProps> = ({ 
  url,
  styles = {}
}) => {
  useEffect(() => {
    // Load Calendly script if it's not already loaded
    if (!document.getElementById('calendly-js')) {
      const script = document.createElement('script');
      script.id = 'calendly-js';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Clean up is optional as the script will be used across the site
    return () => {
      // No cleanup needed for the script
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={url}
      style={{ 
        minWidth: '320px',
        height: '630px',
        ...styles
      }}
    />
  );
};

export default CalendlyInlineWidget;