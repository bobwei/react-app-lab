import React from 'react';
import { Jumbotron, Grid, Row, Col, Form } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router';
import compose from 'recompose/compose';

import FieldGroup from 'modules/ui/components/FieldGroup';
import Button from 'modules/ui/components/Button';

import Item from '../../components/Item';
import withData from '../../decorators/withData';
import withFetch from '../../decorators/withFetch';

const Home = ({ data, handleSubmit }) => (
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
      <Col md={6} mdOffset={3}>
        <Form onSubmit={handleSubmit}>
          <div style={{ margin: '-30px 0 30px' }}>
            <Field
              name="q"
              component={FieldGroup}
              inputComponent="input"
              inputProps={{
                type: 'search',
                placeholder: 'Search By Name',
                autoFocus: true,
              }}
            />
          </div>
        </Form>
      </Col>
    </Row>
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
  handleSubmit: React.PropTypes.func,
};

export default compose(
  withData(),
  withFetch(),
  reduxForm({
    form: 'dataQuery',
    onSubmit(data) {
      console.log(data);
    },
  }),
)(Home);
