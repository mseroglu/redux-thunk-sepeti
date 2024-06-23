import { BsClockHistory } from "react-icons/bs";
import { FaArrowDown, FaStar } from "react-icons/fa";

const RestDetail = ({ rest }) => {
   
    return (
        <div className="flex gap-5">
            <div className="rounded-xl overflow-hidden ">
                <img className="max-w-64 " src={rest?.photo} alt={rest?.name} />
            </div>
            <div className="flex flex-col justify-between py-1">

                <div className="flex gap-10">
                    <span className="flex gap-2 items-center text-lg font-semibold">
                        <FaArrowDown className="text-lg font-extrabold text-red-500" />
                        min {rest?.minPrice} &#8378;
                    </span>
                    <span className="flex gap-2 items-center text-lg font-semibold">
                        <BsClockHistory className="text-lg font-extrabold text-red-500" />
                        {rest?.estimatedDelivery} dk.
                    </span>
                </div>

                <div className="text-3xl lg:text-4xl font-bold">
                    {rest?.name}                    
                </div>
                
                <div className="flex gap-2 items-center text-lg font-semibold">
                    <FaStar className="text-red-500" />
                    {rest?.rating}
                    <button className="ms-5 px-3 rounded-full text-red-600 hover:bg-red-500 hover:bg-opacity-15 active:bg-opacity-40">Yorumları gör</button>
                </div>

            </div>
        </div>
    )
}

export default RestDetail
