import Head from "next/head";

const tempClueIds = [1, 2, 3, 4, 5];
const tempClues = [
  {
    id: 1,
    clue: "yadda yadda yadda yadda",
  },
  {
    id: 2,
    clue: "yadda yadda yadda yadda2",
  },
  {
    id: 3,
    clue: "yadda yadda yadda yadda3",
  },
  {
    id: 4,
    clue: "yadda yadda yadda yadda4",
  },
  {
    id: 5,
    clue: "yadda yadda yadda yadda5",
  },
];

export function getStaticPaths() {
  const paths = tempClueIds.map((id) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const clueData = tempClues.find((clue) => clue.id.toString() === params.id);

  return {
    props: {
      clue: clueData,
    },
  };
}

export default function Clue({ clue }) {
  return (
    <>
      <Head>
        <title>{clue.clue}</title>
      </Head>
      <section>
        <p>{clue.clue}</p>
      </section>
    </>
  );
}
