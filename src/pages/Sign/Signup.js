import { useState } from 'react';
import { SubmitButton } from '../../components/CommonSign';
import { postSignup } from '../../lib/axios';

const Signup = ({ handleMode }) => {
  const [userdata, setUserdata] = useState({ email: '', password: '' });
  const [state, setState] = useState({ email: false, password: false });

  const handleUserdata = (e) => {
    const emailRegExp = /^[a-zA-Z0-9][_a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    const passwordRegExp = /^\S{8,}$/;

    switch (e.target.type) {
      case 'email':
        setUserdata((prev) => {
          return { ...prev, email: e.target.value };
        });
        setState((prev) => {
          return { ...prev, email: emailRegExp.test(e.target.value) };
        });
        break;
      case 'password':
        setUserdata((prev) => {
          return { ...prev, password: e.target.value };
        });
        setState((prev) => {
          return { ...prev, password: passwordRegExp.test(e.target.value) };
        });
        break;
      default:
        setUserdata(userdata);
    }
  };

  const handleSubmit = async () => {
    if (state.email && state.password) {
      try {
        const res = await postSignup(userdata);
        localStorage.setItem('access_token', res.access_token);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    } else alert('hello world!');
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
      <SubmitButton
        state={state.email && state.password}
        onClick={handleSubmit}
      >
        회원가입
      </SubmitButton>
      <div>
        <span>아이디가 있으신가요?</span>
        <button onClick={handleMode}>로그인</button>
      </div>
    </div>
  );
};

export default Signup;
