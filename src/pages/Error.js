import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>Error</div>
      <button onClick={handleBack}>뒤로가기</button>
    </div>
  );
};

export default Error;
