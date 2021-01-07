import React from "react";
import Link from "next/link";
import { Button, chakra } from "@chakra-ui/react";

function Navigation({ prevClueId, nextClueId }) {
  return (
    <chakra.nav
      aria-labelledby="clue-navigation"
      display="flex"
      justifyContent="center"
    >
      <chakra.div padding="10px">
        <Link href={`/clues/${prevClueId}`}>
          <Button color="#050b9d">Previous clue</Button>
        </Link>
      </chakra.div>
      <chakra.div padding="10px">
        <Link href={`/clues/${nextClueId}`}>
          <Button color="#050b9d">Next clue</Button>
        </Link>
      </chakra.div>
    </chakra.nav>
  );
}

export default Navigation;
