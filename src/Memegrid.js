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

    return(
        <div className="memeGridContainer">
            <h2>Meme Bank</h2>
            <div className="memeGrid">
                {props.memeGrid.map((meme, index)=>(
                    <div key={index} className="meme--container">
                        <img className="meme--image" src={meme.randomImage} alt="meme"></img>
                        <div className="meme--topText meme--text">{meme.topText}</div>
                        <div className="meme--bottomText meme--text">{meme.bottomText}</div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}