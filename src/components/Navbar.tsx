import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/lightswind/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/lightswind/sheet";
import { Car, ShoppingCart, Menu } from "lucide-react";
import { useCartStore } from "@/store/cart";

export function Navbar() {
  const cart = useCartStore((state) => state.cart);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <Car className="h-6 w-6" />
          <span className="text-lg">AutoLux</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : "text-muted-foreground transition-colors hover:text-foreground"}>Home</NavLink>
          <NavLink to="/inventory" className={({ isActive }) => isActive ? "text-primary" : "text-muted-foreground transition-colors hover:text-foreground"}>Inventory</NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cart.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cart.length}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
                  <Car className="h-6 w-6" />
                  <span>AutoLux</span>
                </Link>
                <Link to="/" className="hover:text-foreground">Home</Link>
                <Link to="/inventory" className="text-muted-foreground hover:text-foreground">Inventory</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
