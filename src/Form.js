import React from 'react';
import './Form.css';
// import memesData from './memesData.js'

export default function Form(props){

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
      });
    
    // console.log(props.meme.textLocation);
    // store all images in state
    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, []);

    //async version
    React.useEffect( () =>
    {
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes);

        }
        getMemes()
    }, [])

    function newMeme(e){
        e.preventDefault()
        // console.log('I was clicked');
        // const topTextInput = Document.getQuerySelector('.top-text').innerHTML;
        // const bottomTextInput = Document.getQuerySelector('.bottom-text').innerHTML;
        const randomNumber = Math.floor(Math.random()*allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        // console.log(meme)
        // console.log(props.topText);
    }

    // pass the updated form values to the state
    function handleChange(e){
        const target = e.target;
        const value = target.type ==='checkbox' ? target.checked : target.value;
        const name = target.name;
        // console.log(value);
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]: value, // ensures the right state value is updated.
        }))
        // console.log(meme)
    }

    function saveMeme(e){
        e.preventDefault();
        props.setMemeGrid(
            [...props.memeGrid, meme]
        )
        console.log(props.memeGrid)
        // save in local storage
        localStorage.setItem('memes', JSON.stringify( [...props.memeGrid, meme]))
    }

    return (
        <div className="form--container">
            <form>
                <div className="form--heading">Generate a Meme</div>
                <button className="get-new-meme"onClick={newMeme}>Get a meme image</button>
                <input name="topText" placeholder="Add top text" className="top-text"  type="text" onChange={handleChange}></input>
                <input name="bottomText" placeholder="Add bottom text" className="bottom-text"  type="text" onChange={handleChange}></input>
                <button className="save-meme"onClick={saveMeme}>Save meme</button>
            </form>
            <div className="meme--container">
                <img className="meme--image" src={meme.randomImage} alt="meme"></img>
                <div className="meme--topText meme--text">{meme.topText}</div>
                <div className="meme--bottomText meme--text">{meme.bottomText}</div>
            </div>
            
        </div>

    )
}