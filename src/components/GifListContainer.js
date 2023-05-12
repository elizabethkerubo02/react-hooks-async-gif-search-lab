import React, { useEffect, useState } from "react";


function GifListContainer(){
    const [gifList, setGifList] = useState();
    const [search, setSearch] = useState("");

    useEffect(()=>{
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YT0a4gktytEoeiHnkp5gSgo6Ci2XMhzk")

    },[])

}



export default GifListContainer;