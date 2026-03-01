import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Car } from '@/lib/data';
import { toast } from 'react-toastify';

export interface CartItem extends Car {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  addToCart: (car: Car) => void;
  removeFromCart: (carId: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isCartOpen: false,
      addToCart: (car) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === car.id);
          if (existingItem) {
            toast.info(`${car.name} is already in the cart.`);
            return { items: state.items };
          }
          toast.success(`${car.name} added to cart!`);
          return { items: [...state.items, { ...car, quantity: 1 }] };
        });
      },
      removeFromCart: (carId) => {
        set((state) => {
          const itemToRemove = state.items.find((item) => item.id === carId);
          if (itemToRemove) {
            toast.error(`${itemToRemove.name} removed from cart.`);
          }
          return {
            items: state.items.filter((item) => item.id !== carId),
          }
        });
      },
      clearCart: () => {
        set({ items: [] });
        toast.info("Cart cleared.");
      },
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
    }),
    {
      name: 'cart-storage', // name of the item in the storage (must be unique)
    }
  )
);
