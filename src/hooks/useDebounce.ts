import { useEffect, useState } from "react"


const useDebounce = (name:string)=>{
    const [data,setData]=useState("")

    useEffect(()=>{
        
       const timeout=setTimeout(()=>{
            setData(name)
        },300)
        return ()=>clearTimeout(timeout)
    },[name])


    return data
}

export default useDebounce