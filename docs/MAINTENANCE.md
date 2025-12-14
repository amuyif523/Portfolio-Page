# Maintenance Guide

This guide covers common tasks for maintaining and updating the portfolio content.

## 1. Adding a New Project

Projects are data-driven and located in `src/lib/content/projects.ts`.

### Steps:
1. **Prepare Assets**:
   - Save your project image (recommended: 16:9 aspect ratio, ~1920x1080) to `public/work/`.
   - Example: `public/work/new-project.jpg`.

2. **Update Data**:
   - Open `src/lib/content/projects.ts`.
   - Add a new object to the `projects` array:

```typescript
{
  id: 'new-project-id', // Unique string
  title: 'Project Title',
  category: 'Development',
  year: '2025',
  client: 'Client Name',
  description: 'Short description for the list view.',
  image: '/work/new-project.jpg',
  slug: 'new-project-slug', // Used in URL: /work/new-project-slug
  tags: ['Next.js', 'WebGL', 'TypeScript'],
  link: 'https://live-project-link.com' // Optional
}
```

3. **Verify**:
   - Run `npm run dev`.
   - Check the "Work" section on the home page.
   - Click through to the detail page (`/work/new-project-slug`).

## 2. Updating Social Links

Social links are managed in `src/lib/content/socials.ts`.

- **Social Profiles**: Update the `socialLinks` array.
- **Contact Info**: Update the `contactInfo` object (email, button text).

## 3. Adjusting Animations

If animations feel too fast or slow, adjust the global tokens instead of individual components.

- **File**: `src/styles/tokens.ts`
- **Values**:
  - `motion.duration.fast`: Micro-interactions (hover).
  - `motion.duration.normal`: Standard transitions (fade-ins).
  - `motion.duration.slow`: Large movements (page transitions).

## 4. Accessibility Checks

When adding new components, always verify:
1. **Keyboard Nav**: Can you tab to it? Does it have a focus style?
2. **Reduced Motion**: Does it respect the user's preference?
   - Use the `usePrefersReducedMotion` hook.
   - Wrap GSAP animations in `if (prefersReducedMotion) return`.

## 5. Signature Interaction (HyperText)

The Hero section features a "HyperText" scramble effect on the main title.
- **Component**: `src/components/ui/HyperText.tsx`
- **Usage**: Wrap text with `<HyperText delay={500}>Text</HyperText>`.
- **Behavior**: Cycles through random characters before resolving.
- **Accessibility**: Automatically disabled if `prefers-reduced-motion` is set.

## 6. Deployment

The project is configured for Vercel.

1. Push changes to `main`.
2. Vercel will automatically build and deploy.
3. If the build fails, check the logs for TypeScript or Linting errors.
