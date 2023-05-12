import React, { useEffect, useState } from "react";
import GifSearch from './GifSearch';
import GifList from './GifList'


function GifListContainer(){
    const [gifList, setGifList] = useState();
    const [search, setSearch] = useState("");

    useEffect(()=>{
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YT0a4gktytEoeiHnkp5gSgo6Ci2XMhzk")
        .then(res => res.json())
        .then((gifList) => setGifList(gifList.data.slice(0,3)))

    },[search])
    console.log(gifList);

    function submitHandler(e){
        e.preventDefault()
    }
    


    return(
        <div>
            <GifSerach setSearch={setSearch} handler={submitHandler} />
            <GifList gifList={gifList} />
        </div>
    )

}



export default GifListContainer;