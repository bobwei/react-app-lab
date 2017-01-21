import React from 'react';

import styles from './index.scss';

const Item = ({ photo, title }) => (
  <div className={styles.item}>
    <div
      className={styles.photo}
      style={{ backgroundImage: `url(${photo})` }}
    />
    <div className={styles.title}>
      {title}
    </div>
  </div>
);

Item.propTypes = {
  photo: React.PropTypes.string,
  title: React.PropTypes.string,
};

export default Item;
