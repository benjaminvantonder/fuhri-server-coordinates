export interface Coordinate {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
  z: number;
  dimension: 'overworld' | 'nether' | 'end';
  type: 'natural' | 'man-made';
  tags: string[];
  discoveredBy?: string;
  dateDiscovered?: string;
  image?: string;
}

export type FilterType = 'all' | 'natural' | 'man-made';
export type DimensionFilter = 'all' | 'overworld' | 'nether' | 'end';