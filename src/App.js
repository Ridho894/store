import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import { selectUser } from './redux/userSlice';

const SplashScreen = () => {
  return (
    <div className={'h-screen flex items-center justify-center'}>
      <div className={'text-center flex-items-center justify-center'}>
        <img alt={'logo'} className={'animate-ping rounded-full'} src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png" width={100} height={100} />
      </div>
    </div>
  )
}

const App = () => {
  // const [loadingScreen, setLoadingScreen] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoadingScreen(false)
  //   }, 1000);
  // }, [loadingScreen]);

  // if (loadingScreen) return <SplashScreen />

  const user = useSelector(selectUser)


  return (
    <Provider store={store}>
      <Router>
        {user ? <Home /> : <Login />}
      </Router>
    </Provider>
  );
}

export default App;
