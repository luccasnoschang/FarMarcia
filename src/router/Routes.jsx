import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Senha from "../pages/Senha";



const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/senha", element: <Senha />},
    
])


export default router;