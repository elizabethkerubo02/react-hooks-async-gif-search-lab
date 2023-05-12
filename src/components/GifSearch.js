import React from "react";


function GifSearch({handler, setSearch}){
    return(
        <div>
            <form onSubmit={handler}>
                <input type="text" placeholder="eg dolphin..." onChange={(e)=>setSearch(e.target.value)} />
                <button onClick={handler}>Search Gifs</button>

            </form>
        </div>
    )
}

export default GifSearch;