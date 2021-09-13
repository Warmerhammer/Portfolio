import React, { useState, useEffect } from 'react';
import {
  Image,
  Dimmer,
  Button,
  Header,
  Segment,
  Grid,
  Container,
  Icon,
  Transition,
} from 'semantic-ui-react';

import './projects.css';

import MonsterKiller from '../../Styles/MonsterKiller.gif';
import WebPlaceholder from '../../Utils/WebPlaceholder';

function MonsterKillerProject(props) {
  const [active, setActive] = useState(false);
  const [unmount, setUnmount] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleHide = () => {
    setActive(false);
    props.dHandleProjectVisible(null);
  };

  const handleShow = () => {
    setActive(true);
    props.dHandleProjectVisible('Project2');
  };

  const viewAndroidProjects = () => {
    props.dHandleProjectVisible('Android');
  };

  const content = (
    <div>
      <Header as="h2" inverted>
        Monster Killer
      </Header>

      <Button
        onClick={() =>
          window.open(
            'https://warmerhammer.github.io/monsterKillerStartingProject/',
            '_blank'
          )
        }
      >
        View
      </Button>
    </div>
  );

  useEffect(() => {
    if (props.dProjectVisible === 'Android') {
      setUnmount(true);
    } else if (props.dProjectVisible !== 'Android') {
      setUnmount(false);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [props.dProjectVisible]);

  return (
    <Segment className="project3Container">
      <Transition visible={!unmount} mountOnShow={true} duration={1500}>
        <Dimmer.Dimmable
          blurring
          dimmed={
            props.dProjectVisible !== null &&
            props.dProjectVisible !== 'Project2'
          }
        >
          {loading ? (
            <WebPlaceholder />
          ) : (
            <Transition transitionOnMount duration={2000}>
              <Grid stackable container columns={2}>
                <Grid.Column width={6} verticalAlign="middle">
                  <Dimmer.Dimmable
                    onMouseEnter={() => handleShow()}
                    onMouseLeave={() => handleHide()}
                    dimmed={active}
                    dimmer={{ active, content }}
                    as={Image}
                    src={MonsterKiller}
                    style={{
                      border: '1px solid grey',
                    }}
                  />
                </Grid.Column>
                <Grid.Column width={7} verticalAlign="bottom">
                  <Container>
                    <p className="Project3GreyText">Monster Killer Game</p>
                    <p>
                      A game built mainly using JavaScript where the user
                      battles an imaginary monster.
                    </p>
                    <ul className="burgerLanguages">
                      <li
                        className="subBurger"
                        style={{ display: 'inline-block' }}
                      >
                        <ul>
                          <li>JavaScript</li>
                          <li>HTML5</li>
                          <li style={{ listStyle: 'none' }}>
                            <br />
                          </li>
                          <li style={{ listStyle: 'none' }}>
                            <br />
                          </li>
                          <li style={{ listStyle: 'none' }}>
                            <br />
                          </li>
                        </ul>
                      </li>

                      <li
                        className="subBurger"
                        style={{ display: 'inline-block' }}
                      >
                        <ul>
                          <li>CSS3</li>
                          <li>Redux</li>
                          <li style={{ listStyle: 'none' }}>
                            <br />
                          </li>
                          <li style={{ listStyle: 'none' }}>
                            <br />
                          </li>
                          <li style={{ listStyle: 'none' }}>
                            <br />
                          </li>
                        </ul>
                      </li>

                      <li
                        className="subBurger"
                        style={{ display: 'inline-block' }}
                      >
                        <ul>
                          <li>Hooks</li>
                          <li>Modern React</li>
                          <li style={{ listStyle: 'none' }}>
                            <br />
                          </li>
                          <li style={{ listStyle: 'none' }}>
                            <br />
                          </li>
                          <li style={{ listStyle: 'none' }}>
                            <br />
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </Container>
                </Grid.Column>
              </Grid>
            </Transition>
          )}
        </Dimmer.Dimmable>
      </Transition>

      <Grid verticalAlign="middle" container columns={2}>
        <Grid.Row columns={2}>
          <Button
            onClick={() => viewAndroidProjects()}
            style={{ backgroundColor: 'white' }}
          >
            <div style={{ color: '#0645AD' }}>View Android Projects</div>
          </Button>
          <Grid.Column style={{ padding: '0' }} floated="left" textAlign="left">
            <Icon name="android" color="green" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default MonsterKillerProject;
