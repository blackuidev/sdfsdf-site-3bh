import { useCartStore } from "@/store/cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/lightswind/sheet";
import { Button } from "@/components/lightswind/button";
import { ScrollArea } from "@/components/lightswind/scroll-area";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

export function CartSidebar() {
  const { isCartOpen, closeCart, items, removeFromCart, clearCart } = useCartStore();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Sheet open={isCartOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="w-[400px] sm:w-[540px] bg-background p-0 flex flex-col">
        <SheetHeader className="p-6">
          <SheetTitle>Shopping Cart ({items.length})</SheetTitle>
        </SheetHeader>
        <div className="border-t border-border"></div>
        {items.length > 0 ? (
          <>
            <ScrollArea className="flex-grow">
              <div className="p-6 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">${item.price.toLocaleString()}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="border-t border-border mt-auto"></div>
            <SheetFooter className="p-6 bg-background">
              <div className="w-full space-y-4">
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <Button className="w-full" asChild>
                  <Link to="/checkout" onClick={closeCart}>Proceed to Checkout</Link>
                </Button>
                <Button variant="outline" className="w-full" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <h3 className="text-lg font-semibold">Your cart is empty</h3>
            <p className="text-muted-foreground">Add some cars to get started!</p>
            <Button className="mt-4" asChild>
              <Link to="/inventory" onClick={closeCart}>Browse Inventory</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
