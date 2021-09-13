import React, { useState, useEffect } from 'react';
import {
  Image,
  Dimmer,
  Button,
  Header,
  Segment,
  Grid,
  Container,
  Transition,
  Icon,
  Label,
} from 'semantic-ui-react';

import './projects.css';

import WebPlaceholder from '../../Utils/WebPlaceholder';
import BurgerGif from '../../Styles/BurgerProjectGif.gif';

function WProject0(props) {
  const [active, setActive] = useState(false);
  const [unmount, setUnmount] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleHide = () => {
    setActive(false);
    props.dHandleProjectVisible(null);
  };

  const handleShow = () => {
    setActive(true);
    props.dHandleProjectVisible('Project0');
  };

  const content = (
    <div>
      <Header as="h2" inverted>
        Burger Builder
      </Header>

      <Button
        onClick={() =>
          window.open('https://react-my-burger-7d0c9.web.app/', '_blank')
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
    <Segment
      as={Transition}
      visible={!unmount}
      duration={1500}
      className="project1Container"
      style={{ margin: '0 0' }}
    >
      {loading ? (
        <WebPlaceholder />
      ) : (
        <Dimmer.Dimmable
          blurring
          dimmed={
            props.dProjectVisible !== null &&
            props.dProjectVisible !== 'Project0'
          }
        >
          <Transition transitionOnMount={true} duration={2000}>
            <Grid stackable container columns={2}>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Label basic ribbon>
                    03. Web Projects
                    <Icon name="globe" style={{padding:'0 0 0 1vw'}}/>
                  </Label>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column width={6} verticalAlign="middle">
                  <Dimmer.Dimmable
                    as={Image}
                    dimmed={active}
                    dimmer={{ active, content }}
                    onMouseEnter={() => handleShow()}
                    onMouseLeave={() => handleHide()}
                    src={BurgerGif}
                    style={{ border: '1px grey solid', margin: 'auto' }}
                  />
                </Grid.Column>

                <Grid.Column width={7} verticalAlign="bottom" stretched>
                  <Container>
                    <p className="Project0GreyText">Burger Builder App</p>
                    <p>
                      A single page web application that allows the user to
                      build a custom burger, add it to a shopping cart, and pay
                      for it.
                    </p>
                    <ul
                      className="burgerLanguages"
                      style={{
                        margin: '0',
                        display: 'flex',
                        width: '100%',
                      }}
                    >
                      <li
                        className="subBurger"
                        style={{
                          display: 'block',
                          justifyContent: 'space-around',
                        }}
                      >
                        <ul style={{ justifyContent: 'space-around' }}>
                          <li>JavaScript</li>
                          <li>HTML5</li>
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
                          <li>Redux</li>
                          <li>CSS3</li>
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
                          <li>Modern React</li>
                          <li>Hooks</li>
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
                          <li>Firebase</li>
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
              </Grid.Row>
            </Grid>
          </Transition>
        </Dimmer.Dimmable>
      )}
    </Segment>
  );
}

export default WProject0;
