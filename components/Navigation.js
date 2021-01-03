import React from "react";
import Link from "next/link";

function Navigation({ prevClueId, nextClueId }) {
  return (
    <nav>
      <Link href={`/clues/${prevClueId}`}>Previous clue</Link>
      <Link href={`/clues/${nextClueId}`}>Next clue</Link>
    </nav>
  );
}

export default Navigation;
