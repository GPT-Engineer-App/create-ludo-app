import { useState } from "react";
import { Container, VStack, HStack, Box, Button, Text, IconButton } from "@chakra-ui/react";
import { FaDice } from "react-icons/fa";

const Index = () => {
  const [dice, setDice] = useState(1);
  const [turn, setTurn] = useState(0);
  const [positions, setPositions] = useState([0, 0, 0, 0]);

  const rollDice = () => {
    const newDice = Math.floor(Math.random() * 6) + 1;
    setDice(newDice);
    movePlayer(turn, newDice);
  };

  const movePlayer = (player, steps) => {
    setPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[player] = Math.min(newPositions[player] + steps, 100); // Assuming 100 is the end position
      return newPositions;
    });
    setTurn((prevTurn) => (prevTurn + 1) % 4);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Ludo Game</Text>
        <HStack spacing={4}>
          {positions.map((pos, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="md" width="50px" textAlign="center">
              <Text>Player {index + 1}</Text>
              <Text>{pos}</Text>
            </Box>
          ))}
        </HStack>
        <IconButton aria-label="Roll Dice" icon={<FaDice />} size="lg" onClick={rollDice} />
        <Text>Dice: {dice}</Text>
        <Text>Turn: Player {turn + 1}</Text>
      </VStack>
    </Container>
  );
};

export default Index;
