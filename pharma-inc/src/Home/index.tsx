import styled from "styled-components/native";

import React from "react";

const Container = styled.View`
  background-color: #003461;
  flex: 1px;
  align-items: center;
  justify-content: center;
`;
const StyledTitulo = styled.Text`
  color: ${({theme})=>theme.fonts.regular};
`;

export function Titulo() {

    return (
        <Container>
            <StyledTitulo>ParmaINC</StyledTitulo>
        </Container>
    )
}