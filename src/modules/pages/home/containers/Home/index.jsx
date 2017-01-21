import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import R from 'ramda';
import compose from 'recompose/compose';

import Button from 'modules/ui/components/Button';
import * as dataActions from 'modules/data/actions';

import Item from '../../components/Item';
import mapStateToProps from './mapStateToProps';
import { withData } from './decorators';

const Home = ({ data }) => (
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
    <Row>
      {data.map(item => (
        <Col key={item.id} md={3}>
          <Item {...item} />
        </Col>
      ))}
    </Row>
  </Grid>
);

Home.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string,
    ...Item.propTypes,
  })),
};

export default compose(
  connect(mapStateToProps, R.curry(bindActionCreators)(dataActions)),
  withData(),
)(Home);
