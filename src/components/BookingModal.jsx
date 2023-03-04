import React, { useState } from "react";
import "../assets/styles.css";
import { DateRangePicker } from "./DateRangePicker";
import NumericInput from "react-numeric-input";
import { bookResource } from "../data/dataAccess";

export const BookingModal = ({ resource, setIsOpen }) => {
  const [bookingInfo, setBookingInfo] = useState({
    dateFrom: new Date(),
    dateTo: new Date(),
    bookedQuantity: 1,
  });
  const [validationMessage, setValidationMessage] = useState("");

  const handleQuantityInputChange = (value) => {
    setBookingInfo((prevBookingInfo) => ({
      ...prevBookingInfo,
      bookedQuantity: value,
    }));
  };

  const handleBookResource = async () => {
    try {
      const { result } = await bookResource({
        ...bookingInfo,
        resourceId: resource.id,
      });
      if (result) {
        setValidationMessage(
          "Booking was successful!"
        );
      } else {
        setValidationMessage(
          "Cannot book resource in the requested time slot and quantity."
        );
      }
    } catch (error) {
      setValidationMessage("Something went wrong while booking resource.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          {`Booking ${resource.name}`}
          <span className="modal-close" onClick={() => setIsOpen(false)}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <DateRangePicker
            showTimeSelect={true}
            dateFormat="Pp"
            showIcon={true}
            startDate={bookingInfo.dateFrom}
            endDate={bookingInfo.dateTo}
            setStartDate={(date) =>
              setBookingInfo((prevBookingInfo) => ({
                ...prevBookingInfo,
                dateFrom: date,
              }))
            }
            setEndDate={(date) =>
              setBookingInfo((prevBookingInfo) => ({
                ...prevBookingInfo,
                dateTo: date,
              }))
            }
          />
          <div className="quantity-label">Quantity</div>
          <NumericInput
            className="numeric-input"
            min={1}
            max={100}
            name="bookedQuantity"
            onChange={handleQuantityInputChange}
            value={bookingInfo.bookedQuantity}
          />
          <button className="book-button" onClick={handleBookResource}>
            Book
          </button>
          {validationMessage && (
            <div style={{ color: validationMessage === "Booking was successful!" ? "green" : "red" }}>{validationMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};