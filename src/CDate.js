import React, { useEffect, useState } from "react";
import "./CDate.css";

function CDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="cDate">
      <h3 className="cDate__time">Curent Time: {date.toLocaleTimeString()}</h3>
      <h3 className="cDate__date"> Today Date: {date.toLocaleDateString()}</h3>
    </div>
  );
}

export default CDate;
