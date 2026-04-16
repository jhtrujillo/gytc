import * as React from "react";

export interface LucideProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}

type LucideIcon = React.ForwardRefExoticComponent<LucideProps & React.RefAttributes<SVGSVGElement>>;

function createIcon(displayName: string, children: React.ReactNode): LucideIcon {
  const Comp = React.forwardRef<SVGSVGElement, LucideProps>(
    ({ color = "currentColor", size = 24, strokeWidth = 2, ...props }, ref) => (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={props["aria-label"] ? undefined : true}
        {...props}
      >
        {children}
      </svg>
    )
  );
  Comp.displayName = displayName;
  return Comp;
}

// Navigation & layout
export const Menu = createIcon("Menu", (
  <>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </>
));

export const X = createIcon("X", (
  <>
    <path d="M18 6 6 18" />
    <path d="M6 6l12 12" />
  </>
));

export const ChevronLeft = createIcon("ChevronLeft", <path d="m15 18-6-6 6-6" />);
export const ChevronRight = createIcon("ChevronRight", <path d="m9 18 6-6-6-6" />);
export const ChevronDown = createIcon("ChevronDown", <path d="m6 9 6 6 6-6" />);
export const ChevronUp = createIcon("ChevronUp", <path d="m18 15-6-6-6 6" />);

export const ArrowLeft = createIcon("ArrowLeft", (
  <>
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </>
));
export const ArrowRight = createIcon("ArrowRight", (
  <>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </>
));

export const MoreHorizontal = createIcon("MoreHorizontal", (
  <>
    <circle cx="6" cy="12" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="18" cy="12" r="1" />
  </>
));

export const GripVertical = createIcon("GripVertical", (
  <>
    <circle cx="9" cy="6" r="1" />
    <circle cx="9" cy="12" r="1" />
    <circle cx="9" cy="18" r="1" />
    <circle cx="15" cy="6" r="1" />
    <circle cx="15" cy="12" r="1" />
    <circle cx="15" cy="18" r="1" />
  </>
));

export const PanelLeft = createIcon("PanelLeft", (
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M9 4v16" />
  </>
));

// Status & feedback
export const Check = createIcon("Check", <path d="M20 6 9 17l-5-5" />);

export const CheckCircle = createIcon("CheckCircle", (
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M16 10l-5 5-2-2" />
  </>
));

export const Circle = createIcon("Circle", <circle cx="12" cy="12" r="10" />);
export const Dot = createIcon("Dot", <circle cx="12" cy="12" r="2" />);

export const Search = createIcon("Search", (
  <>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </>
));

// Communication & contact
export const Phone = createIcon("Phone", (
  <>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
  </>
));

export const Mail = createIcon("Mail", (
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </>
));

export const MapPin = createIcon("MapPin", (
  <>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </>
));

export const Clock = createIcon("Clock", (
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </>
));

export const MessageCircle = createIcon("MessageCircle", (
  <>
    <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.1 0-2.2-.2-3.2-.6L3 21l1.6-6.3c-.4-1-.6-2.1-.6-3.2A8.5 8.5 0 0 1 12.5 3 8.5 8.5 0 0 1 21 11.5z" />
  </>
));

// Business & equipment (simple, clean glyphs)
export const Truck = createIcon("Truck", (
  <>
    <path d="M3 7h11v10H3z" />
    <path d="M14 10h4l3 3v4h-7" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </>
));

export const Construction = createIcon("Construction", (
  <>
    <path d="M2 20h20" />
    <path d="M6 20V8l6-4 6 4v12" />
    <path d="M10 20v-6h4v6" />
  </>
));

export const Forklift = createIcon("Forklift", (
  <>
    <path d="M4 18V8h6v10" />
    <path d="M10 14h6" />
    <path d="M16 6v12" />
    <path d="M16 18h4" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="14" cy="18" r="2" />
  </>
));

export const HardHat = createIcon("HardHat", (
  <>
    <path d="M4 13a8 8 0 0 1 16 0v5H4z" />
    <path d="M12 5v3" />
    <path d="M8 6.5V9" />
    <path d="M16 6.5V9" />
  </>
));

export const Building2 = createIcon("Building2", (
  <>
    <path d="M6 22V4h12v18" />
    <path d="M9 8h2" />
    <path d="M9 12h2" />
    <path d="M9 16h2" />
    <path d="M13 8h2" />
    <path d="M13 12h2" />
    <path d="M13 16h2" />
  </>
));

export const Wrench = createIcon("Wrench", (
  <>
    <path d="M21 2l-2 2" />
    <path d="M7.5 7.5 3 12l9 9 4.5-4.5" />
    <path d="M14 5a4 4 0 0 0 5 5" />
  </>
));

// Safety, docs, awards
export const Shield = createIcon("Shield", (
  <>
    <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6z" />
  </>
));

export const FileCheck = createIcon("FileCheck", (
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M9 15l2 2 4-4" />
  </>
));

export const Award = createIcon("Award", (
  <>
    <circle cx="12" cy="8" r="5" />
    <path d="M8 13l-2 9 6-3 6 3-2-9" />
  </>
));

export const Trophy = createIcon("Trophy", (
  <>
    <path d="M8 4h8v4a4 4 0 0 1-8 0z" />
    <path d="M6 4H4a2 2 0 0 0 2 6" />
    <path d="M18 4h2a2 2 0 0 1-2 6" />
    <path d="M12 12v4" />
    <path d="M8 20h8" />
  </>
));

export const ThumbsUp = createIcon("ThumbsUp", (
  <>
    <path d="M14 9V5a2 2 0 0 0-2-2l-2 6" />
    <path d="M7 9H4v12h3" />
    <path d="M7 21h9a2 2 0 0 0 2-1.6l1-7A2 2 0 0 0 17 10H7" />
  </>
));

export const Quote = createIcon("Quote", (
  <>
    <path d="M7 7h4v6H7z" />
    <path d="M13 7h4v6h-4z" />
  </>
));

export const Target = createIcon("Target", (
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </>
));

export const Eye = createIcon("Eye", (
  <>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </>
));

export const Users = createIcon("Users", (
  <>
    <path d="M16 11a4 4 0 1 0-8 0" />
    <path d="M2 20a7 7 0 0 1 20 0" />
  </>
));

// Social icons (simple glyphs)
export const Facebook = createIcon("Facebook", (
  <path d="M14 8h2V5h-2a4 4 0 0 0-4 4v3H8v3h2v7h3v-7h3l1-3h-4V9a1 1 0 0 1 1-1z" />
));

export const Instagram = createIcon("Instagram", (
  <>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" />
  </>
));

export const Linkedin = createIcon("Linkedin", (
  <>
    <path d="M4 4h4v4H4z" />
    <path d="M4 10h4v10H4z" />
    <path d="M10 10h4v2a4 4 0 0 1 4-2c2.2 0 4 1.8 4 4v6h-4v-6a2 2 0 0 0-4 0v6h-4z" />
  </>
));

// PWA & Mobile icons
export const Download = createIcon("Download", (
  <>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </>
));

export const Bell = createIcon("Bell", (
  <>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </>
));

export const Wifi = createIcon("Wifi", (
  <>
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </>
));

export const Smartphone = createIcon("Smartphone", (
  <>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </>
));

export const Share = createIcon("Share", (
  <>
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </>
));

export const MoreVertical = createIcon("MoreVertical", (
  <>
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </>
));

export const PlusSquare = createIcon("PlusSquare", (
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </>
));

export const Home = createIcon("Home", (
  <>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </>
));

// Keep compatibility exports (not used in this project but safe)
export const icons = {} as Record<string, LucideIcon>;
export default {};
