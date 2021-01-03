import React from "react";
import { Flex, Heading, Link, Text } from "@chakra-ui/react";

function FrontPage({ firstClueId }) {
  return (
    <Flex
      height="100%"
      width="100%"
      flexDir="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Heading>Practice JEOPARDY!</Heading>
      <p>
        Flash card-style questions and answers from{" "}
        <Text as="i">Jeopardy!</Text> questions throughout the ages
      </p>
      <Link href={`/clues/${firstClueId}`}>Start</Link>
    </Flex>
  );
}

export default FrontPage;
