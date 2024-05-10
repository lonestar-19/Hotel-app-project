// BookingDetails.jsx
import React from 'react';
import Bookings from './Bookings';

const BookingDetails = () => {
  const roomsData = [
    { id: 1, number: 101, type: 'Single', price: 100 },
    { id: 2, number: 102, type: 'Double', price: 150 },
    { id: 3, number: 103, type: 'Suite', price: 200 },
  ];

  return (
    <div>
      <h1>Booking Details</h1>
      <Bookings rooms={roomsData} />
    </div>
  );
};

export default BookingDetails;
