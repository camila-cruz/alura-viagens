import React from 'react';
import { Header } from '../src/components/commons/Header';
// import styled from 'styled-components';
import Form from '../src/components/patterns/Form';

export default function Home() {
  return (
    <>
      <Header>Alura Viagens</Header>
      <Form />
      {/* <Label>Data de saída</Label>
      <TextField id="test" />
      <Button>Comprar</Button> */}
    </>
  );
}
