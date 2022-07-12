//Animaiton 사용방법
import styled, { keyframes } from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

const rotateAnimaiton = keyframes`
  from {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  to {
    transform: rotate(360deg);
    border-radius: 50%;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimaiton} 1s linear infinite;

  //컴포넌트 안에서 원하는 element의 스타일을 주는 것도 가능
  span {
    font-size: 36px;

    //nesting 처리 가능
    &:hover {
      font-size: 60px;
    }

    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😱</span>
      </Box>
    </Wrapper>
  );
}

export default App;
