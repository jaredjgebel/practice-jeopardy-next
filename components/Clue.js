import React, { useState } from "react";
import Link from "next/link";
import { Button, chakra, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { ArrowBackIcon, RepeatIcon } from "@chakra-ui/icons";

function MediumMediaHeader({ category, airdate, value }) {
  return (
    <Grid gridTemplateColumns="1fr 1fr 1fr" gridGap="30px" height="50px">
      <nav className="menu-nav" aria-labelledby="menu-navigation">
        <Link href="/">
          <Button width="75px" color="dukeBlue" leftIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </Link>
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
          ${value}
        </Heading>
        <Text size="md">
          {`Aired`}{" "}
          <time>{`${new Date(Date.parse(airdate))}`.slice(0, -42)}</time>
        </Text>
      </chakra.section>
    </Grid>
  );
}

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
      <MediumMediaHeader value={value} airdate={airdate} category={category} />

      <chakra.section display="grid" gridTemplateRows="1fr 1fr" height="100%">
        <Flex alignItems="flex-end" justifyContent="center" padding="0px 50px">
          <Text textAlign="center" textTransform="uppercase" fontSize="4xl">
            {answerVisible ? answer : question}
          </Text>
        </Flex>
        <Flex alignItems="flex-end" justifyContent="center">
          <Button
            width="100px"
            color="dukeBlue"
            leftIcon={<RepeatIcon />}
            onClick={() => setAnswerVisible(!answerVisible)}
          >
            {answerVisible ? "Clue" : "Reveal"}
          </Button>
        </Flex>
      </chakra.section>

      {navigation}
    </Flex>
  );
}

export default Clue;
