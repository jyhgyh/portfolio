export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug.length === 2) {
    return (
      <>
        <p>Docs {params.slug[0]} and {params.slug[1]}</p>
      </>
    );
  } if (params.slug.length == 1) {
    return (
        <>
            <p>Docs {params.slug[0]}</p>
        </>
    )
  } else {
    return(
        <>
            Docs Main {params.slug}
        </>
    )
  }
}
