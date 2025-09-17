import { SearchParams } from "nuqs/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient, trpc } from "@/trpc/server";

import { loadProductFilters } from "@/modules/products/searchParams";
import { ProductListView } from "@/modules/products/ui/components/views/product-list-view";

interface Props {
	params: Promise<{
		subcategory: string,
	}>;
  searchParams: Promise<SearchParams>;
}

const Page = async ({ params, searchParams }: Props) => {
	const { subcategory } = await params;
	const filters = await loadProductFilters(searchParams);

	const queryClient = getQueryClient();
	// Use await instead of void if you get an error
	void queryClient.prefetchQuery(
    trpc.products.getMany.queryOptions({
      category: subcategory,
      ...filters,
    })
  );

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ProductListView category={subcategory} />
		</HydrationBoundary>
	);
};

export default Page;
