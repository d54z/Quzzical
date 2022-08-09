import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Quiz(props){
    const {Itemindex} = props

    function answerStatus(answer){
        console.log(props.selcted)
        if(props.selcted === answer){
            return "selcted"
        } if (props.isCheck && answer === props.correct_answer){
            return "right"
        } else if (props.isCheck === true) {
            return "wrong"
        }
    }
    return(
            <div className='Question'> 
             <h1 className='ques'>{props.Question}</h1>
             <div onClick={()=>{props.setSelcted(Itemindex,props.answers[0])}}   className={'Answer' + answerStatus(props.answers[0])}>{props.answers[0]}</div>
             <div onClick={()=>{props.setSelcted(Itemindex,props.answers[1])}}   className={'Answer' + answerStatus(props.answers[1])}>{props.answers[1]}</div> 
             <div onClick={()=>{props.setSelcted(Itemindex,props.answers[2])}}   className={'Answer' + answerStatus(props.answers[2])}>{props.answers[2]}</div> 
             <div onClick={()=>{props.setSelcted(Itemindex,props.answers[3])}}   className={'Answer' + answerStatus(props.answers[3])}>{props.answers[3]}</div>
            
            </div>
    )
}

