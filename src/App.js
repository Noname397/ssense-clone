import './index.css';
import Navbar from './components/Navbar/Navbar';
import Mainpage from './components/Mainpage/Mainpage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='px-4 sm:px-9'>
      <Mainpage></Mainpage>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
