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
      textAlign="center"
    >
      <Heading as="h1" size="4xl">
        Practice JEOPARDY!
      </Heading>
      <Text as="p" paddingX={12}>
        Flash card-style questions and answers from{" "}
        <Text as="i">Jeopardy!</Text> questions throughout the ages
      </Text>
      {children}
    </Flex>
  );
}

export default FrontPage;
