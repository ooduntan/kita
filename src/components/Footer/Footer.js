import React from 'react';
import { Container, Header, Segment, List } from 'semantic-ui-react';

export const Footer = () => (
  <Segment inverted vertical>
    <Container>
      <Header as="h2" inverted>
        Summary of Instructions
      </Header>
      <List as="ol" inverted>
        <List.Item as="li">
          Your software should read all data from the given CSV files in a
          meaningful structure.
        </List.Item>
        <List.Item as="li">
          Print out all books and magazines with all their details (with a
          meaningful output format).
        </List.Item>
        <List.Item as="li">Find a book or magazine by its `isbn`.</List.Item>
        <List.Item as="li">
          Find all books and magazines by their `authors`’ email..
        </List.Item>
        <List.Item as="li">
          Print out all books and magazines with all their details sorted by
          `title`. This sort should be done for books and magazines together.
        </List.Item>
      </List>
      <p>
        Please read full instructions on the
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/echocat/react-kata-1/blob/master/README.md"
        >
          {' '}
          README{' '}
        </a>{' '}
        file
      </p>
    </Container>
  </Segment>
);
