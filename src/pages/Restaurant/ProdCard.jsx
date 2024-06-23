import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updateItem } from "../../redux/actions/cartActions";


const ProdCard = ({ product, restName }) => {
    const { cart } = useSelector((store) => store.cartReducer)
    const found = cart.find((item) => item.productId === product.id)
    const dispatch = useDispatch()

    const handleAdd = () => {
        found ? dispatch(updateItem(found.id, found.amount + 1))
            : dispatch(addToBasket(product, restName))
    }

    return (
        <div className="card border shadow-md rounded-md p-3 transition hover:bg-pink-100">
            <div className="flex flex-col justify-between">
                <div >
                    <h2 className="text-xl font-bold mb-3">{product.title}</h2>
                    <p className="font-semibold text-gray-600">{product.desc}</p>
                </div>
                <p className="font-bold text-xl">{product.price}  &#8378; </p>
            </div>

            <div className="bg-gray-200 p-3 rounded-3xl w-[160px] h-[160px] relative">
                <img className="w-full h-full" src={product.photo} alt={product.title} />
                <button onClick={handleAdd} className="absolute w-8 h-8 grid place-items-center rounded-full bg-white font-semibold text-lg right-5 bottom-5 hover:bg-red-100 transition">
                    {found ? <span className="font-bold">{found.amount}</span> : <FaPlus />}
                </button>
                
            </div>
        </div>
    )
}

export default ProdCard
