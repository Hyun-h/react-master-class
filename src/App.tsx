import React, { useState } from 'react';
import Router from './Router';
import { ReactQueryDevtools } from 'react-query/devtools';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';

const GlobalStyle = createGlobalStyle`
//reset css 넣든 넣어주면 됨
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
//요것도 당연히 추가!
* {
  box-sizing: border-box;
}
body {
  //만약 로드가 되지 않을 경우 이 폰트 쓰게 설정
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
}
a {
  //a tag 밑줄 없애기
  text-decoration:none;
  //color 부모한테 상속해줘!
  color: inherit;
}
`;

function App() {
    const [isDart, setIsDark] = useState(false);
    const toggleDark = () => setIsDark((current) => !current);

    return (
        <>
            {/* //index.tsx에서 App,tsx로 이동 */}
            <ThemeProvider theme={isDart ? darkTheme : lightTheme}>
                <button onClick={toggleDark}>Toggle Mode</button>
                <GlobalStyle />
                <Router />
                <ReactQueryDevtools initialIsOpen={true} />
            </ThemeProvider>
        </>
    );
}

export default App;
