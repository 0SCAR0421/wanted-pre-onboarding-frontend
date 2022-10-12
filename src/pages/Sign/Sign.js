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
        <Signup handleMode={handleMode} />
      ) : (
        <Signin handleMode={handleMode} />
      )}
    </div>
  );
};

export default Sign;
