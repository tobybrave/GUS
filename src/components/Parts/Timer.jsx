import React, { useState, useEffect } from 'react';
import {
  Box, CircularProgress, CircularProgressLabel, Flex, Text,
} from '@chakra-ui/react';

export function useCountdown() {
  const [progress, decrement] = useState(0);
  const totalSecsInDay = 86399;
  const start = new Date();
  start.setHours(23, 55, 0);
  const now = new Date();
  let remain = ((start - now) / 1000);

  function pad(num) {
    return (`0${parseInt(num, 10)}`).substr(-2);
  }

  if (now > start) { // too late, go to tomorrow
    start.setDate(start.getDate() + 1);
    remain = ((start - now) / 1000);
  }

  useEffect(() => {
    const progressLevel = setInterval(() => {
      decrement((totalSecsInDay - remain) / totalSecsInDay);
    }, 1000);
    return () => clearInterval(progressLevel);
  }, [start]);

  const hh = pad((remain / 60 / 60) % 60);
  const mm = pad((remain / 60) % 60);
  const ss = pad(remain % 60);

  return [progress, hh, mm, ss];
}

export default function Timer() {
  const [progress, hh, mm, ss] = useCountdown();

  return (
    <Box
      borderColor="gray.200"
      // borderWidth="1px"
      rounded="md"
      bg="white"
      p={[1, 8]}
      my="4"
      w="100%"
    >
      <Flex flexDirection="row" width="100%" alignItems="center" justifyContent="center">
        <CircularProgress value={progress * 100} color="green.400" size="300px" thickness="1px">
          <CircularProgressLabel>{`${hh}:${mm}:${ss}`}</CircularProgressLabel>
        </CircularProgress>
      </Flex>
      <Text as="b" casing="uppercase" fontSize="xl" color="gray.500">
        Contact compilation countdown for today
      </Text>
    </Box>
  );
}
