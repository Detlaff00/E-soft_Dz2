import { useState, useEffect } from 'react';
import Greeting from './Greeting';
import Clock from './Clock'; 
import Header from './Header';

// Вспомогательная функция генерации случайного имени
function generateRandomName() {
  const names = ['Alex', 'Sam', 'Jordan', 'Taylor', 'Morgan', 'Charlie', 'Drew', 'Casey'];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function Container() {
  const [name, setName] = useState('');


  useEffect(() => {
    setName(generateRandomName());
  }, []);

 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setName(generateRandomName());
    }, 10000); 

    
    return () => clearInterval(intervalId);
  }, []);

  return (
      <div>
        
        <Header />
        <Greeting name={name} />
        <Clock />
      </div>
    );
  }
  
  

export default Container;