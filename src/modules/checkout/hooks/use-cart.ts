import {useCartStore } from "../store/use-card-store"

export const useCart = (tenantSlug: string) => { 
	const {
		getCardByTenant,
		addProduct,
		removeProduct,
		clearCart,
		clearAllCarts,
	} = useCartStore()

	const productsId = getCardByTenant(tenantSlug)

	const toggleProduct = (productId: string) => { 
		if (productsId.includes(productId)) { 
			removeProduct(tenantSlug, productId)
		} else { 
			addProduct(tenantSlug, productId)
		}
	}

	const isProductInCart = (productId: string) => { 
		return productsId.includes(productId)
	}

	const clearTenantCart = () => {
		clearCart(tenantSlug)
	}

	return {
		productsId,
		addProduct: (productId: string) => addProduct(tenantSlug, productId),
		removeProduct: (productId: string) => removeProduct(tenantSlug, productId),
		clearCart: clearTenantCart,
		clearAllCarts,
		toggleProduct,
		isProductInCart,
		totalItems: productsId.length,
	};
}