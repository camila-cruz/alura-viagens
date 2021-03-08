import React from 'react';
import styled from 'styled-components';
import { Button } from '../../commons/Button';
import { Header } from '../../commons/Header';
import { Label } from '../../forms/Label';
import { RadioInput } from '../../forms/RadioInput';
import RadioGroup from '../../forms/RadioGroup';
import TextField from '../../forms/TextField';
import { Grid } from '../../foundation/layout/Grid';

const FormWrapper = styled.form`
  
`;

export default function Form() {
  return (
    <FormWrapper>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col>
            <Header tag="h2" variant="subheader">Quando será a viagem?</Header>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 4 }}>
            <Label htmlFor="dataSaida">
              Data de saída
            </Label>
            <TextField id="dataSaida" />
          </Grid.Col>

          <Grid.Col value={{ xs: 12, md: 4 }}>
            <Label htmlFor="dataRetorno">Data de retorno</Label>
            <TextField id="dataRetorno" />
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <Label htmlFor="localOrigem">Local de origem</Label>
            <TextField id="localOrigem" />
          </Grid.Col>

          <Grid.Col value={{ xs: 12, md: 6 }}>
            <Label htmlFor="localChegada">Local de chegada</Label>
            <TextField id="localChegada" />
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col>
            <Header tag="h2" variant="subheader">Como será o pagamento?</Header>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col>
            <RadioGroup>
              <RadioInput
                image="/images/money.png"
                alt="Uma nota de dinheiro dentro de um envelope"
                name="pagamento"
                id="transfer"
              >
                Transferência
              </RadioInput>
              <RadioInput
                image="/images/card.png"
                alt="A parte de trás de um cartão e a sombra dele"
                name="pagamento"
                id="card"
              >
                Cartão
              </RadioInput>
              <RadioInput
                image="/images/paypal.png"
                alt="Duas letras P azuis sobrepostas"
                name="pagamento"
                id="paypal"
              >
                Paypal
              </RadioInput>
            </RadioGroup>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col>
            <Header tag="h2" variant="subheader">Quem vai viajar?</Header>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={12}>
            <Label htmlFor="nome">
              Nome
            </Label>
            <TextField id="nome" />
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={12}>
            <Label htmlFor="sobrenome">
              Sobrenome
            </Label>
            <TextField id="sobrenome" />
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <Label htmlFor="pais">País de residência</Label>
            <TextField id="pais" />
          </Grid.Col>

          <Grid.Col value={{ xs: 12, md: 6 }}>
            <Label htmlFor="dataNascimento">Data de nascimento</Label>
            <TextField id="dataNascimento" />
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={12}>
            <Label htmlFor="cpf">
              CPF
            </Label>
            <TextField id="cpf" />
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={12}>
            <Label htmlFor="email">
              E-mail
            </Label>
            <TextField id="email" />
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={12}>
            <Label htmlFor="telefone">
              Telefone
            </Label>
            <TextField id="telefone" />
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 3 }}>
            <Button>Comprar</Button>
          </Grid.Col>
        </Grid.Row>

      </Grid.Container>
    </FormWrapper>
  );
}
