import { GaugeCircle, Tag, Gem, Calendar, CarFront, Users, Fuel, GitBranch, ShieldCheck, Paintbrush, Cog } from 'lucide-react';

export interface Car {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  mileage: number;
  engine: string;
  type: 'Sedan' | 'SUV' | 'Coupe' | 'Convertible' | 'Sports Car';
  transmission: 'Automatic' | 'Manual';
  horsepower: number;
  seats: number;
  fuelType: string;
  images: string[];
  features: string[];
  description: string;
}

export const cars: Car[] = [
    {
        id: 'porsche-911-gt3-rs',
        name: 'Porsche 911 GT3 RS',
        brand: 'Porsche',
        year: 2023,
        price: 241300,
        mileage: 1500,
        engine: '4.0L Flat-6',
        type: 'Sports Car',
        transmission: 'Automatic',
        horsepower: 518,
        seats: 2,
        fuelType: 'Gasoline',
        images: [
            'https://images.unsplash.com/photo-1616625227429-9343a89b0394?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1616625227367-bd425715a753?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1616625227494-45104b7a70c5?q=80&w=2940&auto=format&fit=crop',
        ],
        features: ['Carbon Fiber Roof', 'Weissach Package', 'Porsche Ceramic Composite Brakes', 'Front Axle Lift System'],
        description: 'The Porsche 911 GT3 RS is a high-performance, track-focused sports car that delivers an exhilarating driving experience. Its naturally aspirated engine and advanced aerodynamics make it a true driver\'s car.'
    },
    {
        id: 'ferrari-sf90-stradale',
        name: 'Ferrari SF90 Stradale',
        brand: 'Ferrari',
        year: 2024,
        price: 528700,
        mileage: 800,
        engine: '4.0L Twin-Turbo V8 Hybrid',
        type: 'Sports Car',
        transmission: 'Automatic',
        horsepower: 986,
        seats: 2,
        fuelType: 'Hybrid',
        images: [
            'https://images.unsplash.com/photo-1620921499923-5d79b20b223b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1617003496228-5e4d2a3f3e1f?q=80&w=2940&auto=format&fit=crop',
        ],
        features: ['Assetto Fiorano Package', 'Carbon Fiber Wheels', 'Titanium Exhaust', 'eDrive Mode'],
        description: 'The SF90 Stradale is Ferrari\'s first-ever PHEV (Plug-in Hybrid Electric Vehicle) supercar, setting a new benchmark for performance, innovation, and driving pleasure.'
    },
    {
        id: 'lamborghini-revuelto',
        name: 'Lamborghini Revuelto',
        brand: 'Lamborghini',
        year: 2024,
        price: 608358,
        mileage: 500,
        engine: '6.5L V12 Hybrid',
        type: 'Sports Car',
        transmission: 'Automatic',
        horsepower: 1001,
        seats: 2,
        fuelType: 'Hybrid',
        images: [
            'https://images.unsplash.com/photo-1681447035667-27962734490c?q=80&w=2832&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1681447035607-3532f0552b82?q=80&w=2832&auto=format&fit=crop',
        ],
        features: ['Carbon Fiber Monocoque', 'Active Aerodynamics', 'Three Electric Motors', '13 Drive Modes'],
        description: 'The Lamborghini Revuelto is the first V12 hybrid plug-in HPEV (High Performance Electrified Vehicle), offering unprecedented performance and a futuristic design.'
    },
    {
        id: 'rolls-royce-ghost',
        name: 'Rolls-Royce Ghost',
        brand: 'Rolls-Royce',
        year: 2023,
        price: 348500,
        mileage: 2500,
        engine: '6.75L Twin-Turbo V12',
        type: 'Sedan',
        transmission: 'Automatic',
        horsepower: 563,
        seats: 5,
        fuelType: 'Gasoline',
        images: [
            'https://images.unsplash.com/photo-1617814243195-25fe8a478b66?q=80&w=2940&auto=format&fit=crop',
        ],
        features: ['Starlight Headliner', 'Magic Carpet Ride Suspension', 'Effortless Doors', 'Bespoke Audio System'],
        description: 'The Rolls-Royce Ghost is the epitome of modern luxury, offering a serene and effortless driving experience combined with exquisite craftsmanship and cutting-edge technology.'
    },
    {
        id: 'mercedes-amg-g63',
        name: 'Mercedes-AMG G 63',
        brand: 'Mercedes-Benz',
        year: 2023,
        price: 183000,
        mileage: 5000,
        engine: '4.0L Twin-Turbo V8',
        type: 'SUV',
        transmission: 'Automatic',
        horsepower: 577,
        seats: 5,
        fuelType: 'Gasoline',
        images: [
            'https://images.unsplash.com/photo-1627042599222-3a7859844a4c?q=80&w=2940&auto=format&fit=crop',
        ],
        features: ['Iconic Boxy Design', 'Side-Exit Exhaust System', 'Three Locking Differentials', 'Luxury Interior'],
        description: 'The Mercedes-AMG G 63 combines immense off-road capability with breathtaking performance and a lavishly appointed interior, making it a true icon of automotive design.'
    },
    {
        id: 'mclaren-720s',
        name: 'McLaren 720S',
        brand: 'McLaren',
        year: 2022,
        price: 305000,
        mileage: 3200,
        engine: '4.0L Twin-Turbo V8',
        type: 'Coupe',
        transmission: 'Automatic',
        horsepower: 710,
        seats: 2,
        fuelType: 'Gasoline',
        images: [
            'https://images.unsplash.com/photo-1590369153526-20c32d20365b?q=80&w=2940&auto=format&fit=crop',
        ],
        features: ['Carbon Fiber Monocage II', 'Proactive Chassis Control II', 'Variable Drift Control', 'Dihedral Doors'],
        description: 'The McLaren 720S is a masterpiece of aerodynamic design and engineering, offering blistering performance and an incredibly connected driving experience.'
    },
];

export const carFeatures = [
    { icon: GaugeCircle, label: 'Mileage', key: 'mileage' },
    { icon: Calendar, label: 'Year', key: 'year' },
    { icon: CarFront, label: 'Type', key: 'type' },
    { icon: Users, label: 'Seats', key: 'seats' },
    { icon: Fuel, label: 'Fuel', key: 'fuelType' },
    { icon: GitBranch, label: 'Transmission', key: 'transmission' },
];

export const services = [
  {
    icon: ShieldCheck,
    title: "Certified Pre-Owned",
    description: "Every vehicle undergoes a rigorous 150-point inspection to ensure quality and reliability.",
  },
  {
    icon: Paintbrush,
    title: "Customization",
    description: "From custom paint jobs to performance tuning, we'll help you create your dream car.",
  },
  {
    icon: Gem,
    title: "Financing & Leasing",
    description: "We offer competitive financing and leasing options to fit your budget.",
  },
  {
    icon: Cog,
    title: "Expert Maintenance",
    description: "Our certified technicians provide top-tier service to keep your vehicle in peak condition.",
  },
];
