import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { createBooking, getBookings } from '../bookings';

function CalendarFull() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const bookings = await getBookings();
      const formatted = bookings.map(b => ({
        title: b.title || 'Reserved',
        date: b.date,
      }));
      setEvents(formatted);
    }
    fetchData();
  }, []);

  const handleDateClick = async (arg) => {
    const title = prompt('Enter booking title');
    if (title) {
      await createBooking({ title, date: arg.dateStr });
      const updated = await getBookings();
      const formatted = updated.map(b => ({
        title: b.title || 'Reserved',
        date: b.date,
      }));
      setEvents(formatted);
    }
  };

  return (
    <div>
      <h2>Calendar Bookings</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={events}
      />
    </div>
  );
}

export default CalendarFull;
