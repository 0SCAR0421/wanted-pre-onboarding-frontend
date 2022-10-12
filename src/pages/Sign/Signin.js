import { useState } from 'react';
import { postSignin } from '../../lib/axios';
import { SubmitButton } from '../../components/CommonSign';

const Signin = ({ handleMode }) => {
  const [userdata, setUserdata] = useState({ email: '', password: '' });

  const handleUserdata = (e) => {
    switch (e.target.type) {
      case 'email':
        setUserdata((prev) => {
          return { ...prev, email: e.target.value };
        });
        break;
      case 'password':
        setUserdata((prev) => {
          return { ...prev, password: e.target.value };
        });
        break;
      default:
        setUserdata(userdata);
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await postSignin(userdata);
      localStorage.setItem('access_token', res.access_token);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <input type="email" value={userdata.email} onChange={handleUserdata} />
        <input
          type="password"
          value={userdata.password}
          onChange={handleUserdata}
        />
      </div>
      <SubmitButton state={true} onClick={handleSubmit}>
        로그인
      </SubmitButton>
      <div>
        <span>아이디가 없으신가요?</span>
        <button onClick={handleMode}>회원가입</button>
      </div>
    </div>
  );
};

export default Signin;
