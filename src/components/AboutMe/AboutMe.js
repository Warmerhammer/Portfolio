import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import Card from '../../Styles/Card/Card';
import './AboutMe.css';

class AboutMe extends React.Component {
  state = {
    numberOfColumns: 4,
  };

  render() {
    return (
      <Segment
        className="AboutMeContainer"
        style={{
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <Grid columns={2} divided className="AboutMeGrid">
          <Grid.Column
            floated="right"
            width={this.state.numberOfColumns}
            style={{ padding: '0 2vw 0 0' }}
            className="AboutMeCardColumn"
          >
            <p>
              <span>
                <span className="aboutMeSpecialColor">02. AboutMe</span>
              </span>
              <br />
              <br />
            </p>
            <Card setColumns={() => this.setState({ numberOfColumns: 10 })} />
          </Grid.Column>

          <Grid.Column width={10} className="AboutMeTextGrid">
            <div className="text">
              <p>
                Hello! I'm an aspiring software engineer located in the Bay
                Area.
                <br /> <br />
                I have experience Native Android Development, and creating web apps with React. My goal is to always be
                coding and learning to be the best performing engineer I can
                be.
                <br /> <br />
                I am currently enrolled with Oregon State University in a B.S.
                in Computer Science program and I couldn't be more thrilled. I
                get to work on a variety of different computer science topics
                and I find the field to be very interesting.
                <br /> <br />
                Here are a few of my technology skills:
              </p>
              <ul className="languages">
                <li className="sub">
                  <ul>
                    <li>JavaScript(ES6)</li>
                    <li>HTML & CSS</li>
                    <li>React</li>
                  </ul>
                </li>

                <li className="sub">
                  <ul>
                    <li>Native Android Development</li>
                    <li>Kotlin</li>
                    <li>Java</li>
                  </ul>
                </li>
              </ul>
            </div>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default AboutMe;
