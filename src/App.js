import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
      <div className='container'>
        <div className='header'>
          <Header />
        </div>
        <div className='main-container'>
         {<p>Hello</p>}
        </div>
        <Footer />
      </div>
    );
  };

export default App;
