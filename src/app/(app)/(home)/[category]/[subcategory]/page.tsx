interface Props {
  params: Promise<{
    category: string;
    subcategory: string
  }>
}

export const Page = async ({ params }: Props) => {
  const { subcategory, category } = await params;

  return ( 
    <div>
      Category: {category} <br />
      Sub Category: {subcategory}
    </div>
  )
}

export default Page