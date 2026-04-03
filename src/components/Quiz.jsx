import {useState} from 'react';
import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
export default function Quiz(){
    
    //to register answer selected by the user
    const [userAnswers, setUserAnswers] = useState([]);



    //the activeQuestionIndex can be derived from the answered array only ie if i have answered 2 ques [A,B] the next active 
    //question at which i would be is the length of userAnswer
    const activeQuestionIndex = userAnswers.length;


   


   //when the userAnswer meet the complete answer we are at the end of the quiz
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


    function handleSelectAnswer(selectedAnswer){
        //in the order to also have the previous version of the state it must be passed in the 
        //form of function with the prevState
       setUserAnswers((prevUserAnswers) => {
        //have the prevUser answer into the array and append with the new selected Answer
        return [...prevUserAnswers,selectedAnswer]
       });
    }
    if(quizIsComplete){
        return <div id= "summary">
        <img src= {quizCompleteImg} alt= "Trophy Icon"/>
        <h2>Quiz Completed ! </h2>
        </div>

    }
     const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    //we are shuffling the answer math.random() => 0 to 1 (excluding 1)
    shuffledAnswers.sort(() => Math.random() -0.5 );
    return (
        <div id= "quiz">
         <div id ="questions">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
            {/* to map the list of strings ie answer to list of jsx components */}
            {shuffledAnswers.map((answer)=> (
            <li key ={answer} className ="answer">
                <button onClick = {() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
            ))}
        </ul>
       </div>
        </div>
    );
    
} 