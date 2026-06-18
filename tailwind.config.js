/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#6366f1',
        'fg-brand': '#818cf8',
        'neutral-primary': '#0b0f19',
        'neutral-secondary-soft': '#111827',
        'neutral-tertiary': '#1f2937',
        'border-default': '#374151',
        'text-heading': '#f9fafb',
        'text-body': '#9ca3af',
      },
      borderRadius: {
        'base': '0.375rem',
      }
    },
  },
  plugins: [],
}

