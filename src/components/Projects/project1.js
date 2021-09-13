import React, { useState, useEffect } from 'react';
import {
  Image,
  Dimmer,
  Button,
  Header,
  Segment,
  Grid,
  Transition,
  Container,
} from 'semantic-ui-react';

import WebPlaceholder from '../../Utils/WebPlaceholder';

import './projects.css';

import YouTubeLite from '../../Styles/YouTubeLite.gif';

function Project1(props) {
  const [active, setActive] = useState(false);
  const [unmount, setUnmount] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleHide = () => {
    setActive(false);

    props.dHandleProjectVisible(null);
  };

  const handleShow = () => {
    setActive(true);

    props.dHandleProjectVisible('Project1');
  };

  const content = (
    <div>
      <Header as="h2" inverted>
        YouTube Lite
      </Header>

      <Button
        onClick={() =>
          window.open('https://warmerhammer.github.io/YouTubeLight/', '_blank')
        }
      >
        View
      </Button>
    </div>
  );

  useEffect(() => {
    if (props.dProjectVisible === 'Android') {
      setLoading(false);
      setUnmount(true);
    } else if (props.dProjectVisible !== 'Android' && unmount) {
      setTimeout(() => {
        setLoading(true);
      }, 1500);
      setTimeout(() => {
        setLoading(false);
        setUnmount(false);
      }, 3000)
    }
  }, [props.dProjectVisible, unmount]);

  return (
      <Segment className="project2Container">
        {loading ? (
          <Transition
            duration={1500}
            visible={loading}
            transitionOnMount
            mountOnShow
            unmountOnHide={true}
          >
            <WebPlaceholder />
          </Transition>
        ) : (
          <Dimmer.Dimmable
            blurring
            dimmed={
              props.dProjectVisible !== null &&
              props.dProjectVisible !== 'Project1'
            }
          >
            <Transition visible={!unmount} mountOnShow duration={2000}>
              <Grid stackable container columns={2}>
                <Grid.Column width={6} className="Project2GifGridColumn">
                  <Dimmer.Dimmable
                    src={YouTubeLite}
                    style={{
                      border: '1px solid grey',
                      margin: 'auto',
                    }}
                    onMouseEnter={() => handleShow()}
                    onMouseLeave={() => handleHide()}
                    as={Image}
                    dimmed={active}
                    dimmer={{ active, content }}
                  />
                </Grid.Column>
                <Grid.Column width={7} verticalAlign="middle">
                  <Container style={{ margin: '0' }}>
                    <p className="YouTubeLiteGreyText">YouTube Lite</p>
                    <p>A single page web application that mimics YouTube.</p>
                    <ul
                      className="burgerLanguages"
                      sytle={{ display: 'inline-block' }}
                    >
                      <li
                        className="subBurger"
                        style={{ display: 'inline-block' }}
                      >
                        <ul>
                          <li>JavaScript</li>
                          <li>HTML5</li>
                          <li>CSS3</li>
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
                          <li>Hooks</li>
                          <li>Firebase</li>
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
                          <li>YouTube API</li>
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
          </Dimmer.Dimmable>
        )}
      </Segment>
  );
}

export default Project1;
