import react from "react";

function GifList({dataFetch}){
    const theImages = dataFetch && dataFetch.map((data,index) => (
        <li key={index}>
            <img  src={data.images.original.url}/>

        </li>
    ));
    return <ul>{theImages}</ul>
}

export default GifList;