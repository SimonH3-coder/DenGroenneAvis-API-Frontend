import { BrowserRouter, Routes, Route} from "react-router";
import { Productdetailspage } from "./pages/Productdetailspage";
import { Productpage} from "./pages/Productpage";
import { Frontpage } from "./pages/Frontpage";
import { Loginpage } from "./pages/Loginpage";
import { Mainlayout } from "./layout/Mainlayout";
import { Signuppage } from "./pages/Signuppage";
import { Accountprofilpage} from "./pages/Accountprofilpage";

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Mainlayout />}>
      <Route path="/" element={<Frontpage />} />
      <Route path="/products" element={<Productpage />} />
      <Route path="/productdetails" element={<Productdetailspage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<Signuppage />} />
      <Route path="/accountprofile" element={<Accountprofilpage />} />
      

      </Route>
      
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
