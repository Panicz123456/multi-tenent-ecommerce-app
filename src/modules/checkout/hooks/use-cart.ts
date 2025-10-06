import { useCallback } from "react";
import { useShallow } from "zustand/react/shallow";

import { useCartStore } from "../store/use-card-store";

export const useCart = (tenantSlug: string) => {
  // Repair all the errors with useCart
  const addProduct = useCartStore((state) => state.addProduct);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const clearCart = useCartStore((state) => state.clearCart);
  const clearAllCarts = useCartStore((state) => state.clearAllCarts);

  const productsId = useCartStore(
    useShallow((state) => state.tenantCards[tenantSlug]?.productsId || [])
  );

  const toggleProduct = useCallback(
    (productId: string) => {
      if (productsId.includes(productId)) {
        removeProduct(tenantSlug, productId);
      } else {
        addProduct(tenantSlug, productId);
      }
    },
    [addProduct, removeProduct, productsId, tenantSlug]
  );

  const isProductInCart = useCallback((productId: string) => {
    return productsId.includes(productId);
  }, [productsId]);

  const clearTenantCart = useCallback(() => {
    clearCart(tenantSlug);
	}, [clearCart, tenantSlug]);
	
	const handleAddProduct = useCallback((productId: string) => {
		addProduct(tenantSlug, productId)
	}, [addProduct, tenantSlug])
	
	const handleRemoveProduct = useCallback((productId: string) => {
		removeProduct(tenantSlug, productId)
	}, [removeProduct, tenantSlug])

  return {
    productsId,
    addProduct: handleAddProduct,
    removeProduct: handleRemoveProduct,
    clearCart: clearTenantCart,
    clearAllCarts,
    toggleProduct,
    isProductInCart,
    totalItems: productsId.length,
  };
};
