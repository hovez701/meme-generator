import React from 'react';
import './Form.css';
// import memesData from './memesData.js'

export default function Form(){

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
        textLocation: true
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




    function handleClick(e){
        e.preventDefault()
        console.log('I was clicked');
        // const topTextInput = Document.getQuerySelector('.top-text').innerHTML;
        // const bottomTextInput = Document.getQuerySelector('.bottom-text').innerHTML;
        const randomNumber = Math.floor(Math.random()*allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        console.log(meme)
        // console.log(props.topText);
    }

    // pass the updated form values to the state
    function handleChange(e){
        const target = e.target;
        const value = target.type ==='checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(value);
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]: value, // ensures the right state value is updated.
        }))

        console.log(meme)
    }

    // function handleHover(e){
    //     e.target.classList.toggle('grey');
    // }


    //1. Get the data (fetch)
    //2. Save the data to set
    const [starWarsdata, setStarWarsData] = React.useState();

    console.log("component rendered");

    // side effects
    // local storage, apis, subscriptions (web sockets), synch states
    const [count, setCount] = React.useState(1);
    function buttonClick(){
        setCount(count + 1);
    }
    //when dependency array changes, it will rerun the effect
    React.useEffect(() => {
        console.log('effect ran')
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    }, [count])

    // meme api request




    return (
        <div className="form--container">
            <form>
                <button className="get-new-meme"onClick={handleClick}>Get a new meme</button>
                <input name="topText" placeholder="Top text" className="top-text" value={meme.topText} type="text" onChange={handleChange}></input>
                <input name="bottomText" placeholder="Bottom text" className="bottom-text" value={meme.bottomText} type="text" onChange={handleChange}></input>
            </form>
            <div className="meme--container">
                <img className="meme--image" src={meme.randomImage} alt="meme"></img>
                <div className="meme--topText meme--text">{meme.topText}</div>
                <div className="meme--bottomText meme--text">{meme.bottomText}</div>
            </div>
            <div>g
                <button onClick={buttonClick}>Get Next character</button>
            </div>
            <div>{JSON.stringify(starWarsdata, null, 2)}</div>
            
        </div>

    )
}