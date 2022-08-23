import React from 'react'
import './Memegrid.css'
import './Form.css'

export default function Memegrid(props){
    // delete all saved memes from Local storage
    function deleteAll(){
        // localStorage.clear()
        props.setMemeGrid([]);
    };

    // deletes a single image when clicked on
    function deleteImage(e){
        const selectedMeme = e.target.nextSibling.src;
        console.log(e.target.nextSibling.src);
        console.log(e.target.parentNode.key);

        // delete image from memegrid
        const newMemeGrid = props.memeGrid.filter(meme => meme.randomImage !== selectedMeme);
        props.setMemeGrid(newMemeGrid);
        
    }

    // Ensures synch between local storage and react component
    React.useEffect(()=>{
        localStorage.clear()
        localStorage.setItem('memes', JSON.stringify( [...props.memeGrid]))
    }, [props.memeGrid])

    return(
        
        <div className="memeGridContainer">
            <div className="memeGrid--heading">Meme Bank<button className="memeGrid--deleteAll"onClick={deleteAll}>Delete All</button></div>
        
            <div className="memeGrid">
                {props.memeGrid.map((meme, index)=>(
                    <div key={index} className="meme--container">
                        <button className="meme--delete" onClick={deleteImage}>X</button>
                        <img className="meme--image" src={meme.randomImage}  alt="meme"></img>
                        <div className="meme--topText meme--text">{meme.topText}</div>
                        <div className="meme--bottomText meme--text">{meme.bottomText}</div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}