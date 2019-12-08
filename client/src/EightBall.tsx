import React from 'react';
import styled from 'styled-components';

interface EightBallProps {
  response: string;
}

const Ball = styled.div`
  background: linear-gradient(80deg, black 60%, #262424 95%);
  border-radius: 50%;
  min-height: 550px;
  min-width: 550px;
  margin: 50px;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
`;

const InnerCircle = styled.div`
  background: linear-gradient(70deg, #00008b 50%, #3e3ed6 95%);
  min-height: 150px;
  width: 150px;
  border-radius: 50%;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

const Repsonse = styled.div`
  color: white;
  word-wrap: break-word;
  padding: 10px;
`;

const EightBall = (props: EightBallProps) => {
  const { response } = props;

  return (
    <Ball>
      <InnerCircle>
        <Repsonse>{response}</Repsonse>
      </InnerCircle>
    </Ball>
  );
};

export default EightBall;
