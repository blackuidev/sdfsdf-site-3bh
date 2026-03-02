import { ShieldCheck, Sparkles, Wrench, Star, Award, Rocket } from 'lucide-react';

export const cars = [
    {
      id: 1,
      name: 'Ferrari 488 GTB',
      type: 'Sport',
      image: 'https://images.unsplash.com/photo-1612763569156-9f3c1533c2a6?q=80&w=2070&auto=format&fit=crop',
      price: 350000,
      description: 'The Ferrari 488 GTB is a mid-engine sports car produced by the Italian automobile manufacturer Ferrari. The car is an update to the 458 Italia with notable exterior and performance changes.',
      features: ['3.9L Twin-Turbo V8', '661 Horsepower', '0-60 in 3.0s', 'Rear-Wheel Drive'],
      specs: {
        engine: '3.9L Twin-Turbo V8',
        horsepower: 661,
        topSpeed: 205,
        acceleration: 3.0,
      }
    },
    {
      id: 2,
      name: 'Lamborghini Huracan',
      type: 'Sport',
      image: 'https://images.unsplash.com/photo-1601362840469-52e4b6163263?q=80&w=1974&auto=format&fit=crop',
      price: 280000,
      description: 'The Lamborghini Huracán is a sports car manufactured by Italian automotive manufacturer Lamborghini replacing the previous V10 offering, the Gallardo.',
      features: ['5.2L V10 Engine', '631 Horsepower', '0-60 in 2.9s', 'All-Wheel Drive'],
      specs: {
        engine: '5.2L Naturally Aspirated V10',
        horsepower: 631,
        topSpeed: 202,
        acceleration: 2.9,
      }
    },
    {
      id: 3,
      name: 'Porsche 911 GT3',
      type: 'Sport',
      image: 'https://images.unsplash.com/photo-1617013735327-99292c5a4d4b?q=80&w=2070&auto=format&fit=crop',
      price: 220000,
      description: 'The Porsche 911 GT3 is a high-performance homologation model of the Porsche 911 sports car. It is a line of high-performance models, which began with the 1973 911 Carrera RS.',
      features: ['4.0L Flat-Six Engine', '502 Horsepower', '0-60 in 3.2s', 'Rear-Wheel Drive'],
      specs: {
        engine: '4.0L Naturally Aspirated Flat-6',
        horsepower: 502,
        topSpeed: 197,
        acceleration: 3.2,
      }
    },
    {
      id: 4,
      name: 'Rolls-Royce Phantom',
      type: 'Luxury',
      image: 'https://images.unsplash.com/photo-1620325851593-27c10334b5c7?q=80&w=2070&auto=format&fit=crop',
      price: 550000,
      description: 'The Rolls-Royce Phantom is a full-sized luxury saloon manufactured by Rolls-Royce Motor Cars. It is the eighth and current generation of the Rolls-Royce Phantom, debuting in 2017.',
      features: ['6.75L Twin-Turbo V12', '563 Horsepower', 'Starlight Headliner', 'Unmatched Luxury'],
      specs: {
        engine: '6.75L Twin-Turbo V12',
        horsepower: 563,
        topSpeed: 155,
        acceleration: 5.1,
      }
    },
    {
      id: 5,
      name: 'Bentley Continental GT',
      type: 'Luxury',
      image: 'https://images.unsplash.com/photo-1599422502984-138b5b08c66d?q=80&w=2070&auto=format&fit=crop',
      price: 300000,
      description: 'The Bentley Continental GT is a grand tourer manufactured and marketed by British automaker Bentley Motors since 2003. It was the first car released by Bentley under Volkswagen AG management.',
      features: ['6.0L Twin-Turbo W12', '626 Horsepower', 'Handcrafted Interior', 'Effortless Performance'],
      specs: {
        engine: '6.0L Twin-Turbo W12',
        horsepower: 626,
        topSpeed: 207,
        acceleration: 3.6,
      }
    },
    {
      id: 6,
      name: 'Mercedes-Maybach S-Class',
      type: 'Luxury',
      image: 'https://images.unsplash.com/photo-1634424395270-1793344682a2?q=80&w=2070&auto=format&fit=crop',
      price: 250000,
      description: 'The Mercedes-Maybach S-Class is the pinnacle of automotive luxury. It combines the perfection of the Mercedes-Benz S-Class with the exclusivity of Maybach.',
      features: ['4.0L Twin-Turbo V8', '496 Horsepower', 'Executive Rear Seating', 'Advanced Technology'],
      specs: {
        engine: '4.0L Twin-Turbo V8 with EQ Boost',
        horsepower: 496,
        topSpeed: 155,
        acceleration: 4.7,
      }
    },
];

export const services = [
  {
    id: 1,
    title: "Premium Detailing",
    description: "Our meticulous detailing service restores your vehicle to showroom condition, inside and out. We use only the finest products to protect your investment.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Performance Tuning",
    description: "Unlock your car's true potential with our expert performance tuning. We specialize in ECU remapping and hardware upgrades for maximum power and efficiency.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1553523824-16c597424269?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Paint Protection Film (PPF)",
    description: "Protect your vehicle's pristine paintwork from rock chips, scratches, and environmental contaminants with our self-healing, high-gloss paint protection film.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1628129235252-96559545dd4c?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "Expert Maintenance",
    description: "Trust our certified technicians with all your routine maintenance and complex repair needs. We use genuine parts to ensure peak performance and longevity.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    title: "Ceramic Coating",
    description: "Give your car an incredible, long-lasting shine and hydrophobic properties with our professional-grade ceramic coatings. Easier cleaning and superior protection.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1607966883103-29a35e4a5523?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    title: "VIP Concierge",
    description: "Experience the ultimate convenience with our VIP concierge service. We handle vehicle pickup, delivery, and all your automotive needs with discretion and care.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];
