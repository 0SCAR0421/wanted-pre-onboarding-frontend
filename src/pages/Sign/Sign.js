import { useState } from 'react';
import Signin from './Signup';
import Signup from './Signin';

const Sign = () => {
  const [mode, setMode] = useState(0);
  const handleMode = () => {
    setMode(!mode);
  };
  // TODO 컴포넌트 서로 위치변경
  return (
    <div>
      {mode ? (
        <Signin handleMode={handleMode} />
      ) : (
        <Signup handleMode={handleMode} />
      )}
    </div>
  );
};

export default Sign;
