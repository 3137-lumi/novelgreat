import React from 'react';

type ToastTone = 'success' | 'error';

export const Toast: React.FC<{ message: string | null; tone?: ToastTone }> = ({ message, tone = 'success' }) => {
  if (!message) return null;

  const classes =
    tone === 'success'
      ? 'bg-slate-900 text-white'
      : 'bg-red-600 text-white';

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center pointer-events-none">
      <div className={`pointer-events-none rounded-lg px-4 py-2 text-sm shadow-lg ${classes}`} role="status" aria-live="polite">
        {message}
      </div>
    </div>
  );
};
