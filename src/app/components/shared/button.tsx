import {FC} from "react"
const Button: FC <{text: string}> = ({text})=>{

    return(
        <button
         className="bg-[#00616C] text-white px-8 py-3 m-2
          rounded-full text-lg font-normal hover:shadow-lg hover:bg-red-500 hover:scale-105 duration-300">{text}</button>
    )
}

export default Button