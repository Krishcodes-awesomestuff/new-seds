# SEDS - REC Website

## Students for the Exploration and Development of Space - REC Chapter

A modern, interactive website for the SEDS (Students for the Exploration and Development of Space) chapter at Rajalakshmi Engineering College.

![SEDS Logo](public/logo.png)

---

##  Development Documentation

### Latest Updates (August 2025)

This README serves as a comprehensive guide for developers continuing work on this project. All recent changes and implementation details are documented below.

#### 🆕 Recent Updates (August 16, 2025)
- ✅ **Events Section**: Complete event showcase with grid layout
- ✅ **Navbar Positioning**: Changed from fixed to absolute positioning
- ✅ **Component Architecture**: Modular design for easy maintenance

---

## �🚀 Current Features

### 🎬 Hero Section
- **Full-screen background video** (`herovid.mp4`) with autoplay and loop
- **Centered branding**: "SEDS - REC" heading with "REC CHAPTER" subline
- **Arsenal font typography** (weights: 400, 700) for distinctive space-tech branding
- **Animated scroll indicator** with bouncing animation to guide user interaction
- **Responsive design** optimized for all screen sizes
- **Video controls disabled** for clean presentation
- **Overlay navigation integration** with glassmorphism effects

### 🧭 Navigation System
- **Overlay menu design** replacing traditional navbar
- **Absolute positioning** - navbar stays in hero section only, doesn't follow scroll
- **Glassmorphism styling** with backdrop blur and transparency
- **Split-screen layout**: SEDS logo on left, navigation links on right
- **Smooth slide-in animations** for menu reveal
- **Navigation links**: About, Events, Team, Contact
- **Social media integration**:
  - 📧 Email: [sedsrec@rajalakshmi.edu.in](mailto:sedsrec@rajalakshmi.edu.in)
  - 📸 Instagram: [@seds_rec](https://www.instagram.com/seds_rec/?hl=en)
  - 💼 LinkedIn: [SEDS-REC Company Page](https://www.linkedin.com/company/seds-rec/posts/?feedView=all)

### 📄 About Us Section
- **Dedicated component** (`src/app/components/aboutus.tsx`)
- **Black background** (isolated from hero video)
- **Grid layout**: Image on left, content on right
- **Vision & Mission cards** with interactive design
- **Lucide React icons**: Eye (Vision), Target (Mission)
- **Blue accent headings** with underline styling
- **Professional content layout** with proper spacing

### 🎫 Events Section
- **Dedicated component** (`src/app/components/events.tsx`)
- **Grid layout**: 3 cards in first row, 2 cards in second row (centered)
- **Event card structure**: Name, Place/Date, Description, Action button
- **Blue "Events" heading** with underline for consistency
- **Interactive hover effects** and professional styling
- **Sample events**: Space workshops, astronomy nights, competitions, guest lectures
- **Responsive design** adapting to different screen sizes

### 🎨 Design System
- **Glassmorphism UI** with backdrop blur effects and semi-transparent elements
- **Smooth animations** and micro-interactions throughout
- **Arsenal font family** for consistent typography
- **Tailwind CSS** utility-first styling approach
- **Dark theme** with blue accent colors
- **Responsive grid layouts** for all components

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS with custom configuration
- **Typography**: Google Fonts (Arsenal, Geist, Geist Mono)
- **Icons**: Lucide React (installed for Vision/Mission icons)
- **Language**: TypeScript with strict configuration
- **Package Manager**: npm
- **Build Tool**: Next.js built-in bundler

### Dependencies
```json
{
  "lucide-react": "^latest", // For Vision/Mission icons
  "next": "15.0.0",
  "react": "19.0.0",
  "react-dom": "19.0.0"
}
```

---

## 📁 Project Structure

```
seds/
├── public/
│   ├── logo.png          # SEDS logo (used in About Us placeholder)
│   ├── herovid.mp4       # Hero section background video
│   ├── about.png         # [MISSING] About Us section image
│   └── ...               # Other static assets
├── src/
│   └── app/
│       ├── components/
│       │   ├── aboutus.tsx    # About Us section component
│       │   └── events.tsx     # Events section component
│       ├── globals.css        # Global styles & Tailwind imports
│       ├── layout.tsx         # Root layout with Arsenal font config
│       └── page.tsx           # Main homepage (Hero + About + Events sections)
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # This documentation
```

---

## 🔧 Development Workflow

### Recent Implementation Steps

1. **Hero Section Setup** ✅
   - Added `herovid.mp4` background video with autoplay
   - Implemented overlay navigation with glassmorphism
   - Added Arsenal font integration
   - Created centered SEDS branding with scroll indicator

2. **Navigation Evolution** ✅
   - Started with complex glassmorphism navbar
   - Simplified to overlay menu based on user feedback
   - **Changed positioning from fixed to absolute** (August 16, 2025)
   - Navbar now stays in hero section only, doesn't follow scroll
   - Implemented smooth slide animations
   - Added social media links integration

3. **About Us Section Creation** ✅
   - Created dedicated `aboutus.tsx` component
   - Installed `lucide-react` for Vision/Mission icons
   - Implemented grid layout with content structure
   - Added black background isolation from hero video

4. **Events Section Implementation** ✅ (August 16, 2025)
   - Created `events.tsx` component with grid layout
   - Implemented 3-2 card layout (3 cards first row, 2 cards second row)
   - Added event card structure: Name, Place/Date, Description
   - Blue heading with underline for design consistency
   - Integrated with main page layout

5. **Code Structure Optimization** ✅
   - Separated hero section from content sections
   - Modularized components for maintainability
   - Updated page structure for multi-section layout

### Current Development Status

- ✅ **Hero Section**: Complete with video, branding, navigation (absolute positioning)
- ✅ **About Us Section**: Component created, needs `about.png` image
- ✅ **Events Section**: Complete with grid layout and sample events
- 🔄 **Missing Assets**: Add `about.png` to public folder
- 📋 **Future Sections**: Team, Contact pages

### Navigation Behavior Update (August 16, 2025)
- **Previous**: Fixed navbar that followed scroll
- **Current**: Absolute positioned navbar confined to hero section
- **User Experience**: Clean content viewing without navbar obstruction
- **Implementation**: Changed `className="fixed"` to `className="absolute"`

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** installed on your system
- **npm** package manager (comes with Node.js)
- **Git** for version control

### Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/Krishcodes-awesomestuff/new-seds.git
cd seds
```

2. **Install dependencies:**
```bash
npm install
```

3. **Install additional packages** (if not already installed):
```bash
npm install lucide-react  # For Vision/Mission icons
```

4. **Add missing assets:**
   - Add `about.png` image to the `public/` folder for About Us section
   - Ensure `herovid.mp4` and `logo.png` are in `public/` folder

5. **Run development server:**
```bash
npm run dev
```

6. **Open browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The website should load with video background and About Us section

### Build for Production

```bash
npm run build    # Creates optimized production build
npm start        # Runs production server
```

---

## 🧩 Component Documentation

### Main Page (`src/app/page.tsx`)
```tsx
export default function Home() {
  return (
    <main>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        <video /> {/* Background video */}
        <nav />  {/* Absolute positioned overlay navigation */}
        <div />  {/* Centered SEDS branding */}
      </section>
      
      {/* About Us Section */}
      <AboutUs />
      
      {/* Events Section */}
      <Events />
    </main>
  );
}
```

### About Us Component (`src/app/components/aboutus.tsx`)
```tsx
import { Eye, Target } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="bg-black text-white py-20">
      {/* Grid Layout: Image + Content */}
      {/* Vision & Mission Cards with Icons */}
    </section>
  );
}
```

### Events Component (`src/app/components/events.tsx`)
```tsx
export default function Events() {
  const events = [/* 5 sample events */];
  
  return (
    <section className="bg-black text-white py-20">
      {/* Blue "Events" heading with underline */}
      {/* Grid: 3 cards first row, 2 cards second row */}
      {/* Card structure: Name, Place/Date, Description, Button */}
    </section>
  );
}
```
      {/* Vision & Mission Cards with Icons */}
    </section>
  );
}
```

