import { cars } from "@/lib/data";
import { CarCard } from "@/components/CarCard";
import { Button } from "@/components/lightswind/button";
import { Link } from "react-router-dom";
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";

export default function HomePage() {
  const featuredCars = cars.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative h-[60vh] w-full overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Car"
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Find Your Dream Car</h1>
                <p className="mt-4 max-w-2xl text-lg md:text-xl">
                    Explore our curated collection of the world's most desirable automobiles.
                </p>
                <Button asChild size="lg" className="mt-8">
                    <Link to="/inventory">Explore Inventory</Link>
                </Button>
            </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Vehicles</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hand-picked selection of our finest luxury and performance cars.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Why Choose AutoLux?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer an unparalleled car buying experience with a commitment to quality and customer satisfaction.
              </p>
            </div>
            <div className="w-full">
              <GlowingCards>
                  <GlowingCard>
                      <div className="p-6">
                          <h3 className="text-xl font-bold">Premium Selection</h3>
                          <p className="mt-2 text-gray-500 dark:text-gray-400">Only the best, low-mileage, and pristine condition vehicles.</p>
                      </div>
                  </GlowingCard>
                  <GlowingCard>
                      <div className="p-6">
                          <h3 className="text-xl font-bold">Transparent Pricing</h3>
                          <p className="mt-2 text-gray-500 dark:text-gray-400">No hidden fees. The price you see is the price you pay.</p>
                      </div>
                  </GlowingCard>
                  <GlowingCard>
                      <div className="p-6">
                          <h3 className="text-xl font-bold">Expert Service</h3>
                          <p className="mt-2 text-gray-500 dark:text-gray-400">Our team of experts is here to guide you every step of the way.</p>
                      </div>
                  </GlowingCard>
              </GlowingCards>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
