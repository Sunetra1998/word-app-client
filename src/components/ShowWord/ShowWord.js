import React, { useEffect, useState } from 'react'
import axios from "axios";

const ShowWord = () => {

    const [wordsList, setWordList] = useState([]);
    const [word, setWord] = useState({
        word:"",
    });
    
    const [edit, setEdit] = useState(false);
    
    const deleteWord = (id) => {
      axios.delete(`http://localhost:5000/words/${id}`).then(() => {
        window.location.reload(false);
      })
    }
    
      const updateWord = (id) => {
        axios.put(`http://localhost:5000/words/${id}`).then((allWords) => {
            setWordList(allWords.data);
            console.log("sunetra");
        })
      }

    useEffect(()=>{
        axios.get('http://localhost:5000/words').then( (allWords)=>{
            setWordList(allWords.data);
        })

    }, [])
  return (
    <div>
          {wordsList && wordsList.map((word, key) => (
              <div key={key}>
                  <div>{word.word }</div>
                  <button onClick={() => {setEdit(true);console.log(edit);}}>Edit</button>
                  {edit && (
                      <div>
                  <input type="text" onChange={(event) =>{setWord({...word, word:event.target.value})}}/>
                  <button type="submit" onClick={()=>updateWord()}>Update</button>
                  </div>
                  )}
                  <button onClick={() => deleteWord(word._id)}>Delete</button>
              </div>
          ))}

    </div>
  )
}

export default ShowWord