export interface Pillar {
  slug: string;
  name: string;
  description: string;
  activities: string[];
}

export interface Programme {
  slug: string;
  name: string;
  pillar: string;
  summary: string;
  description: string;
}

export interface Partner {
  name: string;
  category: string;
  logo?: string;
}

export interface FootprintLocation {
  city: string;
  role: string;
  focus: string[];
}
