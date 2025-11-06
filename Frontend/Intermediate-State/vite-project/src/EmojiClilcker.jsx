import {useState } from "react";
import {v4 as uuid} from "uuid";


export default function EmojiClicker() {
    const randomEmoji = () => {
        const emojis = ["😀", "😂", "😍", "😎", "🤔", "😴", "😡", "🥳", "😇", "🤖"];
        return emojis[Math.floor(Math.random() * emojis.length)];
    }
    
    // Updating the complete array
    
const heart = () =>{
        setEmoji((e) =>
         e.map((emoji) =>{
            return {...emoji, emoji:"❤️"}
        })
 )}
    const [emoji, setEmoji] = useState([{id:uuid(), emoji:"😀"}]);
    function addEmoji() {
        setEmoji((e) => [...e,{id:uuid(), emoji:randomEmoji()}]);
    }
    const deleteEmoji = (id) => {
        setEmoji((e)=>{
                return e.filter((e)=> e.id !== id)              
            })
    }
    return <>

    {emoji.map((e,) => 
        <span onClick={()=> deleteEmoji(e.id)} key={e.id} style={{fontSize: '2rem'}}>{e.emoji}</span>)
    }

    <button onClick={addEmoji}>Add Emoji</button>
    <button onClick={heart}>Make heart</button>
    </>;
}