import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

                 
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
         <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} /> 
      
   
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
