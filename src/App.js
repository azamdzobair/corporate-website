import logo from './logo.svg';
import './App.css';
import TopHeader from './Components/TopHeader/TopHeader';
import BottomHeader from './Components/BottomHeader/BottomHeader';
import BannerHeader from './Components/BannerHeader/BannerHeader';
import About from './Components/About/About';

function App() {
  return (
    <div>
      <TopHeader></TopHeader>
      <BottomHeader></BottomHeader>
      <BannerHeader></BannerHeader>
      <About></About>

    </div>
  );
}

export default App;
