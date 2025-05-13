
import { useState } from 'react';
import { InlineWidget } from 'react-calendly';

export const CalendlyInline = () => {
  return (
    <div id="book-meeting" className="w-full">
      <h3 className="mt-4 text-xl font-semibold text-primary">Schedule a Free Tech Audit</h3>
      <div className="mt-6 rounded-2xl overflow-hidden border border-warm-gray-500">
        <InlineWidget
          url="https://calendly.com/connect-nextgenixtech/30min"
          styles={{ height: '700px', width: '100%' }}
        />
      </div>
    </div>
  );
};
