import logo from './logo.svg';
import './App.css';
import TopHeader from './Components/TopHeader/TopHeader';
import BottomHeader from './Components/BottomHeader/BottomHeader';
import BannerHeader from './Components/BannerHeader/BannerHeader';
import About from './Components/About/About';
import Service from './Components/Service/Service';

function App() {
  return (
    <div>
      <TopHeader></TopHeader>
      <BottomHeader></BottomHeader>
      <BannerHeader></BannerHeader>
      <About></About>
      <Service></Service>

    </div>
  );
}

export default App;
