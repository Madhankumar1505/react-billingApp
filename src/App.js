import React, { createContext } from 'react';
import './App.css';
import './css/custom.css'
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import { Router } from 'react-router-dom';
import Routes from './components/Routes';
import history from './services/history';
import { useAppState } from './hooks/app-state-hook';
import Main from './container/Main';
import ErrorBoundary from "./exception-handling/ErrorBoundary"

export const AppContext = createContext();

export default function App() {

  const appState = useAppState();
  const { page, goToPage } = appState.navInfo;


  return (
    <AppContext.Provider value={appState}>
      <NavigationBar />
      <ErrorBoundary>
        <div className="container">
          <div className="row">
            <div className="margin-top col-lg-12">
              <Main page={page} goToPage={goToPage} />
            </div>
          </div>
        </div>
      </ErrorBoundary>
      <Footer />
      {/*<Router history={history}>
        <NavigationBar />
        <div className="container">
          <div className="row">
            <div className="margin-top col-lg-12">
              <Routes headerArray={headerArray} />
            </div>
          </div>
        </div>
        <Footer />
  </Router>*/}
    </AppContext.Provider >
  );
}
