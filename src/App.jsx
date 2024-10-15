import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import ExplorePage from './components/ExplorePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddImagePage from "./components/AddImagePage";
import ImagePage from "./components/ImagePage";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #265C5B;
    margin: 0;
    padding: 0;
    font-family: 'Afacad Flux', Arial, sans-serif;
    text-decoration: none;

  }
`;

function App() {

  return (
    <>
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />

      
        <Routes>
           <Route path="/" element={<ExplorePage />}/>
            <Route path="/add-image" element={<AddImagePage />}/>
            <Route path="/images/:imageId" element={<ImagePage />}/>
        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
