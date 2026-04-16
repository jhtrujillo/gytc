declare module "lucide-react" {
  import * as React from "react";

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
    size?: number | string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = React.ForwardRefExoticComponent<LucideProps & React.RefAttributes<SVGSVGElement>>;

  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const MoreHorizontal: LucideIcon;
  export const GripVertical: LucideIcon;
  export const PanelLeft: LucideIcon;

  export const Check: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const Circle: LucideIcon;
  export const Dot: LucideIcon;
  export const Search: LucideIcon;

  export const Phone: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Clock: LucideIcon;
  export const MessageCircle: LucideIcon;

  export const Truck: LucideIcon;
  export const Construction: LucideIcon;
  export const Forklift: LucideIcon;
  export const HardHat: LucideIcon;
  export const Building2: LucideIcon;
  export const Wrench: LucideIcon;

  export const Shield: LucideIcon;
  export const FileCheck: LucideIcon;
  export const Award: LucideIcon;
  export const Trophy: LucideIcon;
  export const ThumbsUp: LucideIcon;
  export const Quote: LucideIcon;
  export const Target: LucideIcon;
  export const Eye: LucideIcon;
  export const Users: LucideIcon;

  export const Facebook: LucideIcon;
  export const Instagram: LucideIcon;
  export const Linkedin: LucideIcon;

  // PWA & Mobile icons
  export const Download: LucideIcon;
  export const Bell: LucideIcon;
  export const Wifi: LucideIcon;
  export const Smartphone: LucideIcon;
  export const Share: LucideIcon;
  export const MoreVertical: LucideIcon;
  export const PlusSquare: LucideIcon;

  export const icons: Record<string, LucideIcon>;
  const _default: Record<string, never>;
  export default _default;
}
