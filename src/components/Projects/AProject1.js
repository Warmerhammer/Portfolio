import React, { useState } from 'react';
import {
  Image,
  Dimmer,
  Button,
  Header,
  Grid,
  Container,
  Message,
} from 'semantic-ui-react';

import './projects.css';

import SimpleTodo from '../../Styles/SimpleTodoWalkthrough.gif';

function Projects(props) {
  const [active, setActive] = useState(false);

  const handleHide = () => {
    setActive(false);
  };

  const handleShow = () => {
    setActive(true);
  };

  const content = (
    <div>
      <Header as="h2" inverted>
        Simple Todo
      </Header>

      <Button
        onClick={() =>
          window.open(
            'github.com/Warmerhammer/simpletodo/tree/master',
            '_blank'
          )
        }
      >
        View
      </Button>
    </div>
  );

  return (
    <Grid as={Container} columns={2} stackable>
      <Grid.Row columns={1}>
        <Grid.Column textAlign="center">
          <Dimmer.Dimmable
            onMouseEnter={() => handleShow()}
            onMouseLeave={() => handleHide()}
            dimmed={active}
            dimmer={{ active, content }}
            as={Image}
            src={SimpleTodo}
            className="project1Dimmable"
            size="large"
            style={{
              margin: 'auto',
              border: '1px solid grey',
            }}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row
        style={{
          padding: '1vh 0 0 0',
        }}
      >
        <Container fluid textAlign="center">
          <Message
            floating={!active}
            style={{ backgroundColor: 'white', border: 'none' }}
            header="Simple Todo"
            content="Simple Todo is an Android app that allows building a to-do list and basic to-do items management functionality including adding new items, editing, and deleting an existing item."
          />
        </Container>
      </Grid.Row>
    </Grid>
  );
}

export default Projects;
