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
    >
      <Grid gridTemplateColumns="1fr 1fr 1fr">
        <Button width="75px" color="#050b9d">
          Back
        </Button>
        <chakra.section>
          <Text>{value}</Text>
          <Text>{`Aired ${new Date(Date.parse(airdate))}`.slice(0, -42)}</Text>
        </chakra.section>
        <Heading as="h1">{category}</Heading>
      </Grid>

      <chakra.section display="flex" flexDirection="column" alignItems="center">
        <Text>{answerVisible ? answer : question}</Text>
        <Button width="75px" color="#050b9d">
          Reveal
        </Button>
      </chakra.section>

      {navigation}
    </Flex>
  );
}

export default Clue;
