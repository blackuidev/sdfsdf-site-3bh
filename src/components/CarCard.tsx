import { Car } from "@/store/cart";
import { Link } from "react-router-dom";
import { Button } from "@/components/lightswind/button";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <Link to={`/car/${car.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View Details</span>
      </Link>
      <img
        src={car.images[0]}
        alt={`${car.make} ${car.model}`}
        width={600}
        height={400}
        className="h-64 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="bg-white p-4 dark:bg-gray-950">
        <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{car.make} {car.model}</h3>
            <div className="text-lg font-semibold">${car.price.toLocaleString()}</div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{car.year}</p>
        <Button className="mt-4 w-full">View Details</Button>
      </div>
    </div>
  );
}
