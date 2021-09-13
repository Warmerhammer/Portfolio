import React, { useState } from 'react';
import {
  Image,
  Dimmer,
  Button,
  Header,
  Grid,
  Message,
  Transition,
} from 'semantic-ui-react';

import './projects.css';

import SevenMinuteWorkout from '../../Styles/7MinuteWorkoutWalkthrough.gif';

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
        7MinuteWorkout
      </Header>

      <Button
        onClick={() =>
          window.open(
            'https://github.com/Warmerhammer/7MinuteWorkout',
            '_blank'
          )
        }
      >
        View
      </Button>
    </div>
  );

  return (
    <Grid container columns={2} stackable>
      <Transition transitionOnMount={true} duration={1500}>
        <Grid.Row columns={1}>
          <Grid.Column textAlign="center">
            <Dimmer.Dimmable
              onMouseEnter={() => handleShow()}
              onMouseLeave={() => handleHide()}
              dimmed={active}
              dimmer={{ active, content }}
              as={Image}
              src={SevenMinuteWorkout}
              style={{
                margin: 'auto',
                border: '1px solid grey',
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Transition>
      <Transition transitionOnMount={true} duration={1500}>
        <Grid.Row
          style={{
            padding: '1vh 0 0 0',
          }}
          columns={1}
        >
          <Grid.Column textAlign="center">
            <Message
              floating={!active}
              style={{ backgroundColor: 'white', border: 'none' }}
              header="7MinuteWorkout"
              content="7MinuteWorkout is an Android application that uses text-to-speech
              to guide the user through a series of workout routines"
            />
          </Grid.Column>
        </Grid.Row>
      </Transition>
    </Grid>
  );
}

export default Projects;
