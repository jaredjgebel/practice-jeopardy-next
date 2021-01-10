import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, chakra, Flex, Text } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

import Navigation from "../components/Navigation";
import Header from "../components/Header";

function Clue({ clue, prevClueId, nextClueId }) {
  const { answer, question, value, airdate, category } = clue;

  const router = useRouter();

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
      {<Header value={value} airdate={airdate} category={category} />}
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
            marginBottom="10px"
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
