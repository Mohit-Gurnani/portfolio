export const HeroBackground = ({className}: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" lang="en">
    <defs>
      <pattern id="grid-24" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-24)" />
  </svg>
)