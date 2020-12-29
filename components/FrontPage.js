import React from "react";
import { Flex, Button, Heading, Link, Text } from "@chakra-ui/react";

function FrontPage() {
  return (
    <div>
      <Flex
        height="100vh"
        bgGradient="linear(to-b,#050b9d 25.52%, #040639 100%)"
        flexDir="column"
        alignItems="center"
        justifyContent="space-around"
      >
        <Heading>Practice JEOPARDY!</Heading>
        <p>
          Flash card-style questions and answers from{" "}
          <Text as="i">Jeopardy!</Text> questions throughout the ages
        </p>
        <Link href="/clues">Start</Link>
      </Flex>
    </div>
  );
}

export default FrontPage;
