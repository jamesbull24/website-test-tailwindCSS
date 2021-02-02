import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages';
import { Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown';
// for dropdown
import React, { useState, useEffect } from 'react';

function App() {
	//dropdown
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
  };
  //make open dropdown disappear if resized
  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('puff, Dropdown toggled to hidden!');
      }
    }
    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    };
  });

	return (
		<>
			<Navbar toggle={toggle} />
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/menu" component={Menu} />
				<Route path="/about" component={About} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
