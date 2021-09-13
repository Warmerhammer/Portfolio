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

import Groovy from '../../Styles/GroovyWalkthrough.gif';

function Projects(props) {
  const [active, setActive] = useState(false);

  const handleHide = () => {
    setActive(false);
    // props.dHandleProjectVisible(null);
  };

  const handleShow = () => {
    setActive(true);

    // props.dHandleProjectVisible('Project2');
  };

  const content = (
    <div>
      <Header as="h2" inverted>
        Groovy
      </Header>

      <Button
        onClick={() =>
          window.open(
            'https://github.com/Warmerhammer/Groovy',
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
            src={Groovy}
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
            header="Groovy"
            content="Groovy is an application built using test-driven development and MVVM architecture. Users can explore mock playlists differentiated by genre."
          />
        </Container>
      </Grid.Row>
    </Grid>
  );
}

export default Projects;
