export default function ProductInfo({
  params,
}: {
  params: { productId: string };
}) {
  return <div>Product {params.productId}</div>;
}
