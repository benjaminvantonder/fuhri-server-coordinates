import { Coordinate } from '../types/coordinates';

export const sampleCoordinates: Coordinate[] = [
  {
    id: '1',
    name: 'Diamond Mine',
    description: 'Large diamond vein discovered at bedrock level with multiple shafts and tunnels.',
    x: -245,
    y: 12,
    z: 678,
    dimension: 'overworld',
    type: 'natural',
    tags: ['diamonds', 'cave', 'mining'],
    discoveredBy: 'Steve',
    dateDiscovered: '2024-01-15'
  },
  {
    id: '2',
    name: 'Main Base',
    description: 'Primary settlement with enchanting room, storage systems, and automated farms.',
    x: 0,
    y: 64,
    z: 0,
    dimension: 'overworld',
    type: 'man-made',
    tags: ['base', 'settlement', 'farms'],
    discoveredBy: 'Alex',
    dateDiscovered: '2024-01-01'
  },
  {
    id: '3',
    name: 'Ancient Temple',
    description: 'Jungle temple with hidden traps and valuable loot. Approach with caution.',
    x: 892,
    y: 71,
    z: -334,
    dimension: 'overworld',
    type: 'natural',
    tags: ['temple', 'jungle', 'loot'],
    discoveredBy: 'Explorer',
    dateDiscovered: '2024-02-03'
  },
  {
    id: '4',
    name: 'Nether Portal Hub',
    description: 'Central portal network connecting to various locations across the world.',
    x: 0,
    y: 80,
    z: 0,
    dimension: 'nether',
    type: 'man-made',
    tags: ['portal', 'transport', 'nether'],
    discoveredBy: 'Builder',
    dateDiscovered: '2024-01-10'
  },
  {
    id: '5',
    name: 'Fortress Ruins',
    description: 'Massive nether fortress with blaze spawners and wither skeleton areas.',
    x: 120,
    y: 64,
    z: -80,
    dimension: 'nether',
    type: 'natural',
    tags: ['fortress', 'blazes', 'dangerous'],
    discoveredBy: 'Warrior',
    dateDiscovered: '2024-01-20'
  },
  {
    id: '6',
    name: 'End City Outpost',
    description: 'Strategic base near End City with shulker farm and elytra launching pad.',
    x: 1200,
    y: 90,
    z: 800,
    dimension: 'end',
    type: 'man-made',
    tags: ['end city', 'shulkers', 'elytra'],
    discoveredBy: 'Enderman Slayer',
    dateDiscovered: '2024-02-15'
  },
  {
    id: '7',
    name: 'Village Trading Post',
    description: 'Large village with optimized villager trades and iron golem farm.',
    x: 456,
    y: 68,
    z: -789,
    dimension: 'overworld',
    type: 'natural',
    tags: ['village', 'trading', 'villagers'],
    discoveredBy: 'Trader',
    dateDiscovered: '2024-01-25'
  },
  {
    id: '8',
    name: 'Sky Bridge Network',
    description: 'Elaborate glass bridge system connecting mountain peaks at cloud level.',
    x: -567,
    y: 200,
    z: 234,
    dimension: 'overworld',
    type: 'man-made',
    tags: ['bridge', 'glass', 'transportation'],
    discoveredBy: 'Architect',
    dateDiscovered: '2024-02-01'
  }
];