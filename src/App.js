import React from 'react';
import './App.css';
import Home from './pages/Home/Home';

const tg = window.Telegram.WebApp;

function App() {

  // React.useEffect(() => {
  //   tg.ready();
  // }, [])
  

  // const onClose = () => {
  //   tg.close();
  // }

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
