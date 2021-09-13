import {
  Placeholder,
  Grid,
  Container,
  Transition,
} from 'semantic-ui-react';

const WebPlaceholder = () => (
  <Transition transitionOnMount={true} duration={1500}>
    <Grid stackable container columns={2}>
      <Grid.Row columns={2}>
        <Grid.Column width={6} verticalAlign="middle">
          <Placeholder>
            <Placeholder.Image style={{ height: '17vh' }} />
          </Placeholder>
        </Grid.Column>
        <Grid.Column width={7} verticalAlign="middle" stretched>
          <Container>
            <Placeholder>
              <Placeholder.Line length="very long" />
              <Placeholder.Line length="very long" />
              <Placeholder.Line length="very long" />
              <Placeholder.Line length="very long" />
              <Placeholder.Line length="very long" />
              <Placeholder.Line length="very long" />
              <Placeholder.Line length="very long" />
              <Placeholder.Line length="very long" />
            </Placeholder>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Transition>
);

export default WebPlaceholder;
