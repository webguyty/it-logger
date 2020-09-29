import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, deleteTech }) => {
  // const TechItem = ({ tech }) => {
  const onDelete = () => {
    M.toast({ html: 'Technician Deleted' });
    deleteTech(tech._id);
  };

  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          {' '}
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
// export default connect(null, {})(TechItem);
