import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Button,
  chakra,
  Flex,
  Grid,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowBackIcon, RepeatIcon } from "@chakra-ui/icons";

import Navigation from "../components/Navigation";

function SmallMediaHeader({ category, airdate, value }) {
  return (
    <chakra.div>
      <Flex justifyContent="space-between">
        <nav className="menu-nav" aria-labelledby="menu-navigation">
          <Link href="/">
            <Button width="75px" color="dukeBlue" leftIcon={<ArrowBackIcon />}>
              Back
            </Button>
          </Link>
        </nav>

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
      </Flex>

      <Flex justifyContent="center">
        <Heading
          as="h1"
          textAlign="center"
          textTransform="uppercase"
          size="xl"
          fontWeight="normal"
          padding={4}
          paddingBottom={16}
        >
          {category}
        </Heading>
      </Flex>
    </chakra.div>
  );
}

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

function Clue({ clue, prevClueId, nextClueId }) {
  const { answer, question, value, airdate, category } = clue;

  const router = useRouter();

  const CurrentHeader = useBreakpointValue({
    base: (
      <SmallMediaHeader value={value} airdate={airdate} category={category} />
    ),
    md: (
      <MediumMediaHeader value={value} airdate={airdate} category={category} />
    ),
  });
  const [answerVisible, setAnswerVisible] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => setAnswerVisible(false));
    return () => {
      router.events.off("routeChangeComplete");
    };
  }, [setAnswerVisible]);

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
      width="100%"
      padding="10px"
    >
      {CurrentHeader}
      <chakra.section
        display="grid"
        gridTemplateRows="1fr 1fr"
        height="100%"
        overflowY="auto"
      >
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

      <Navigation prevClueId={prevClueId} nextClueId={nextClueId} />
    </Flex>
  );
}

export default Clue;
