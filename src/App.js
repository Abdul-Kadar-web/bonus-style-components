import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header2 from './components/Header2/Header2';
import Header3 from './components/Header3/Header3';
import HeaderSCSS from './components/HeaderSCSS/HeaderSCSS';
import HomeSCSS from './components/HomeSCSS/HomeSCSS';

function App() {
  return (
    <div className="App">
      <HeaderSCSS></HeaderSCSS>
      <HomeSCSS></HomeSCSS>

      {/* <Header></Header> */}
      <Header3></Header3>
      <Header2></Header2>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
