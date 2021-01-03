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
      randomClueId: randomClueId.toString(),
    },
  };
}

export default function Home({ randomClueId }) {
  return <FrontPage firstClueId={randomClueId} />;
}
