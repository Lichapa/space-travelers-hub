import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => (
  <li className="rocket-item" key={rocket.id}>
    <div className="rocket-img"><img src={rocket.flickr_images} alt={rocket.name} /></div>
    <div className="rocket-description">
      <h2>{rocket.rocket_name}</h2>
      <p>
        {rocket.description}
      </p>
      <div>
        {rocket.reserved === false || rocket.reserved === undefined
          ? <button type="button" className="available-button">Reserve Rocket</button>
          : <button type="button" className="reserved-button">Cancel Reservation</button>}
      </div>
    </div>
  </li>
);
Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
    rocket_name: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
export default Rocket;
