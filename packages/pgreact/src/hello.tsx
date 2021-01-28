import React from 'react';
import styled from 'styled-components';

const Hello: React.FC = () => {
  return <Title>Hello World</Title>;
};

const Title = styled.h1`
  color: blue;
`;

export default Hello;
