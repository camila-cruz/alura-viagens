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
      paddingLeft={{ xs: '28px', md: '16px' }}
      paddingRight={{ xs: '28px', md: '16px' }}
      paddingTop="16px"
      paddingBottom={{ xs: '32px', md: '54px' }}
    >
      <Header
        width="100%"
        maxWidth="768px"
        margin="auto"
        paddingLeft="0px"
      >
        Alura Viagens
      </Header>
      <Form />
    </Box>
  );
}
