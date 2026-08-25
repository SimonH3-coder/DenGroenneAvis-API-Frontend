import { BrowserRouter, Routes, Route} from "react-router";
import { Productpage} from "./pages/Productpage";
import { Frontpage } from "./pages/Frontpage";
import { Mainlayout } from "./layout/Mainlayout";

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Mainlayout />}>
      <Route path="/" element={<Frontpage />} />
      <Route path="/products" element={<Productpage />} />
      

      </Route>
      
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
