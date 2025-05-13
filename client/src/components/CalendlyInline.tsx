
import { useState } from 'react';
import { InlineWidget } from 'react-calendly';

export const CalendlyInline = () => {
  return (
    <div id="book-meeting" className="w-full h-full">
      <h3 className="text-lg font-medium text-primary mb-4">Prefer to schedule a meeting?</h3>
      <div className="rounded-2xl overflow-hidden border border-warm-gray-500 h-full">
        <InlineWidget
          url="https://calendly.com/connect-nextgenixtech/30min"
          styles={{ height: '700px', width: '100%' }}
        />
      </div>
    </div>
  );
};