### Layout Configuration (`src/app/layout.tsx`)
```tsx
const arsenal = Arsenal({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-arsenal',
});
```

---

## 🎨 Design Implementation Details

### Video Background Setup
- Video file: `public/herovid.mp4`
- Autoplay enabled with muted attribute
- Loop for continuous playback
- No controls for clean presentation
- Responsive sizing with object-cover

### Typography System
- **Primary Font**: Arsenal (Google Fonts)
- **Weights**: 400 (regular), 700 (bold)
- **Implementation**: CSS variables in Tailwind config
- **Usage**: Applied to headings and brand text

### Glassmorphism Effects
```css
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Color Scheme
- **Primary**: Black backgrounds
- **Accent**: Blue (#3B82F6, #1D4ED8)
- **Text**: White with opacity variations
- **Borders**: Gray with transparency

---

## 🔧 Developer Notes

### Code Quality Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Configured for Next.js best practices
- **Components**: Functional components with TypeScript
- **Styling**: Tailwind CSS utility classes
- **File Organization**: Components in dedicated folders

### Performance Optimizations
- **Next.js Image**: Used for optimized image loading
- **Video Optimization**: Compressed video file recommended
- **Lazy Loading**: Implemented for non-critical assets
- **Bundle Optimization**: Next.js automatic code splitting

### Known Issues & Solutions
1. **Missing about.png**: 
   - **Issue**: About Us section shows placeholder
   - **Solution**: Add `about.png` image to `public/` folder

2. **Video Performance**:
   - **Issue**: Large video files may slow loading
   - **Solution**: Compress video or implement lazy loading

3. **Font Loading**:
   - **Issue**: Font flash during initial load
   - **Solution**: Already optimized with Next.js font loading

---

## 📋 Future Development Tasks

### Immediate Tasks
- [ ] Add `about.png` image to public folder
- [ ] Test About Us section with actual image
- [ ] Optimize video file size if needed
- [ ] Add error boundaries for components

### Upcoming Features
- [ ] Events section with event cards
- [ ] Team section with member profiles
- [ ] Contact section with form
- [ ] Mobile navigation improvements
- [ ] SEO optimization and meta tags
- [ ] Animation performance optimization

### Content Requirements
- [ ] Professional About Us image
- [ ] Event photos and descriptions
- [ ] Team member photos and bios
- [ ] Contact form backend integration

---

## 🎨 Design Philosophy & Implementation

The website embodies the spirit of space exploration through:

### Visual Design Principles
- **Modern Aesthetics**: Clean, futuristic design reflecting technological advancement
- **Interactive Elements**: Engaging animations that capture user attention
- **Professional Branding**: Consistent use of SEDS branding and Arsenal typography
- **User Experience**: Intuitive navigation and clear information hierarchy
- **Performance**: Optimized for fast loading and smooth interactions

### Technical Design Decisions
- **Video Background**: Creates immersive space exploration atmosphere
- **Glassmorphism**: Modern UI trend reflecting transparency and depth
- **Component Separation**: Hero with video, content sections with solid backgrounds
- **Typography Hierarchy**: Arsenal font for branding, system fonts for content
- **Color Psychology**: Dark themes with blue accents suggest space and technology

---

## 📱 Responsive Design Implementation

The website is fully responsive and optimized for:

### Breakpoints & Design Adaptations
- 📱 **Mobile devices (320px+)**: Stacked layouts, touch-optimized navigation
- 📲 **Tablets (768px+)**: Adapted grid layouts, medium spacing
- 💻 **Desktops (1024px+)**: Full grid layouts, optimal spacing
- 🖥️ **Large screens (1440px+)**: Enhanced spacing, larger content areas

### Mobile-First Approach
```css
/* Default styles for mobile */
.hero-section { /* mobile styles */ }

