import React, { Suspense, useState, useEffect } from 'react';
import {
  Button,
  Segment,
  Grid,
  Container,
  Icon,
  Transition,
  Label,
} from 'semantic-ui-react';

import AndroidPlaceholder from '../../Utils/AndroidPlaceholder';

import './projects.css';

import AProject0 from './AProject0';
import AProject1 from './AProject1';
import AProject2 from './AProject2';

function Projects(props) {
  const [loading, setLoading] = useState(false);
  const [unmount, setUnmount] = useState(false);

  const [nextColor, setNextColor] = useState(null);
  const [nextBasic, setNextBasic] = useState(true);
  const [nextAccess, setNextAccess] = useState(true);

  const [prevColor, setPrevColor] = useState(null);
  const [prevAccess, setPrevAccess] = useState(false);
  const [prevBasic, setPrevBasic] = useState(true);

  const projectList = [<AProject0 />, <AProject1 />, <AProject2 />];
  const [project, setProject] = useState(<AProject0 />);
  const [projectIdx, setProjectIdx] = useState(0);

  const nextClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (projectIdx < projectList.length - 2) {
      setProject(projectList[projectIdx + 1]);
      setProjectIdx(projectIdx + 1);
      setPrevAccess(true);
    } else {
      setProject(projectList[projectList.length - 1]);
      setProjectIdx(projectList.length - 1);
      setNextAccess(false);
    }
  };

  const prevClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (projectIdx > 1) {
      setProject(projectList[projectIdx - 1]);
      setProjectIdx(projectIdx - 1);
      setNextAccess(true);
    } else {
      setProject(projectList[0]);
      setProjectIdx(0);
      setPrevAccess(false);
    }
  };
  const handleHideNext = () => {
    setNextColor(null);
  };

  const handleHidePrev = () => {
    setPrevColor(null);
  };

  const hideButtons = () => {
    handleHideNext();
    handleHidePrev();
  };

  useEffect(() => {
    if (props.dProjectVisible !== 'Android') {
      setUnmount(true);
    } else if (props.dProjectVisible === 'Android') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setUnmount(false);
      }, 1500);
    }
  }, [props.dProjectVisible]);

  return (
    <Segment className="AndroidContainer">
      <Transition transitionOnMount duration={500}>
        <Container>
          <Grid container>
            <Grid.Row>
              <p className="projectsSpecialColor">03. Android Projects</p>
              <Icon
                name="android"
                style={{ margin: '0 1vw' }}
                color="green"
                size="large"
              />
            </Grid.Row>
          </Grid>
        </Container>
      </Transition>
      <Transition visible={!unmount} duration={1500}>
        <Grid container className="AndroidGrid">
          <Grid.Row verticalAlign="middle" centered columns={3}>
            <Grid.Column mobile={1} textAlign="right">
              {prevAccess ? (
                <Button
                  style={{ boxShadow: 'none' }}
                  icon="left chevron"
                  basic={prevBasic}
                  color={prevColor}
                  onMouseDown={() => prevClick()}
                  onMouseUp={() => setPrevBasic(true)}
                />
              ) : (
                <Button
                  style={{ boxShadow: 'none' }}
                  icon="left chevron"
                  basic
                  disabled
                />
              )}
            </Grid.Column>
            <Grid.Column
              as={Segment}
              style={{ boxShadow: 'none', border: 'none' }}
              onMouseLeave={() => hideButtons()}
              loading={loading}
              computer={5}
              mobile={10}
            >
              {loading ? (
                <AndroidPlaceholder />
              ) : (
                <Suspense fallback={AndroidPlaceholder}>
                  <Container>{project}</Container>
                </Suspense>
              )}
            </Grid.Column>
            <Grid.Column mobile={1}>
              {nextAccess ? (
                <Button
                  icon="right chevron"
                  style={{ boxShadow: 'none' }}
                  basic={nextBasic}
                  color={nextColor}
                  onMouseDown={() => nextClick()}
                  onMouseUp={() => setNextBasic(true)}
                />
              ) : (
                <Button
                  style={{ boxShadow: 'none' }}
                  icon="right chevron"
                  basic
                  disabled
                />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Transition>
    </Segment>
  );
}

export default Projects;
