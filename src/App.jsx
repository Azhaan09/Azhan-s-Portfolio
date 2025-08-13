import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./path/Home"
import NotFound from "./path/NotFound"
import {Toaster} from "@/components/ui/toaster"


function App() {

  return (
    <>
    <Toaster />
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
