export interface NavbarProps {
  title: string;
  path: string;
  onClick?: () => void;
}
export interface SocialLinkProps {
  title: string;
  path: string;
  Icon: React.ElementType;
  onClick?: () => void;
}
export interface GalleryProps {
  src: string;
  alt: string;
  title: string;
}
