import React from "react";
import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";

function FrontPage({ children }) {
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
      {children}
    </Flex>
  );
}

export default FrontPage;
