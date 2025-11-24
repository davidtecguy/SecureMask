# SecureMask Dashboard

A dynamic, visually appealing dashboard website for SecureMask, a consulting company. Built with React, Tailwind CSS, and featuring 3D animations.

## Features

- **Homepage**: Engaging visuals with high-quality design and 3D animations
- **Dashboard**: Clean, user-friendly interface displaying company stats and client updates
- **3D Animations**: Interactive 3D elements using Three.js and React Three Fiber
- **Interactive Charts**: Revenue charts and statistics using Recharts
- **Responsive Design**: Fully responsive across desktop and mobile devices
- **Smooth Animations**: Subtle animations using Framer Motion
- **Sidebar Navigation**: Elegant sidebar with smooth transitions

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Three.js / React Three Fiber** - 3D graphics
- **Framer Motion** - Animation library
- **Recharts** - Charting library
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SecureMask
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
SecureMask/
├── src/
│   ├── components/
│   │   ├── 3D/
│   │   │   ├── CanvasWrapper.jsx
│   │   │   └── FloatingCube.jsx
│   │   ├── Dashboard/
│   │   │   ├── ActivityFeed.jsx
│   │   │   ├── ClientUpdates.jsx
│   │   │   ├── ProjectProgress.jsx
│   │   │   ├── RevenueChart.jsx
│   │   │   └── StatsCard.jsx
│   │   ├── Homepage/
│   │   │   ├── ServiceCard.jsx
│   │   │   └── TestimonialCard.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Homepage.jsx
│   │   └── Sidebar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Features Overview

### Homepage
- Hero section with 3D animated background
- Service cards with interactive 3D elements
- Statistics showcase
- Client testimonials
- Call-to-action section

### Success Stories (Dashboard)
- Company achievement statistics
- Growth charts showcasing client and project expansion
- Featured case studies with real results
- Milestone timeline highlighting company journey
- "Why Choose Us" section with key differentiators

### Responsive Design
- Mobile-first approach
- Adaptive sidebar navigation
- Responsive grid layouts
- Touch-friendly interactions

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content
Update the data in component files:
- `src/components/Homepage.jsx` - Homepage content and services
- `src/components/Dashboard.jsx` - Marketing content, achievements, and case studies

## Performance

- Optimized 3D animations for smooth performance
- Lazy loading for images and components
- Efficient React rendering with proper memoization
- Lightweight bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 SecureMask. All rights reserved.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

