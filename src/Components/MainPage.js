import React from 'react';
import EventList from './EventList';
import NewEventForm from './NewEventForm';
import EventDetails from './EventDetails'; 
import PropTypes from 'prop-types'

const MainPage = props => {
  return (
    <React.Fragment>
      <button onClick={() => props.handleChangeViewClick('NewEventForm')}>Add New Event</button>
      <EventList handleChangeViewClick={props.handleChangeViewClick} />
    </React.Fragment>
  )
}
MainPage.propTypes = {
  handleChangeViewClick: PropTypes.func
}
export default MainPage;