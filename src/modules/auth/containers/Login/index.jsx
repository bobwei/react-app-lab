import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import styles from './index.scss';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => (
  <Grid>
    <Row>
      <Col mdOffset={3} md={6}>
        <div className={styles.loginForm}>
          <div className={styles.header}>
            登入
          </div>
          <div className={styles.body}>
            <LoginForm />
          </div>
        </div>
      </Col>
    </Row>
  </Grid>
);

export default connect()(LoginPage);