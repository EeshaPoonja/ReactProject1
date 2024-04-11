import React from 'react'
export function Steps(props){
    return <div><h1>hii {props.hi}</h1></div>
}
export function Note(props){
    console.log(props.id);
   
return <div key={props.id} contentEditable={true} spellCheck={false}>{props.text}</div>
}