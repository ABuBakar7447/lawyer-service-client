import { useEffect } from "react";

//creating dynamic title

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Lawyer Hub`
    },[title])
}

export default useTitle;