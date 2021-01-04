import Head from "next/head";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

import FrontPage from "../components/FrontPage";
import { parseClueIds } from "../data/getClues";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
export async function getStaticProps() {
  const clueIds = parseClueIds();
  const randomClueId = clueIds[getRandomInt(clueIds.length)];

  return {
    props: {
      firstClueId: randomClueId.toString(),
    },
  };
}

export default function Home({ firstClueId }) {
  return (
    <>
      <Head>
        <title>Practice Jeopardy!</title>
      </Head>
      <FrontPage>
        <Link href={`/clues/${firstClueId}`}>Start</Link>
      </FrontPage>
    </>
  );
}