/* Tablet and up */
@media (min-width: 768px) { /* tablet styles */ }

/* Desktop and up */
@media (min-width: 1024px) { /* desktop styles */ }
```

---

## 🔧 Advanced Development Guide

### Key Components Deep Dive

#### Hero Section Architecture
```tsx
// Video background with overlay system
<section className="relative h-screen overflow-hidden">
  <video className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
  <nav /> {/* Glassmorphism navigation */}
  <div /> {/* Centered content */}
  <div /> {/* Scroll indicator */}
</section>
```

#### Navigation System
- **State Management**: useState for menu toggle
- **Animation**: Tailwind transform classes for smooth transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Social Links**: External links with proper targeting

#### About Us Component
- **Layout**: CSS Grid for responsive image/content layout
- **Icons**: Lucide React for consistent iconography
- **Content Structure**: Semantic HTML with proper headings
- **Styling**: Tailwind utilities for consistent spacing

### Customization Guide

#### Updating Branding
1. **Replace logo**: Update `public/logo.png` with new brand logo
2. **Change colors**: Modify Tailwind config for brand colors
3. **Update fonts**: Change Arsenal import in layout.tsx
4. **Modify content**: Edit text in components

#### Adding New Sections
1. **Create component**: `src/app/components/newsection.tsx`
2. **Import in main page**: Add to `src/app/page.tsx`
3. **Style consistently**: Use existing design patterns
4. **Test responsiveness**: Verify on all breakpoints

#### Video Customization
1. **File format**: MP4 recommended for browser compatibility
2. **Compression**: Use tools like HandBrake for optimization
3. **Fallback**: Consider adding poster image for slow connections
4. **Accessibility**: Add captions if video contains important information

---

## 🐛 Troubleshooting Guide

### Common Issues & Solutions

#### Video Not Playing
- **Check file path**: Ensure `herovid.mp4` is in `public/` folder
- **File format**: Convert to MP4 if using different format
- **Browser policies**: Some browsers block autoplay without user interaction

#### Font Loading Issues
- **Network issues**: Check Google Fonts connectivity
- **Cache problems**: Clear browser cache and restart dev server
- **Import errors**: Verify Arsenal import in layout.tsx

#### Styling Problems
- **Tailwind not working**: Ensure PostCSS and Tailwind configs are correct
- **Custom styles**: Check globals.css for conflicts
- **Responsive issues**: Test with browser dev tools

#### Component Errors
- **Import paths**: Verify relative paths to components
- **TypeScript errors**: Check prop types and component signatures
- **Missing dependencies**: Run `npm install` to ensure all packages installed

### Performance Optimization

#### Bundle Size Optimization
- **Dynamic imports**: Use Next.js dynamic imports for large components
- **Image optimization**: Use Next.js Image component
- **Tree shaking**: Remove unused imports and dependencies

#### Runtime Performance
- **Video optimization**: Compress video files appropriately
- **Animation performance**: Use CSS transforms over layout properties
- **Component memoization**: Use React.memo for expensive components

---

## 🌟 About SEDS & Project Context

### SEDS Organization
Students for the Exploration and Development of Space (SEDS) is an international student organization whose purpose is to promote space as a career field and to stimulate student interest in space science, engineering, and exploration.

### SEDS - REC Chapter Mission
The Rajalakshmi Engineering College chapter of SEDS is dedicated to:
- **Education**: Promoting space science education and awareness
- **Events**: Organizing space-related workshops, seminars, and competitions
- **Community**: Building a network of space enthusiasts and professionals
- **Careers**: Encouraging careers in aerospace, astronomy, and related fields
- **Innovation**: Supporting student research and space-related projects

### Website Purpose
This website serves as the digital presence for SEDS - REC, providing:
- **Information hub**: Central location for chapter information
- **Event promotion**: Platform for announcing and managing events
- **Member engagement**: Community space for current and prospective members
- **Professional presence**: Showcase of chapter achievements and activities

---

## 📞 Contact & Support

### Technical Support
For development questions or technical issues:
- **Repository**: [GitHub - new-seds](https://github.com/Krishcodes-awesomestuff/new-seds)
- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Development**: Follow contribution guidelines in repository

### SEDS - REC Contact
For questions about the organization:
- **Email**: [sedsrec@rajalakshmi.edu.in](mailto:sedsrec@rajalakshmi.edu.in)
- **Instagram**: [@seds_rec](https://www.instagram.com/seds_rec/?hl=en)
- **LinkedIn**: [SEDS-REC Company Page](https://www.linkedin.com/company/seds-rec/posts/?feedView=all)

### Contributing
1. **Fork the repository** on GitHub
2. **Create feature branch**: `git checkout -b feature/new-feature`
3. **Make changes** following existing code patterns
4. **Test thoroughly** on multiple devices and browsers
5. **Submit pull request** with detailed description

---

## 📄 Project Metadata

### Version History
- **v1.0** (August 2025): Initial hero section with video background
- **v1.1** (August 2025): Added overlay navigation system  
- **v1.2** (August 2025): Implemented About Us section with icons
- **v1.3** (August 16, 2025): Added Events section with grid layout
- **v1.4** (August 16, 2025): Changed navbar to absolute positioning
- **Current**: Multi-section layout with modular components

### License & Usage
This project is developed for SEDS - REC and is intended for educational and organizational purposes. The codebase can be used as reference for similar student organization websites.

### Acknowledgments
- **Next.js Team**: For the excellent React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Lucide React**: For beautiful, consistent icons
- **Google Fonts**: For the Arsenal typography
- **SEDS International**: For the inspiration and organizational framework

---

**Built with ❤️ by the SEDS - REC development team**

*Reaching for the stars, one line of code at a time* 🚀

---

## 🔄 Change Log

### August 16, 2025 - Latest Updates
- ✅ **Hero Section**: Implemented full-screen video background with `herovid.mp4`
- ✅ **Navigation**: Created glassmorphism overlay menu system
- ✅ **Navigation Update**: Changed positioning from fixed to absolute (navbar stays in hero only)
- ✅ **Typography**: Integrated Arsenal font from Google Fonts
- ✅ **Branding**: Added centered SEDS - REC branding with scroll indicator
- ✅ **About Us**: Created dedicated component with Vision/Mission cards
- ✅ **Events Section**: Implemented complete events showcase with grid layout
- ✅ **Dependencies**: Installed lucide-react for iconography
- ✅ **Structure**: Organized components for maintainable architecture
- 📋 **Documentation**: Comprehensive README update for future developers

### Events Section Details (August 16, 2025)
- **Component**: `src/app/components/events.tsx`
- **Layout**: 3 cards in first row, 2 cards in second row (centered)
- **Card Structure**: Event name, place/date, description, action button
- **Sample Events**: 5 space-related events with realistic details
- **Styling**: Blue headings with underlines, hover effects, responsive design
- **Integration**: Seamlessly added to main page after About Us section

### Navigation Positioning Update (August 16, 2025)
- **Change**: Modified navbar from `fixed` to `absolute` positioning
- **Behavior**: Logo and hamburger menu now confined to hero section
- **User Experience**: Clean scrolling without navigation obstruction
- **Technical**: Simple className change for improved UX

### Development Notes
- Video background isolated to hero section only
- About Us section uses black background for content distinction
- Events section follows same black background pattern
- Placeholder system implemented for missing about.png image
- Responsive design implemented across all components
- TypeScript strict mode enabled for code quality