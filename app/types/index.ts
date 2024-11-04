export interface Character {
  id: number;
  name: string;
  race: string;
  gender: string;
  description: string;
  biography: {
    birthDate?: string;
    height?: string;
    weight?: string;
    occupation?: string[];
    family?: {
      [key: string]: string;
    };
    affiliations?: string[];
    status?: string;
  };
  powerLevel: {
    base: number;
    transformations: {
      [key: string]: number;
    };
  };
  techniques: {
    [key: string]: {
      description: string;
      type: "offensive" | "defensive" | "supportive" | "signature";
    };
  };
  transformations: {
    [key: string]: {
      description: string;
      firstAppearance: {
        manga?: string;
        anime?: string;
      };
      multiplier?: number;
    };
  };
  imageUrl: string;
}

export interface ApiResponse<T> {
  status: number;
  data: T;
}

export interface ImageResponse {
  status: number;
  data: {
    url: string;
  };
} 