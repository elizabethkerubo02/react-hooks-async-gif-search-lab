import react from "react";

import "./App.css"

function GifList({gifList}){
    const theImages = gifList && gifList.map((data,index) => (
        <li  className="list" key={index}>
            <img className="img" src={data.images.original.url} alt={data.title} />
            <p>Rating: {data.rating}</p>

        </li>
    ));
    return (
        <div className="container"> <ul className="gifs">{theImages}</ul> </div>
    )
}

export default GifList;