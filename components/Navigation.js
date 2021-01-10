import React from "react";
import Link from "next/link";
import { Button, chakra } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function Navigation({ prevClueId, nextClueId, onNavClick }) {
  return (
    <chakra.nav
      aria-labelledby="clue-navigation"
      display="flex"
      justifyContent="center"
    >
      <chakra.div padding="10px">
        <Link href={`/clues/${prevClueId}`}>
          <Button width="100px" leftIcon={<ChevronLeftIcon />} color="dukeBlue">
            Previous
          </Button>
        </Link>
      </chakra.div>
      <chakra.div padding="10px">
        <Link href={`/clues/${nextClueId}`}>
          <Button
            width="100px"
            color="dukeBlue"
            rightIcon={<ChevronRightIcon />}
          >
            Next
          </Button>
        </Link>
      </chakra.div>
    </chakra.nav>
  );
}

export default Navigation;
