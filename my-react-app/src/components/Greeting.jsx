import { useEffect, useState } from 'react';

function Greeting({ name }) {
  const [hasNameChanged, setHasNameChanged] = useState(false);

  useEffect(() => {
    if (hasNameChanged) {
    
      return;
    }
    
    setHasNameChanged(true);
  }, [name]);

  return (
    <div>
      {hasNameChanged
        ? <h2>Привет, у тебя поменялось имя, теперь ты {name}!</h2>
        : <h2>Привет, {name}!</h2>
      }
    </div>
  );
}

export default Greeting;