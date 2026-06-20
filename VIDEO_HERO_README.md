# VideoHero Implementation

## What's Been Added

A scroll-driven interactive video hero section has been added to the LogoArm website.

## Files Modified/Created

1. **`src/components/VideoHero.tsx`** - New component with scroll-based video interaction
2. **`src/vite-env.d.ts`** - TypeScript definitions for video imports
3. **`src/App.tsx`** - Updated to include VideoHero before the main Hero section

## How It Works

### Scroll Interaction
- **Pinning**: The video hero stays fixed while you scroll through 150% of the viewport
- **Video Scrubbing**: As you scroll down, the video plays forward. Scroll up, it reverses.
- **Scale Effect**: Video starts at 1.15x zoom and scales down to 0.9x
- **Opacity**: Video fades from 100% to 70% opacity
- **Overlay**: Cream gradient fades in smoothly to transition to the next section

### Technical Details
- Uses GSAP ScrollTrigger for smooth scroll animations
- Video playback is controlled by scroll progress (not autoplay)
- `scrub: true` enables smooth, buttery animations
- Muted and plays inline for mobile compatibility

## Video Location
The video is located at: `src/public/video_hero.mp4`

## To Test
Run the dev server:
```bash
npm run dev
```

Then scroll down on the homepage - you should see the video animation respond to your scroll.

## Customization

To adjust the scroll behavior, edit these values in `VideoHero.tsx`:
- `end: "+=150%"` - Change scroll distance (higher = longer pin)
- `scale: 1.15` to `scale: 0.9` - Adjust zoom range
- `opacity: 0.7` - Change final opacity value
