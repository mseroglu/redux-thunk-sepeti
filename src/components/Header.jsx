import { Link } from "react-router-dom"
import { FaOpencart } from "react-icons/fa6";
import Container from "./Container";

const Header = () => {
    return (
        <header className="shadow">
            <Container>
                <div className="flex justify-between items-center">

                    <Link to={"/"} className="text-2xl font-[700] text-red-500">
                        REDUX-THUNK SEPETİ
                    </Link>

                    <div className="flex gap-4">
                        <button className="border border-red-500 text-red-500 py-1 px-3 
                        rounded transition hover:bg-red-500 hover:text-white">
                            Giriş Yap
                        </button>
                        <button className="bg-red-500 text-white py-1 px-3 
                        rounded transition hover:brightness-75 ">
                            Kayıt Ol
                        </button>
                        <Link to={"/cart"} className="hover:bg-red-500 hover:bg-opacity-20 p-2 hover:rounded-full">
                            <FaOpencart className="text-2xl text-red-500" />
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
