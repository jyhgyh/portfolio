export default function Reviews({
  params,
}: {
  params: {
    productId: string;
    reviewsId: string;
  };
}) {
  return <>
  <h1>Product id is {params.productId} and reviews id is {params.reviewsId}</h1>
  </>;
}
