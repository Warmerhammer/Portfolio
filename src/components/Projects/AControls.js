import React, { useState } from 'react';
import { Button, Header, Segment } from 'semantic-ui-react';

import './projects.css';
import AndroidGrid from './AGrid'

function AControls(props) {
  const [nextColor, setNextColor] = useState(null);
  const [nextBasic, setNextBasic] = useState(true);
  // const [gif, setGif] = useState(SevenMinuteWorkout)

  const [viewProjectsColor, setViewProjectsColor] = useState(null);
  const [viewProjectsBasic, setViewProjectsBasic] = useState(true);

  const [prevColor, setPrevColor] = useState(null);
  const [prevBasic, setPrevBasic] = useState(true);

  const nextClick = () => {
    // const project = <AndroidGrid switchAProject/>
    setNextBasic(false);
    // setGif(MonsterKiller)
  };

  const viewProjectsClick = () => {
    setViewProjectsBasic(false);
  };

  const prevClick = () => {
    setPrevBasic(false);
  };

  return (
    <Segment className="project3Container">
      <Segment
        style={{
          margin: '5vh 0',
          padding: '3vh 0',
          boxShadow: 'none',
          border: 'none',
        }}
        textAlign="center"
      >
        <Button.Group color="black">
          <Button
            style={{ padding: '.05vh 0 0 0', backgroundColor: '#1B1C1D' }}
            labelPosition="left"
            icon="left chevron"
            content="Previous"
            basic={prevBasic}
            color={prevColor}
            onMouseDown={() => prevClick()}
            onMouseEnter={() => setPrevColor('black')}
            onMouseLeave={() => setPrevColor(null)}
            onMouseUp={() => setPrevBasic(true)}
          />
          <Button
            content="View Web Projects"
            basic={viewProjectsBasic}
            color={viewProjectsColor}
            onMouseDown={() => viewProjectsClick()}
            onMouseEnter={() => setViewProjectsColor('black')}
            onMouseLeave={() => setViewProjectsColor(null)}
            onMouseUp={() => setViewProjectsBasic(true)}
          />
          <Button
            labelPosition="right"
            icon="right chevron"
            content="Next"
            basic={nextBasic}
            color={nextColor}
            onMouseDown={() => nextClick()}
            onMouseEnter={() => setNextColor('black')}
            onMouseLeave={() => setNextColor(null)}
            onMouseUp={() => setNextBasic(true)}
          />
        </Button.Group>
      </Segment>
    </Segment>
  );
}

export default AControls;
