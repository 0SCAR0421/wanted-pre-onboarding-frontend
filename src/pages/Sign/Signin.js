import { useState } from 'react';
import { postSignin } from '../../lib/axios';
import {
  SignContainer,
  SignFormContainer,
  SignCommonInput,
  SubmitButton,
} from '../../components/CommonSign';
import { useNavigate } from 'react-router-dom';

const Signin = ({ handleMode }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleuserData = (e) => {
    switch (e.target.type) {
      case 'text':
        setUserData((prev) => {
          return { ...prev, email: e.target.value };
        });
        break;
      case 'password':
        setUserData((prev) => {
          return { ...prev, password: e.target.value };
        });
        break;
      default:
        setUserData(userData);
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await postSignin(userData);
      localStorage.setItem('access_token', res.access_token);
      navigate('/todo');
    } catch (e) {
      alert('아이디 비밀번호를 확인해주세요');
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
              value={userData.email}
              onChange={handleuserData}
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <SignCommonInput
              id="password"
              type="password"
              value={userData.password}
              onChange={handleuserData}
            />
          </div>
        </SignFormContainer>
        <SubmitButton state={true} onClick={handleSubmit}>
          로그인
        </SubmitButton>
        <div>
          <span>아이디가 없으신가요?</span>
          <button onClick={handleMode}>회원가입</button>
        </div>
      </div>
    </SignContainer>
  );
};

export default Signin;
