import React from 'react';

const Item = ({ title }) => (
  <div>
    {title}
  </div>
);

Item.propTypes = {
  title: React.PropTypes.string,
};

export default Item;
