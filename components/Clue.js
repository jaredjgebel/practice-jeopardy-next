import { Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function Clue({ clue, navigation }) {
  const { answer, question, value, airdate, category } = clue;
  const [answerVisible, setAnswerVisible] = useState(false);

  return (
    <>
      <Heading>{category}</Heading>

      <section>{answerVisible ? answer : question}</section>

      <section>
        <Text>{value}</Text>
        <Text>{airdate}</Text>
        <Text>{}</Text>
      </section>

      {navigation}
    </>
  );
}

export default Clue;
