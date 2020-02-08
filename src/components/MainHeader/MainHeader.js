import React from 'react';
import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react';
import { Link } from "react-router-dom";


export const MainHeader = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item as={Link} to="/" header>
        React Kata
      </Menu.Item>
      <Menu.Item as={Link} to="/">
        Home
      </Menu.Item>
      <Dropdown item simple text="Options">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/read">
            Output from data read
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/all">
            All Books and Magazines
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Search</Dropdown.Header>
          <Dropdown.Item as={Link} to="/isbn/">
            Find by ISBN
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/email/">
            Find by author`s email
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Sorted Content</Dropdown.Header>
          <Dropdown.Item as={Link} to="/sorted/">
            Sorted by Title
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
);
