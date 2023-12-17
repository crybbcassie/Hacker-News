import './App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';
import Links from './route/Links';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <Links/>
      {/* <MainPage/> */}
      {/* <NewsPage/> */}
    </div>
    </>
  );
}

export default App;
