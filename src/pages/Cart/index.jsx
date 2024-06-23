import { useDispatch, useSelector } from "react-redux"
import SepetCard from "./SepetCard"
import Loader from "../../components/Loader"
import Error from "../../components/Error"
import Container from "../../components/Container"
import { getCart } from "../../redux/actions/cartActions"
import { useEffect } from "react"
import { Link } from "react-router-dom"


const Cart = () => {
  let { isLoading, error, cart } = useSelector((store) => store.cartReducer)
  

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCart())
  }, [])

  
  return (
    <Container >
      <h1 className="text-2xl font-semibold">SEPET</h1>
      <div>
        {isLoading
          ? <Loader />
          : error
            ? <Error message={error} retry={dispatch(getCart())} />
            : cart.length === 0
              ? <p className="flex flex-col gap-8 text-center mt-10">Sepet Boş
                <Link to={"/"} className="bg-gray-300 mx-auto p-3 rounded-full hover:bg-gray-400 focus:bg-red-200">Ürün Ekle</Link>
              </p>
              : cart.map((item) => (<SepetCard key={item.id} data={item} />))
        }
      </div>
    </Container>
  )
}

export default Cart
