import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface TenantCart {
  productsId: string[];
}

interface CartState {
  tenantCards: Record<string, TenantCart>;
  addProduct: (tenantSlug: string, productId: string) => void;
  removeProduct: (tenantSlug: string, productId: string) => void;
  clearCart: (tenantSlug: string) => void;
  clearAllCarts: () => void;
  getCardByTenant: (tenantSlug: string) => string[];
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      tenantCards: {},
      addProduct: (tenantSlug, productId) =>
        set((state) => ({
          tenantCards: {
            ...state.tenantCards,
            [tenantSlug]: {
              productsId: [
                ...(state.tenantCards[tenantSlug]?.productsId || []),
                productId,
              ],
            },
          },
        })),
      removeProduct: (tenantSlug, productId) =>
        set((state) => ({
          tenantCards: {
            ...state.tenantCards,
            [tenantSlug]: {
							productsId: state.tenantCards[tenantSlug]?.productsId.filter(
								(id) => id !== productId
							) || [],
            },
          },
        })),
      clearCart: (tenantSlug) =>
        set((state) => ({
          tenantCards: {
            ...state.tenantCards,
            [tenantSlug]: {
              productsId: []
            },
          },
        })),
      clearAllCarts: () =>
        set({
          tenantCards: {},
        }),
      getCardByTenant: (tenantSlug) =>
        get().tenantCards[tenantSlug]?.productsId || [],
    }),
    {
      name: "funroad-cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
