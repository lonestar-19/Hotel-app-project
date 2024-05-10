// Bookings.jsx
import React, { useState } from 'react';

const Bookings = ({ rooms }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBook = (room) => {
    setSelectedRoom(room);
    // Perform booking logic here, e.g., send a booking request to the server
    console.log(`Room ${room.number} booked!`);
  };

  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            Room {room.number} - {room.type} - ${room.price}
            <button onClick={() => handleBook(room)}>Book</button>
          </li>
        ))}
      </ul>
      {selectedRoom && <p>Room {selectedRoom.number} booked!</p>}
    </div>
  );
};

export default Bookings;
