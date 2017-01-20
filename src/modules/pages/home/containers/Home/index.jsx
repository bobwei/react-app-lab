import React from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import { Link } from 'react-router';
import compose from 'recompose/compose';

import Button from 'modules/ui/components/Button';

import { withData } from './decorators';

const Home = () => (
  <Grid>
    <Jumbotron>
      <h2>Hello, React App Boilerplate</h2>
      <p>
        This is a react app boilerplate with batteries included.
      </p>
      <p>
        <Button
          bsStyle="default"
          to={{
            pathname: '/admin',
            state: { modal: true },
          }}
          componentClass={Link}
        >
          open Admin Portal in modal
        </Button>
      </p>
    </Jumbotron>
  </Grid>
);

export default compose(
  withData(),
)(Home);
