export interface ModuleItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'video' | 'guide' | 'pdf' | 'routine';
  durationOrPages: string;
  highlights: string[];
}

export interface BonusItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  valueOriginal: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  babyName: string;
  babyAge: string;
  location: string;
  image: string;
  quote: string;
  highlight: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AudioSample {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  type: 'white-noise' | 'heartbeat' | 'lullaby';
}

export interface ModalState {
  isOpen: boolean;
  type: 'terms' | 'privacy' | 'contact' | 'checkout' | null;
}
