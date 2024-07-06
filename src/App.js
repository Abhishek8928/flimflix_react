import { Outlet } from "react-router-dom";
import Sidenav from "./Components/Sidenav";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex box-border bg-[#1F1E24]">
    
        
          <Sidenav />

          <Outlet />
        
        
  
    
    
    </div>

    </>
  );
}

export default App;
