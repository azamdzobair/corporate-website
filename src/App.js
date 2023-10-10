import logo from './logo.svg';
import './App.css';
import TopHeader from './Components/TopHeader/TopHeader';
import BottomHeader from './Components/BottomHeader/BottomHeader';
import BannerHeader from './Components/BannerHeader/BannerHeader';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Members from './Components/Members/Members';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className=''>
      <TopHeader></TopHeader>
      <BottomHeader></BottomHeader>
      <BannerHeader></BannerHeader>
      <About></About>
      <Service></Service>
      <Members></Members>
      <Blog></Blog>
      <Footer></Footer>


    </div>
  );
}

export default App;
