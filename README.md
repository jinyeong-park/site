# Jenny Park Portfolio Website

A clean, modern, and bilingual (English/Korean) portfolio website designed with UI/UX best practices in mind.

![Portfolio Preview](https://placeholder.svg?height=400&width=800)

## Design Philosophy

This portfolio was designed following fundamental UI/UX principles to create a simple yet effective showcase of professional work. The design prioritizes usability, readability, and accessibility while maintaining a distinct personality.

### UI/UX Concepts Applied

#### 1. Visual Hierarchy

- Clear section differentiation with consistent heading styles
- Strategic use of whitespace to guide the eye
- Subtle dividers to separate content sections
- Primary actions (CTAs) are visually emphasized

#### 2. Consistency

- Unified component styling throughout the site
- Predictable interaction patterns
- Consistent spacing system (8px grid)
- Repeating visual elements (rounded corners, card patterns)

#### 3. Feedback & Affordance

- Interactive elements provide visual feedback on hover/focus
- Buttons and links clearly indicate their clickability
- Micro-animations reinforce user actions
- Form elements with clear states (default, hover, focus)

#### 4. Simplicity

- Content is presented without unnecessary decoration
- Each section serves a clear purpose
- Information density is carefully balanced
- Minimal color palette to reduce visual noise

## Typography

The site uses **Inter**, a highly readable sans-serif font designed for screens:

- **Headings**:
  - H1: 3.5rem/4rem (56px/64px), font-weight: 700
  - H2: 2rem (32px), font-weight: 700
  - H3: 1.25rem (20px), font-weight: 600
- **Body Text**:

  - Regular: 1rem (16px), font-weight: 400, line-height: 1.5
  - Large: 1.125rem (18px), font-weight: 400, line-height: 1.6
  - Small: 0.875rem (14px), font-weight: 400

- **Letter Spacing**:
  - Headings: -0.025em (tighter)
  - Body: normal

## Color Scheme

The color scheme is intentionally minimal to maintain focus on content:

- **Primary**: #18181B (dark gray with slight blue undertone)

  - Used for emphasis, buttons, and interactive elements
  - HSL: 240 5.9% 10%

- **Background**: #FFFFFF (white)

  - Clean canvas for content
  - HSL: 0 0% 100%

- **Text**:

  - Primary text: #0F0F10 (near black)
  - Secondary text: #71717A (medium gray)
  - HSL: 240 10% 3.9% and 240 3.8% 46.1%

- **Accents**:
  - Subtle backgrounds: #F4F4F5 (light gray)
  - Borders: #E4E4E7 (medium light gray)
  - HSL: 240 4.8% 95.9% and 240 5.9% 90%

The color system uses HSL variables for easy manipulation in dark mode and to maintain consistent relationships between colors.

## Spacing System

The layout follows an 8px grid system:

- **Base unit**: 4px
- **Common spacing values**:

  - xs: 0.5rem (8px)
  - sm: 1rem (16px)
  - md: 1.5rem (24px)
  - lg: 2rem (32px)
  - xl: 3rem (48px)
  - 2xl: 4rem (64px)

- **Section spacing**:
  - Vertical padding between sections: 5rem (80px)
  - Container max-width: 1400px with responsive padding

## Responsive Design

The site is fully responsive with several breakpoints:

- **Mobile**: 0-639px
- **Tablet**: 640px-1023px
- **Desktop**: 1024px+

Key responsive features:

- Fluid typography that scales with viewport
- Grid layouts that reflow based on screen size
- Stack layout on mobile for better readability
- Optimized spacing on smaller screens
- Touch-friendly tap targets (min 44px)

## Accessibility Features

- Semantic HTML structure
- ARIA attributes where appropriate
- Color contrast ratios exceeding WCAG AA standards
- Keyboard navigable interface
- Focus states for interactive elements
- Alt text for all images
- Screen reader friendly content

## Bilingual Support

The site implements a language context system that:

- Stores user language preference
- Provides translations for all UI text
- Maintains consistent layout between languages
- Preserves proper typography for both English and Korean
- Updates HTML lang attribute for screen readers

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript
- **Lucide Icons**: Simple, consistent icon set
- **Shadcn/UI**: Accessible component library

## Getting Started

### Prerequisites

- Node.js 18.0.0 or newer
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jinyeong-park/site.git
   cd site
   ```
