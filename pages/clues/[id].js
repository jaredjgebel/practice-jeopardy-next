import Head from "next/head";
import { Text } from "@chakra-ui/react";
import { parseClueIds, parseClues } from "../../data/getClues";

export async function getStaticPaths() {
  const clueIds = parseClueIds();

  const paths = clueIds.map((id) => {
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
  const clues = parseClues();
  const clueData = clues.find((clue) => clue.id.toString() === params.id);

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
        <title>{clue.category}</title>
      </Head>
      <section>
        <Text>{clue.question}</Text>
      </section>
    </>
  );
}
