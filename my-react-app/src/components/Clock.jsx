import { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = currentTime.getMinutes();
  const isDivisibleByFive = minutes % 5 === 0;

  return (
    <div>
      <h2>Текущее время: {currentTime.toLocaleTimeString()}</h2>
      <p>Дата: {currentTime.toLocaleDateString()}</p>

     
      {isDivisibleByFive && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>Время делится на 5</p>
      )}
    </div>
  );
}

export default Clock;