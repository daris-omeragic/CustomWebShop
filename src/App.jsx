import './App.css';

import IconBar from './Templates/Navigation/IconBar';
import  TopRow  from './Templates/Navigation/TopRow';
import HomePage from './Templates/HomePage/HomePage';
import ProductSpotlight from './Templates/ProductSpotlight/ProductSpotlight';


function App() {
  return (
    <>
    <TopRow/>
    <IconBar/>
    <HomePage/>
    <ProductSpotlight/>
    </>
  );
}

export default App;