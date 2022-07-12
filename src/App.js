import styled from "styled-components";

const Father = styled.section`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

//styled 함수를 사용해서 부분변경도 가능하다. props 사용도 똑같이 가능.
const Circle = styled(Box)`
  border-radius: 50%;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal"></Box>
      <Circle bgColor="tomato"></Circle>
    </Father>
  );
}

export default App;
