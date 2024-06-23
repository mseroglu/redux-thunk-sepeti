import { RiErrorWarningFill } from "react-icons/ri";
import { HiOutlineEmojiSad } from "react-icons/hi";


const Error = ({ message, retry }) => {
  return (
    <div className="flex flex-col w-full items-center py-5 rounded-xl bg-slate-300">
      <div className="flex gap-2 w-full bg-red-500 rounded p-2 my-10 ">
        <RiErrorWarningFill className="text-7xl text-white" />
        <div className="text-2xl ">
          <p className="flex items-center gap-2 text-white">Üzgünüz bir hata oluştu <HiOutlineEmojiSad /></p>
          <span >Hata Kodu: {message}</span>
        </div>
      </div>

      <div className="flex justify-center text-xl">
        <button onClick={retry} className="border shadow-md rounded px-5 py-2 font-semibold hover:bg-gray-200 ">Tekrar Dene</button>
      </div>
    </div>

  )
}

export default Error
