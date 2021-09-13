import React, { useCallback, useEffect, useState } from 'react';
import { Segment} from 'semantic-ui-react';

import './projects.css';

import WebProject0 from './WProject0.js';

import AndroidGrid from './AGrid';

function Projects(props) {
  const [android, setAndroid] = useState(true);

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
    <Segment className="project1Container">
      {android ? (
        <AndroidGrid
          dProjectVisible={props.dProjectVisible}
          dHandleProjectVisible={value => dHandleProjectVisible(value)}
        />
      ) : (
        <WebProject0
          dProjectVisible={props.dProjectVisible}
          dHandleProjectVisible={value => dHandleProjectVisible(value)}
        />
      )}
    </Segment>
  );
}

export default Projects;
