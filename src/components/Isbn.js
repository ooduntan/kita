import React from 'react';
import { Header } from 'semantic-ui-react';

const Isbn = ({
  match: {
    params: { id }
  }
}) => (
  <div>
    <Header as="h1">ISBN: {id} </Header>
    <p>Please follow the complete instructions from this Kata.</p>
  </div>
);

export default Isbn;
