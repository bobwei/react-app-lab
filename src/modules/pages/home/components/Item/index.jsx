/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import styles from './index.scss';

const Item = ({ link, photo, title }) => (
  <a className={styles.item} href={link} target="_blank">
    <div
      className={styles.photo}
      style={{ backgroundImage: `url(${photo})` }}
    />
    <div className={styles.title}>
      {title}
    </div>
  </a>
);

Item.propTypes = {
  photo: React.PropTypes.string,
  title: React.PropTypes.string,
  link: React.PropTypes.string,
};

export default Item;
