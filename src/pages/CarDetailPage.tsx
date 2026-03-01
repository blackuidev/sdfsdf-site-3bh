import { useParams } from "react-router-dom";
import { cars } from "@/lib/data";
import { Button } from "@/components/lightswind/button";
import { useCartStore } from "@/store/cart";
import { toast } from "react-toastify";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/lightswind/carousel";
import { Badge } from "@/components/lightswind/badge";

export default function CarDetailPage() {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return <div>Car not found</div>;
  }
  
  const handleAddToCart = () => {
    addToCart(car);
    toast.success(`${car.make} ${car.model} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {car.images.map((image, index) => (
                <CarouselItem key={index}>
                  <img
                    src={image}
                    alt={`${car.make} ${car.model} image ${index + 1}`}
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full rounded-lg object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <h1 className="text-4xl font-bold">{car.make} {car.model}</h1>
          <p className="mt-2 text-2xl font-semibold">${car.price.toLocaleString()}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary">{car.year}</Badge>
            <Badge variant="secondary">{car.mileage.toLocaleString()} miles</Badge>
            <Badge variant="secondary">{car.engine}</Badge>
            <Badge variant="secondary">{car.transmission}</Badge>
          </div>
          <p className="mt-6 text-gray-600 dark:text-gray-300">{car.description}</p>
          <Button size="lg" className="mt-8 w-full md:w-auto" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
