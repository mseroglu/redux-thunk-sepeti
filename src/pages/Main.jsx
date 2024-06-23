import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../components/Loader"
import Error from "../components/Error"
import RestCard from "../components/RestCard"
import { getRestaurants } from "../redux/actions/restaurantActions"
import Container from "../components/Container"

const Main = () => {
    let { isLoading, error, restaurants } = useSelector((store) => store.restaurantReducer)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRestaurants())
    }, [])
    
    return (
        <Container>
            {
                !isLoading & !error ? <h1 className="text-3xl mb-5">Tüm Restoranlar</h1> : ""
            }

            {isLoading
                ? <Loader />
                : error
                ? <Error message={error} retry={() => dispatch(getRestaurants())} />
                : 
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    restaurants?.map(
                        (item) => (
                                <RestCard key={item.id} rest={item} />
                            ))
                }
                
                </div>
                    
            }
        </Container>
    )
}

export default Main
