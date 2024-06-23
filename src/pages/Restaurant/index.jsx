import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Container from "../../components/Container"
import { getDataByRestaurantId } from "../../redux/actions/productActions"
import RestDetail from "./RestDetail"
import ProdDetail from "./ProdDetail"
import Loader from "../../components/Loader"
import Error from "../../components/Error"



const Restaurant = ({ rest }) => {
    let { isLoading, error, restaurant, products } = useSelector((store) => store.productReducer)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataByRestaurantId(id))
    }, [])
    
    return (
        <div>
            <div className="shadow-md">
                <Container >
                    {isLoading
                        ? <Loader />
                        : error
                        ? <Error message={error} retry={ ()=> dispatch(getDataByRestaurantId(id)) }/>
                        : restaurant && (
                            <div className="bg-gray-100 rounded-xl">
                                <RestDetail rest={restaurant} />
                            </div>
                        )}
                </Container>
            </div>

            <Container >
                <ProdDetail />
            </Container>
        </div>
    )
}

export default Restaurant
