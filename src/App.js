import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    months: 0,
    years: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const targetDate = new Date("2027-12-31");
    const difference = targetDate - new Date();
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let months = Math.floor(days / 30);
    let years = Math.floor(months / 12);
    days = days - months * 30;
    months = months - years * 12;
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / 1000 / 60) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    setTimeLeft({ years, months, days, hours, minutes, seconds });
  };

  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>
        {`${timeLeft.days.toString().padStart(3, "0")} Days : ${timeLeft.minutes
          .toString()
          .padStart(2, "0")} Mins : ${timeLeft.seconds.toString().padStart(2, "0")} Secs`}
      </p>
      <p>
        {`${timeLeft.days.toString().padStart(2, "0")} Days : ${timeLeft.months
          .toString()
          .padStart(2, "0")} Months : ${timeLeft.years.toString().padStart(2, "0")} Years`}
      </p>
    </div>
  );
};

export default CountdownTimer;
