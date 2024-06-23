import { useSelector } from "react-redux"
import Loader from "../../components/Loader"
import { FaFireAlt } from "react-icons/fa";
import ProdCard from "./ProdCard";

const ProdDetail = () => {
  const { isLoading, products, restaurant } = useSelector((store) => store.productReducer)


  return (
    <div>
      {isLoading ? <Loader /> : (
        <div>
          <h2 className="text-2xl font-bold flex gap-2 items-center">
          <FaFireAlt className="text-red-500" />
            Popüler
          </h2>
          <p className="text-gray-500 font-semibold">Restoranın en çok tercih edilen ürünleri </p>
        
        <div className="grid grid-col-1 lg:grid-cols-2 gap-5 mt-5 ">
          {
            products.map((product) => <ProdCard key={product.id} product={product} restName={restaurant.name} />)
          }
        </div>
        
        </div>
        
      )}
    </div>
  )
}

export default ProdDetail
