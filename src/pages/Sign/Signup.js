import { useState } from 'react';
import {
  SignContainer,
  SignFormContainer,
  SignCommonInput,
  SubmitButton,
} from '../../components/CommonSign';
import { postSignup } from '../../lib/axios';
import { useNavigate } from 'react-router-dom';

const Signup = ({ handleMode }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [state, setState] = useState({ email: false, password: false });
  const navigate = useNavigate();

  const handleuserData = (e) => {
    const emailRegExp = /^[a-zA-Z0-9][_a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    const passwordRegExp = /^\S{8,}$/;

    switch (e.target.type) {
      case 'text':
        setUserData((prev) => {
          return { ...prev, email: e.target.value };
        });
        setState((prev) => {
          return { ...prev, email: emailRegExp.test(e.target.value) };
        });
        break;
      case 'password':
        setUserData((prev) => {
          return { ...prev, password: e.target.value };
        });
        setState((prev) => {
          return { ...prev, password: passwordRegExp.test(e.target.value) };
        });
        break;
      default:
        setUserData(userData);
    }
  };

  const handleSubmit = async () => {
    if (state.email && state.password) {
      try {
        const res = await postSignup(userData);
        localStorage.setItem('access_token', res.access_token);
        navigate('/todo');
      } catch (e) {
        alert('중복된 이메일입니다.');
      }
    }
  };

  return (
    <SignContainer>
      <div>
        <h1>
          wanted
          <br />
          pre onboarding
          <br />
          frontend
        </h1>
        <SignFormContainer>
          <div>
            <label htmlFor="email">이메일</label>
            <SignCommonInput
              id="email"
              type="text"
              placeholder="example@wanted.com"
              value={userData.email}
              onChange={handleuserData}
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <SignCommonInput
              id="password"
              type="password"
              placeholder="문자 8글자 이상"
              value={userData.password}
              onChange={handleuserData}
            />
          </div>
        </SignFormContainer>
        {state.email && state.password ? (
          <SubmitButton onClick={handleSubmit}>회원가입</SubmitButton>
        ) : (
          <div className="disable"></div>
        )}
        <div>
          <span>아이디가 있으신가요?</span>
          <button onClick={handleMode}>로그인</button>
        </div>
      </div>
    </SignContainer>
  );
};

export default Signup;
