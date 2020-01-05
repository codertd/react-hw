import React from 'react';
import PropTypes from 'prop-types';


const Users = (props) => {
  const { text } = props;
  return (
    <users>
      <h1 data-testid="h1tag" className="fancy-h1">
        {text}
      </h1>
    </users>
  );
};

Users.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Users;
