export type Biography = {
  id: number;
  name: string;
  birthDate: string | null;
  dates: string;
  alt: string;
  description: string;
  coords: string;
  shape: 'circle' | 'rect';
  image: string;
  subwayLine: SubwayLine[];
  category: Category[];
};

export type SortingAndDirection = {
  sorting: string;
  direction: 'asc' | 'desc';
  subwayLine: string;
  category: string;
};

export type Category =
  | 'all'
  | 'activism'
  | 'health'
  | 'sports'
  | 'culture'
  | 'literature'
  | 'rights'
  | 'urbanism';

export type SubwayLine =
  | 'all'
  | 'l1'
  | 'l2'
  | 'l3'
  | 'l4'
  | 'l5'
  | 'l6'
  | 'l7'
  | 'l9s'
  | 'l9n'
  | 'l10s'
  | 'l10n'
  | 'l11'
  | 'l12'
  | 's1';
