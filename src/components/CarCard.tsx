import { Link } from 'react-router-dom';
import { Car } from '@/lib/data';
import { Tag, GaugeCircle, Gem, Calendar } from 'lucide-react';

interface CarCardProps {
    car: Car;
}

export const CarCard = ({ car }: CarCardProps) => {
    // THE FIX: Add a defensive check for the image URL.
    // The original error was 'Cannot read properties of undefined (reading '0')'
    // which happens when car.images is undefined or empty. This check prevents the crash.
    const imageUrl = car.images && car.images.length > 0
        ? car.images[0]
        : 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=2800&auto=format&fit=crop'; // A generic car placeholder

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-white/20 hover:-translate-y-1">
             <Link to={`/car/${car.id}`} className="absolute inset-0 z-10" aria-label={`View details for ${car.name}`}>
                <span className="sr-only">View Details</span>
            </Link>
            <div className="h-60 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={car.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="p-4 space-y-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold tracking-tight text-white">{car.name}</h3>
                        <p className="text-sm text-gray-400">{car.brand} &bull; {car.year}</p>
                    </div>
                     <div className="text-right">
                        <p className="text-2xl font-extrabold text-white">
                            ${car.price.toLocaleString()}
                        </p>
                    </div>
                </div>
                
                <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                        <GaugeCircle className="h-4 w-4 text-gray-400" />
                        <span>{car.mileage.toLocaleString()} mi</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-gray-400" />
                        <span>{car.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Gem className="h-4 w-4 text-gray-400" />
                        <span className="truncate">{car.engine}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>{car.transmission}</span>
                    </div>
                </div>
            </div>
             <div className="absolute top-2 right-2 z-20">
                 <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                 </button>
            </div>
        </div>
    );
};
