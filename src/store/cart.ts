import { create } from "zustand";

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  description: string;
  engine: string;
  transmission: string;
  mileage: number;
  images: string[];
}

interface CartItem extends Car {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (car: Car) => void;
  removeFromCart: (carId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (car) =>
    set((state) => {
      const existingCar = state.cart.find((item) => item.id === car.id);
      if (existingCar) {
        return {
          cart: state.cart.map((item) =>
            item.id === car.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...car, quantity: 1 }] };
    }),
  removeFromCart: (carId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== carId),
    })),
  clearCart: () => set({ cart: [] }),
}));
