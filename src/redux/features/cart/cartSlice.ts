import { PayloadAction, createSlice } from "@reduxjs/toolkit"

// export interface Cart {
//     _id:string,
//     userId:string,
//     restaurantId:string,
//     cartItem?:Record<any,any>,
//     success?:boolean,
//     message?:string,
// }




interface INITIAL_STATE {
    loading:boolean,
    error:null | string,
    userId:String|null,
    restaurantId:string | null,
    cartItem:Array<any>,
    total:number,
    name:String | null,
    address:String | null
}



const initialCartState:INITIAL_STATE={
    userId:null,
    restaurantId:null,
    cartItem:[],
    loading:false,
    error:null,
    total:0,
    name:null,
    address:null
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialCartState,
    reducers:{
        fetchingCart:(state:INITIAL_STATE)=>{
            state.loading=true
            state.error=null
        },
        fetchedSuccessFully:(state:INITIAL_STATE,action:PayloadAction<any>)=>{
            state.loading=false,
            state.error=null,
            state.userId=action.payload.userId,
            state.restaurantId=action.payload.restaurantId._id,
            state.name=action.payload.restaurantId.name,
            state.cartItem=action.payload.cartItem
            let tempTotal=0
            state.cartItem.map((item:any)=>tempTotal+=parseInt(item.price))
            state.total=tempTotal,
            state.name=action.payload.restaurantId.name,
            state.address=action.payload.restaurantId.address
        },
        fetchedError:(state:INITIAL_STATE,action:PayloadAction<any>)=>{
            state.loading=false,
            state.error=action.payload

        },
        addToCart:(state:INITIAL_STATE,action:PayloadAction<any>)=>{
            state.loading=false,
            state.error=null,
            state.restaurantId=action.payload.resturant._id,
            state.cartItem.push(action.payload)
        },
        removeCart:(state:INITIAL_STATE,action:PayloadAction<any>)=>{
            const filteredData=state.cartItem.filter((item:any)=>item._id!=action.payload._id)
            state.cartItem=[...filteredData]
        },
        addTotal:(state:INITIAL_STATE,action:PayloadAction<any>)=>{
            state.total+=parseInt(action.payload)
        },
        subTotal:(state:INITIAL_STATE,action:PayloadAction<any>)=>{
            state.total-=action.payload
        },
        orderCart:(state:INITIAL_STATE)=>{
            state.userId=null,
            state.restaurantId=null,
            state.cartItem=[],
            state.name=null;
            state.address=null
        },
    }
})

export const {fetchingCart,fetchedSuccessFully,fetchedError,addToCart,orderCart,removeCart,addTotal,subTotal}=cartSlice.actions


export default cartSlice.reducer