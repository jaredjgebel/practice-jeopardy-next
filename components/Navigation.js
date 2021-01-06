import React from "react";
import Link from "next/link";
import { chakra } from "@chakra-ui/react";

function Navigation({ prevClueId, nextClueId }) {
  return (
    <chakra.nav display="flex" justifyContent="space-between">
      <Link href={`/clues/${prevClueId}`}>Previous clue</Link>
      <Link href={`/clues/${nextClueId}`}>Next clue</Link>
    </chakra.nav>
  );
}

export default Navigation;
