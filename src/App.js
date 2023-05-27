import { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ContentContainer from './components/MainContent/ContentContainer';
import { ThemeContext } from './components/ThemContext/ThemContext';
import CountryDetail from './components/MainContent/CountryDetail/index.js';
import Footer from './components/Footer';

function App() {
  const ThemContext = useContext(ThemeContext)
  return (
    <div id="App" className={ThemContext.theme}>
      <Router>
        <Header/>
        <ContentContainer>
        <Routes>
          <Route exact path='/' element={<MainContent/>}/>
          <Route exact path='/region/:regionName' element={<MainContent/>}/>
          <Route exact path='/country/:countryName' element={<CountryDetail/>}/>
          <Route exact path='/search/:name' element={<MainContent/>}/>
        </Routes>
        </ContentContainer>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

