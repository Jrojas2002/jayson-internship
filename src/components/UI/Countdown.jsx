import React, { useEffect } from "react";

const Countdown = ({ newItems, setNewItems, item }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setNewItems((prevItems) =>
        prevItems.map((item) => {
          if (item.expiryDate) {
            const timeLeft = item.expiryDate - Date.now();
            if (timeLeft > 0) {
              return {
                ...item,
                timeLeft: {
                  hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
                  minutes: Math.floor((timeLeft / (1000 * 60)) % 60),
                  seconds: Math.floor((timeLeft / 1000) % 60),
                },
              };
            } else {
              return {
                ...item,
                timeLeft: "Expired",
              };
            }
          } else {
            return {
              ...item,
              timeLeft: null,
            };
          }
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [newItems]);

  return (
    <>
      {item.expiryDate && item.timeLeft ? (
        <div className="de_countdown">
          {item.timeLeft.hours}h {item.timeLeft.minutes}m{" "}
          {item.timeLeft.seconds}s
        </div>
      ) : null}
    </>
  );
};

export default Countdown;
