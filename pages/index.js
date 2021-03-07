import React from 'react';
import { Header } from '../src/components/commons/Header';
// import styled from 'styled-components';
import { Label } from '../src/components/forms/Label';
import TextField from '../src/components/forms/TextField';

export default function Home() {
  return (
    <>
      <Header>Alura Viagens</Header>
      <Label>Data de saída</Label>
      <TextField />
    </>
  );
}
