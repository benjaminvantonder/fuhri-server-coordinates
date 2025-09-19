import { Coordinate } from "../types/coordinates";

export const sampleCoordinates: Coordinate[] = [
  {
    id: "1",
    name: "Ocean Monument",
    description: "Overworld ocean monument",
    x: -934,
    y: 63,
    z: 215,
    dimension: "overworld",
    type: "natural",
    tags: ["Monument", "Water", "Ocean"],
    discoveredBy: "Nicolas Alberts",
    dateDiscovered: "2025-09-19",
  },
  {
    id: "2",
    name: "Community Nether Portal",
    description: "Portal by almal se bases",
    x: 80,
    y: 65,
    z: -498,
    dimension: "overworld",
    type: "man-made",
    tags: ["Portal", "Safe", "Overworld"],
    discoveredBy: "Almal",
    dateDiscovered: "2025-09-19",
  },
];
