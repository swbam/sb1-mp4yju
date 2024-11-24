import { faker } from '@faker-js/faker';
import { brands } from './brands';
import { Car, Bid, WatchlistItem, Result } from '../types';

const carImages = {
  Toyota: [
    'https://images.unsplash.com/photo-1632245889029-e406faaa34cd?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800'
  ],
  Honda: [
    'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&w=800'
  ],
  BMW: [
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=800'
  ],
  Mercedes: [
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1595592774712-a78516f4f8bb?auto=format&fit=crop&w=800'
  ],
  Audi: [
    'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=800'
  ],
  Ford: [
    'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1600706432502-77a0e2e32790?auto=format&fit=crop&w=800'
  ],
  Chevrolet: [
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=800'
  ],
  Lexus: [
    'https://images.unsplash.com/photo-1622199678883-062ea8ad7e97?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800'
  ],
  Porsche: [
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1611651338412-8403fa6e3599?auto=format&fit=crop&w=800'
  ],
  Volkswagen: [
    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800'
  ],
  Subaru: [
    'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=800'
  ],
  Nissan: [
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800'
  ],
  Mazda: [
    'https://images.unsplash.com/photo-1586464836139-86553c751f65?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1628277613967-6abca504d0ac?auto=format&fit=crop&w=800'
  ],
  Hyundai: [
    'https://images.unsplash.com/photo-1633696528003-7b489169cc7d?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1633696528003-7b489169cc7d?auto=format&fit=crop&w=800'
  ]
};

const models = {
  Toyota: ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Tacoma', '4Runner'],
  Honda: ['Civic', 'Accord', 'CR-V', 'Pilot', 'HR-V', 'Odyssey'],
  BMW: ['3 Series', '5 Series', 'X3', 'X5', 'M3', 'M5'],
  Mercedes: ['C-Class', 'E-Class', 'GLC', 'GLE', 'S-Class', 'A-Class'],
  Audi: ['A4', 'A6', 'Q5', 'Q7', 'RS6', 'e-tron'],
  Ford: ['Mustang', 'F-150', 'Explorer', 'Escape', 'Bronco', 'Ranger'],
  Chevrolet: ['Camaro', 'Silverado', 'Equinox', 'Tahoe', 'Corvette', 'Blazer'],
  Lexus: ['ES', 'RX', 'NX', 'IS', 'LC', 'LS'],
  Porsche: ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan', 'Cayman'],
  Volkswagen: ['Golf', 'Tiguan', 'Atlas', 'Jetta', 'ID.4', 'Arteon'],
  Subaru: ['Outback', 'Forester', 'Crosstrek', 'WRX', 'Ascent', 'BRZ'],
  Nissan: ['Altima', '370Z', 'Rogue', 'Pathfinder', 'GT-R', 'Frontier'],
  Mazda: ['Mazda3', 'CX-5', 'MX-5', 'CX-9', 'CX-30', 'Mazda6'],
  Hyundai: ['Elantra', 'Tucson', 'Santa Fe', 'Palisade', 'Ioniq 5', 'Sonata']
};

const generateMockCar = (): Car => {
  const brand = brands[Math.floor(Math.random() * (brands.length - 1)) + 1]; // Skip 'All'
  const brandName = brand.name as keyof typeof models;
  const model = models[brandName][Math.floor(Math.random() * models[brandName].length)];
  const year = Math.floor(Math.random() * (2024 - 2015) + 2015);
  const mileage = Math.floor(Math.random() * 150000);
  const price = Math.floor(Math.random() * 15000) + 5000;
  const distance = Math.floor(Math.random() * 30) + 5; // 5-35 miles
  const timeLeft = `${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`;
  const bids = Math.floor(Math.random() * 50);
  const watchers = Math.floor(Math.random() * 100);
  
  // Get random image for the brand
  const brandImages = carImages[brandName];
  const image = brandImages[Math.floor(Math.random() * brandImages.length)];

  return {
    id: faker.string.uuid(),
    make: brandName,
    model,
    year,
    price,
    mileage,
    image,
    distance,
    timeLeft,
    bids,
    watchers,
    title: `${year} ${brandName} ${model}`
  };
};

export const mockCars: Car[] = Array.from({ length: 100 }, generateMockCar);

export const mockBids: Bid[] = mockCars.slice(0, 20).map(car => ({
  id: faker.string.uuid(),
  car,
  amount: car.price + Math.floor(Math.random() * 1000),
  status: faker.helpers.arrayElement(['active', 'outbid', 'won', 'lost']),
  date: faker.date.recent()
}));

export const mockWatchlist: WatchlistItem[] = mockCars.slice(20, 35).map(car => ({
  id: faker.string.uuid(),
  car,
  addedDate: faker.date.recent(),
  endDate: faker.date.soon()
}));

export const mockResults: Result[] = mockCars.slice(35, 85).map(car => ({
  id: faker.string.uuid(),
  car,
  finalPrice: car.price + Math.floor(Math.random() * 5000),
  soldDate: faker.date.recent(),
  totalBids: Math.floor(Math.random() * 50) + 1
}));