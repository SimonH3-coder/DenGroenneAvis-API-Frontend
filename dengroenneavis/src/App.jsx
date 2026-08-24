import { BrowserRouter, Routes, Route} from "react-router";
import { Productpage} from "./pages/Productpage";
import { Mainlayout } from "./layout/Mainlayout";

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Mainlayout />}>
      <Route path="/" element={<Productpage />} />

      </Route>
      
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
