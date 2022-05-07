import React from 'react';

import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from './utils/theme';
import { connect } from 'react-redux';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import ErrorHandler from 'services/errorHandler';
import GlobalStyle from './utils/globalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from 'utils/routes';
// import Cursor from './components/Cursor';
import CursorContextProvider from 'state/CursorContextProvider';

function App({ theme }: { theme: string }) {

  const routeComponents = routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={<route.component />}
    />
  ));

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
      <CursorContextProvider>
        {/* <Cursor /> */}
        <ErrorHandler />
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            {routeComponents}
          </Routes>
          <Footer />
        </BrowserRouter>
      </CursorContextProvider>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme.theme,
  }
}

export default connect(mapStateToProps, {})(App);
