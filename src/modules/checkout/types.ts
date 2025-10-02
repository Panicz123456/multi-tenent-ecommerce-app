import Stripe from "stripe";

export type ProductStripeMetadata = {
  stripeAccountId: string;
  id: string;
  name: string;
  price: number;
};

export type CheckoutMetadata = { 
	userId: string
}

export type ExpandedLineItem = Stripe.LineItem & {
  price: Stripe.Price & {
    product: Stripe.Product & {
      metadata: ProductStripeMetadata
    };
  };
};