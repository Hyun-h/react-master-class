import styled from "styled-components";

const Father = styled.section`
  display: flex;
`;

//만약 모든 style을 활용하고 싶은데 html 태그만 바꾸고 싶을 경우
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
  padding: 0 10px;
`;

//반복되는 속성이 있을 때는 attrs를 사용해서 전달될 모든 속성을 가진 오브젝트를 담을 수 있음
const Input = styled.input.attrs({ required: true, minLength: 10 })``;

function App() {
  return (
    <Father>
      {/* as를 써서 html 태그 바꾸기 예시는 button tag에서 a tag로 변경 */}
      <Btn as="a">Log In</Btn>
      <Btn>Log In</Btn>

      {/* attrs를 쓰면 이렇게 속성을 반복하지 않아도 된다.
      <Input required />
      <Input required />
      <Input required />
      <Input required /> 
      */}

      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
