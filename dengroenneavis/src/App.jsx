import { BrowserRouter, Routes, Route} from "react-router";
import { Productpage} from "./pages/Productpage";

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Productpage />} />
      
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
