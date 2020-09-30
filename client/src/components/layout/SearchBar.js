import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs, getLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs, getLogs }) => {
  const text = useRef('');

  const onChange = (e) => {
    if (text.current.value === '') {
      getLogs();
    } else {
      searchLogs(text.current.value);
    }
  };

  const onClose = (e) => {
    text.current.value = '';
    getLogs();
  };

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Logs..'
              ref={text}
              onChange={onChange}
              required
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons' onClick={onClose}>
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
  getLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs, getLogs })(SearchBar);
