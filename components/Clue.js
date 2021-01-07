import { Button, chakra, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function Clue({ clue, navigation }) {
  const { answer, question, value, airdate, category } = clue;

  const [answerVisible, setAnswerVisible] = useState(false);

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
      width="100%"
      padding="10px"
    >
      <Grid gridTemplateColumns="1fr 1fr 1fr" gridGap="30px">
        <nav className="menu-nav" aria-labelledby="menu-navigation">
          <Button width="75px" color="dukeBlue">
            Back
          </Button>
        </nav>

        <Heading
          as="h1"
          textAlign="center"
          textTransform="uppercase"
          size="xl"
          fontWeight="normal"
        >
          {category}
        </Heading>

        <chakra.section
          display="flex"
          flexDirection="column"
          alignItems="right"
          textAlign="right"
        >
          <Heading as="h2" size="md" fontWeight="normal">
            {value}
          </Heading>
          <Text size="md">
            {`Aired`}{" "}
            <time>{`${new Date(Date.parse(airdate))}`.slice(0, -42)}</time>
          </Text>
        </chakra.section>
      </Grid>

      <chakra.section display="grid" gridTemplateRows="1fr 1fr" height="100%">
        <Flex alignItems="flex-end" justifyContent="center" padding="0px 50px">
          <Text textAlign="center" textTransform="uppercase" fontSize="4xl">
            {answerVisible ? answer : question}
          </Text>
        </Flex>
        <Flex alignItems="flex-end" justifyContent="center">
          <Button
            width="75px"
            color="dukeBlue"
            onClick={() => setAnswerVisible(!answerVisible)}
          >
            Reveal
          </Button>
        </Flex>
      </chakra.section>

      {navigation}
    </Flex>
  );
}

export default Clue;
