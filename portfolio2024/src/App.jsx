import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { ThemeProvider } from './context/themecontext';
function App() {
 
  return (
    <div className="app">
    <ThemeProvider>
    
    <Header/>
      <Router>
        <Routes>
        <Route/>
      
        </Routes></Router>
      </ThemeProvider>
        </div>
  )
}

export default App
