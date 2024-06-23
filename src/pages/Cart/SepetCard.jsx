import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../../redux/actionTypes";
import { deleteItem, updateItem } from "../../redux/actions/cartActions";

const SepetCard = ({ data }) => {
    const dispatch = useDispatch()

    const arttir = () => dispatch(updateItem(data.id, data.amount + 1))    

    const azalt = () => dispatch(updateItem(data.id, data.amount - 1))
    
    const sil = () => dispatch(deleteItem(data.id))

    return (
        <div className="flex gap-5 border p-2 shadow-lg rounded-lg overflow-hidden my-3 relative">
            <div>
                <img className="w-[160px] rounded-md" src={data.photo} alt={data.title} />
            </div>
            <div className="flex flex-col justify-between">
                <h2 className="text-2xl font-semibold">{data.title}</h2>
                <p>{data.restaurantName}</p>
                <p className="text-xl font-semibold">{data.price} ₺ </p>
            </div>
            <div className="flex gap-1 shadow-lg border border-gray-300 rounded-full bottom-4 right-2 items-center absolute">
                {
                    data.amount < 2
                        ? <button onClick={sil} className="text-red-500 text-2xl hover:bg-gray-200 rounded-full p-1 active:bg-red-200"><MdDeleteOutline /></button>
                        : <button onClick={azalt} className="text-red-500 hover:bg-gray-200 rounded-full p-2 active:bg-red-200"><FaMinus /></button>
                }
                <p className="font-semibold text-xl ">{data.amount}</p>
                <button onClick={arttir} className="text-red-500 hover:bg-gray-200 rounded-full p-2 active:bg-red-200"><FaPlus /></button>
            </div>
        </div>
    )
}

export default SepetCard
