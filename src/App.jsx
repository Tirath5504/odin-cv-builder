import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

function App() {
  return (
    <div className="container">
      <Header className='header' />
      <Main className='main' />
      <Footer />
    </div>
  );
}

export default App;
