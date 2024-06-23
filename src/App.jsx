import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Header from "./components/Header"
import Restaurant from "./pages/Restaurant"
import Cart from "./pages/Cart"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getCart } from "./redux/actions/cartActions"

const App = () => {
  const dispatch = useDispatch()

  /* useEffect(()=>{
    dispatch(getCart())
  }, []) */
  

  return (
    <BrowserRouter >
      <Header />
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
