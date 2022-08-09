import React from 'react';
import ReactDOM from 'react-dom/client';
import  Quiz from './Quiz'
import {nanoid} from 'nanoid'
import Hello from './Hello'
export default function Game(){
    const [Questions , setQuestions] = React.useState([])
    const [coninute, setConinute] = React.useState(false)
    const [isCheck, setIsCheck] = React.useState(false)
    const [start,setStart] = React.useState(false)
    let text
    function getQuestions(){ 
        fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple').then(res=>res.json()).then(info =>{
            const data = info.results
            const formatedData = []
            data.map(item => formatedData.push(
                {
                    question :item.question,
                     correct_answer: item.correct_answer,
                     shuffled_answers : [...item.incorrect_answers, item.correct_answer].sort(() => (Math.random() > .5) ? 1 : -1),
                     selcted : ""}))
                     setQuestions(formatedData)
        })}
    React.useEffect(()=>{getQuestions()} , [])    

    function Started (){
        setStart(true)
    }

    function startOver(event){
        event.preventDefault()
        setIsCheck(false)
        getQuestions()
        setStart(false)
      }
function handleSelect(selectedIndex,answer){
    setQuestions(prevQuestions => prevQuestions.map((question, index) => (
        index === selectedIndex ? {...question, selcted: answer} : question)))
}
function handleCheck(event) {
    event.preventDefault()
    let isAllSelected = true
    Questions.map(item => (item.selected === "" && (isAllSelected = false)))  //If the user answer all questions
    if(isAllSelected)
      setIsCheck(true)
  }
    function checkCorrect(){
        let score;
        score = 0;
        Questions.map(item => (item.selcted === item.correct_answer && (score+=1)))
        text = `Your scored ${score} / 5`
        return score
    }
    const quizArray = Questions.map((x,index) => <Quiz Itemindex={index} selcted = {x.selcted} Question = {x.question} answers={x.shuffled_answers} setSelcted= {handleSelect}/>)

    return(
        <div className='Container'>
        {start ? 
        <div className='Game'>
            {quizArray}
            {isCheck && <p>You scored {checkCorrect()}/5 correct answers</p>}
            <button className="checkAnswers" onClick={isCheck ? startOver : handleCheck}>{isCheck ? "Play Again" : "Check Answers"}</button>
            
        </div>
         : <Hello onClick = {Started} />}
        </div>

    )
}