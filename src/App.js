import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { mainTheme, GlobalStyle } from './globalStyle';
import { Home, Planets, SinglePlanet, Characters, SingleCharacter, Error } from './pages/index';

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planet/:planetId" element={<SinglePlanet />} />
            <Route path='/characters' element={<Characters />} />
            <Route path='/character/:characterId' element={<SingleCharacter />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
