import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient, trpc } from "@/trpc/server";

import { ProductView } from "@/modules/products/ui/components/views/product-view";
import { Suspense } from "react";

interface Props {
  params: Promise<{ productId: string, slug: string }>;
}

const Page = async ({ params }: Props) => {
  const { productId, slug } = await params;

    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(
      trpc.tenant.getOne.queryOptions({
        slug, 
      })
    )
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>loading...</p>}>
        <ProductView productId={productId} tenantSlug={slug} />
      </Suspense>
    </HydrationBoundary>
  )
};

export default Page;
