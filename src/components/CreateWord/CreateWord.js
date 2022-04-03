import React, { useState } from 'react'
import axios from "axios";

const CreateWord = () => {

    const [word, setWord] = useState({
        word:"",
    });
    
    const createWord = () => {
        axios.post('http://localhost:5000/words', word).then(()=>{
            window.location.reload(false);
    })
    }
  return (
    <div>
        <input type="text" placeholder="Word" value={word.word} 
        onChange={(event) =>{setWord({...word, word:event.target.value})}}/>
        <button onClick={createWord}>Create</button>
    </div>
  )
}

export default CreateWord