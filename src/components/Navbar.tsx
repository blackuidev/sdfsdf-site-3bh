import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/lightswind/button";
import { useCartStore } from "@/store/cart";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/lightswind/sheet";
import { CartSidebar } from "./CartSidebar";

export function Navbar() {
    const { items, openCart } = useCartStore();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const totalItems = items.length;

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/inventory", label: "Inventory" },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex items-center h-14 max-w-screen-2xl mx-auto">
                    <Link to="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold text-lg">CarLux</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.href}
                                to={link.href}
                                className={({ isActive }) =>
                                    `transition-colors hover:text-foreground/80 ${isActive ? "text-foreground" : "text-foreground/60"}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="flex items-center justify-end flex-1 space-x-4">
                        <Button variant="ghost" size="icon" onClick={openCart} className="relative">
                            <ShoppingCart className="w-5 h-5" />
                            {totalItems > 0 && (
                                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                                    {totalItems}
                                </span>
                            )}
                            <span className="sr-only">Open cart</span>
                        </Button>

                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="w-5 h-5" />
                                    <span className="sr-only">Toggle Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col h-full p-6 space-y-4">
                                    <Link to="/" className="mb-4">
                                        <span className="font-bold text-xl">CarLux</span>
                                    </Link>
                                    {navLinks.map((link) => (
                                        <NavLink
                                            key={link.href}
                                            to={link.href}
                                            className={({ isActive }) =>
                                                `text-lg font-medium transition-colors hover:text-foreground/80 ${isActive ? "text-foreground" : "text-foreground/60"}`
                                            }
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                        </NavLink>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
            <CartSidebar />
        </>
    );
}
