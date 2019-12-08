import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

import EightBall from './EightBall';

const StyledApp = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const CustomButton = styled.button`
  border-radius: 32px;
  padding: 12px 16px;
  outline: none;
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border: none;
  margin-top: 12px;
  max-width: 200px;
  font-size: 20px;
`;

const App: React.FC = () => {
  const [response, setReponse] = React.useState(' ');

  const handleReponse = (res: string) => setReponse(res);

  return (
    <StyledApp>
      <h1>Sarcasti Ball</h1>

      <EightBall response={response} />

      <CustomButton
        onClick={() => {
          axios
            .get('/api/randomResponse')
            .then(res => handleReponse(res.data))
            .catch(_ => handleReponse('Oops, something went wrong. Try again.'));
        }}
      >
        Get Response
      </CustomButton>
    </StyledApp>
  );
};

export default App;
