import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import { MainHeader, Footer } from '../components';

const Layout = ({ children }) => (
  <>
    <MainHeader />
    <Container style={{ marginTop: '5em' }}>
      <Header as="h1">React Kata</Header>
      <Segment vertical>{children}</Segment>
    </Container>
    <Footer />
  </>
);

export default Layout;
