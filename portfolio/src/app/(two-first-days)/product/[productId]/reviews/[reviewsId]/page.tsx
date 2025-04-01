import { notFound } from "next/navigation";

export default function Reviews({
  params,
}: {
  params: {
    productId: string;
    reviewsId: string;
  };
}) {
  if (parseInt(params.reviewsId) < 100) {
    notFound;
  }
  return (
    <>
      <h1>
        Product id is {params.productId} and reviews id is {params.reviewsId}
      </h1>
    </>
  );
}
