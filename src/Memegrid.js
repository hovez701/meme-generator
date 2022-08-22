import React from 'react'
import './Memegrid.css'
import './Form.css'

export default function Memegrid(props){
    // console.log(props.memeGrid);
    // console.log('test');
    // let html = ''
    // props.memeGrid.forEach(x =>{
    //     console.log(x)
    //     html = html.concat(
    //         `<div>${x.topText}</div>`
    //     )
    // }
    // );
    // console.log(html);

    // delete all saved memes from Local storage
    function deleteAll(){
        localStorage.clear()
        props.setMemeGrid([]);
    };

    function deleteImage(e){
        const selectedMeme = e.target.src
        console.log(selectedMeme);

        function test(){
            console.log(props.memeGrid)
        }

        // delete image from memegrid
        props.setMemeGrid(props.memeGrid.filter(meme => meme.randomImage !== selectedMeme))
        setTimeout(test,6000);
        // delete image from local storage 
        //delete by index to avoid cases where image, and meme text are the same?
        localStorage.clear()
        localStorage.setItem('memes', JSON.stringify( [...props.memeGrid]))


    }

    return(
        
        <div className="memeGridContainer">
            <div className="memeGrid--heading">Meme Bank</div>
            <button className="memeGrid--button"onClick={deleteAll}>Delete All</button>
            <div className="memeGrid">
                {props.memeGrid.map((meme, index)=>(
                    <div key={index} onClick={deleteImage} className="meme--container">
                        <img className="meme--image" src={meme.randomImage}  alt="meme"></img>
                        <div className="meme--topText meme--text">{meme.topText}</div>
                        <div className="meme--bottomText meme--text">{meme.bottomText}</div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}