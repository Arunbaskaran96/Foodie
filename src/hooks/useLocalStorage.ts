
const useLocalStorage = (key:string)=>{
    const setItem = (value:string)=>{
        window.localStorage.setItem(key,JSON.stringify(value))
    }
    const getItem = ()=>{
        const user=window.localStorage.getItem(key)
        return user ? JSON.parse(user) : undefined
    }
    const removeItem = ()=>{
        window.localStorage.removeItem(key)
    }

    return {setItem,getItem,removeItem}
}

export default useLocalStorage