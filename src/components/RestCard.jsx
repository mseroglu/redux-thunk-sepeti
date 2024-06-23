import { FaStar } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";


const RestCard = ({ rest }) => {


  return (
    <Link to={`/restaurant/${rest.id}`} className="shadow flex flex-col justify-between rounded-lg overflow-hidden hover:bg-gray-100 cursor-pointer hover:shadow-lg my-5">
      <div className="h-full" >
        <img className="w-full h-full object-cover " src={rest.photo} alt={rest.name} />
      </div>

      <div className="py-3 px-2">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">{rest.name}</h3>
          <p className="flex gap-1 items-center">
            <FaStar className="text-red-500" />
            {rest.rating}
          </p>
        </div>

        <p className="text-sm my-2 text-gray-500">
          <span>{rest.minPrice} &#8378; min </span>
        </p>

        <div className="flex gap-10">
          <p className="flex gap-1 items-center text-sm font-semibold">
            <BsClockHistory className="text-lg font-extrabold text-green-600" />
            <span>{rest.estimatedDelivery} dk.</span>
          </p>

          {
            rest.isDeliveryFree && (
              <p className="flex items-center text-sm text-red-500 gap-2 font-bold">
                <MdDeliveryDining className="text-xl" />
                <span>Ücretsiz</span>
              </p>
            )
          }
        </div>

      </div>
    </Link>
  )
}

export default RestCard
