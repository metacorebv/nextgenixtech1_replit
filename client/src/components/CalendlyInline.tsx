
import { useState } from 'react';
import { InlineWidget } from 'react-calendly';

export const CalendlyInline = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleWidget = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="w-full">
      <button
        onClick={toggleWidget}
        className="mt-4 inline-flex items-center px-6 py-3 border border-warm-gray-500 text-base font-medium rounded-2xl text-white hover:bg-warm-gray-700 transition-colors"
      >
        <i className="far fa-calendar-alt mr-2"></i> Book a Meeting
      </button>
      
      {isVisible && (
        <div className="mt-6 rounded-2xl overflow-hidden border border-warm-gray-500">
          <InlineWidget
            url="https://calendly.com/connect-nextgenixtech/30min"
            styles={{ height: '700px', width: '100%' }}
          />
        </div>
      )}
    </div>
  );
};
