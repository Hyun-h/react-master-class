import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const darkTheme = {
    textColor: 'whitesmoke',
    backgroundColor: '#111',
};

const lightTheme = {
    textColor: '#111',
    backgroundColor: 'whitesmoke',
};
//제일 최상단을 ThemeProvider로 감싸준 다음, Theme을 부여한다.
//각 컴포넌트에서 props를 통해 theme 사용ㄴ
root.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
