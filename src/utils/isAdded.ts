import { useAppSelector } from "../redux/app/hook";


const {cartItem} =useAppSelector((state)=>state.cartSlice)


export const isAdded  = (id:string)=>{
    return cartItem.find((item:any)=>item._id === id)
}