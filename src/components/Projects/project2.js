import React, { useEffect, useState, useCallback } from 'react';
import { Button, Segment, Grid, Icon } from 'semantic-ui-react';

import './projects.css';

import MonsterKillerProject from './WProject2'

function Projects(props) {
  const [android, setAndroid] = useState(true);

  const viewWebProjects = () => {
    props.dHandleProjectVisible(null);
  };

  const dHandleProjectVisible = useCallback(
    value => {
      props.dHandleProjectVisible(value);
    },
    [props]
  );

  useEffect(() => {
    if (props.dProjectVisible === null && android === true) {
      setTimeout(() => {
        setAndroid(false);
      }, 1500);
    } else if (props.dProjectVisible === 'Android') {
      setTimeout(() => {
        setAndroid(true);
      }, 1500);
    }
  }, [
    props.dProjectVisible,
    props.dHandleProjectVisible,
    dHandleProjectVisible,
    android,
  ]);

  return (
    <Segment className="project3Container">
      {android ? (
        <Grid container>
          <Grid.Row verticalAlign='top' centered columns={3}>
            <Grid.Column mobile={1} />
            <Grid.Column verticalAlign='top' computer={5} mobile={10} textAlign="left">
              <Button
                onClick={() => viewWebProjects()}
                style={{ backgroundColor: 'white', color: 'blue', padding:'0 .3vw' }}
              >
                View Web Projects
                <Icon style={{ margin: '0 0 0 1vw' }} name="world" />
              </Button>
            </Grid.Column>
            <Grid.Column mobile={1} />
          </Grid.Row>
        </Grid>
      ) : (
        <MonsterKillerProject
          dProjectVisible={props.dProjectVisible}
          dHandleProjectVisible={value => dHandleProjectVisible(value)}
        />
      )}
    </Segment>
  );
}

export default Projects;
