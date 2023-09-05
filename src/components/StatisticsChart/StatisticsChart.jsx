import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../../redux/tasks/taskOperations';
import './statistickChart.css';
import BarChart from './barChart';
import { PeriodPaginator } from '../PeriodPaginator/PeriodPaginator';

const StatisticsChart = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventName, setEventName] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(fetchTasks());
      console.log(res.payload); //тут приходять таски
      // Тут можна обробити відповідь, якщо це потрібно
    };

    fetchData();
  }, [dispatch]);

  // const dateClickHandler = date => {
  //   setSelectedDate(date);
  // };

  const eventUpdateHandler = event => {
    setEventName(event.target.value);
  };

  const createEvent = () => {
    if (selectedDate && eventName) {
      const newEvent = {
        id: new Date().getTime(),
        date: selectedDate,
        title: eventName,
        status: 'todo',
      };
      setEvents([...events, newEvent]);
      setSelectedDate(null);
      setEventName('');
      setSelectedDate(newEvent.date);
    }
  };

  const updateEvent = (eventId, newName) => {
    const updatedEvents = events.map(event => {
      if (event.id === eventId) {
        return {
          ...event,
          title: newName,
          status: 'in progress',
        };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  const deleteEvent = eventId => {
    const updatedEvents = events.map(event => {
      if (event.id === eventId) {
        return {
          ...event,
          status: 'done',
        };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  // const totalEvents = events.length;
  // const eventsOnSelectedDate = events.filter(
  //   event => event.date.toDateString() === selectedDate?.toDateString()
  // );

  // const eventsPercentage =
  //   totalEvents > 0 ? (eventsOnSelectedDate.length / totalEvents) * 100 : 0;

  return (
    <div className="event-container">
      <div className="dayCount">
        <PeriodPaginator className="pagination" activePage={'statistics/day'} />
        <div className="statistick_day_month">
          <p className="statisticsByDay">By Day</p>
          <p className="statisticsByMonth">By Month</p>
        </div>
      </div>

      {selectedDate && (
        <div className="event-form">
          <h2>Create Event</h2>
          <p>Selected Date: {selectedDate.toDateString()}</p>
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={eventUpdateHandler}
          />
          <button className="create-btn" onClick={createEvent}>
            Click Here to Add Event
          </button>
        </div>
      )}
      {events.length > 0 && selectedDate && (
        <div className="event-list">
          <h2>My Created Event List</h2>
          <div className="event-cards">
            {events.map(event => {
              if (event.date.toDateString() === selectedDate?.toDateString()) {
                return (
                  <div key={event.id} className="event-card">
                    <div className="event-card-header">
                      <span className="event-date">
                        {event.date.toDateString()}
                      </span>
                      <div className="event-actions">
                        <button
                          className="update-btn"
                          onClick={() =>
                            updateEvent(event.id, prompt('Enter New Title'))
                          }
                        >
                          Update Event
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => deleteEvent(event.id)}
                        >
                          Delete Event
                        </button>
                      </div>
                    </div>
                    <div className="event-card-body">
                      <p className="event-title">{event.title}</p>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      )}
      <BarChart
        events={events}
        selectedDate={selectedDate}
        updateEvent={updateEvent}
      />
    </div>
  );
};

export default StatisticsChart;
