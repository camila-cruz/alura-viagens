import React from 'react';
import { Header } from '../src/components/commons/Header';
import { Box } from '../src/components/foundation/layout/Box';
// import styled from 'styled-components';
import Form from '../src/components/patterns/Form';

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      margin="auto"
      width="93%"
      maxWidth="900px"
    >
      <Header>Alura Viagens</Header>
      <Form />
    </Box>
  );
}
