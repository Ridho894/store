import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';

const SplashScreen = () => {
  return (
    <div className={'h-screen flex items-center justify-center'}>
      <div className={'text-center flex-items-center justify-center'}>
        <img alt={'logo'} className={'animate-ping rounded-full'} src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png" width={100} height={100} />
      </div>
    </div>
  )
}

function App() {
  const [loadingScreen, setLoadingScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false)
    }, 1000);
  }, [loadingScreen]);

  if (loadingScreen) return <SplashScreen />

  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} />
      </div>
    </Router>
  );
}

export default App;
