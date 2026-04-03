import {useState,useCallback, useContext} from 'react';
import QUESTIONS from '../questions';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import quizCompleteImg from '../assets/quiz-complete.png';
export default function Quiz(){
    //This state manages the current answer state 
    const [answerState, setAnswerState] = useState('');
    //to register answer selected by the user
    const [userAnswers, setUserAnswers] = useState([]);



    //the activeQuestionIndex can be derived from the answered array only ie if i have answered 2 ques [A,B] the next active 
    //question at which i would be is the length of userAnswer
    const activeQuestionIndex = 
    answerState === '' ? userAnswers.length : userAnswers.length -1;


   //when the userAnswer meet the complete answer we are at the end of the quiz
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


    const handleSelectAnswer=useCallback( function handleSelectAnswer(selectedAnswer){
        setAnswerState('answered');
        //in the order to also have the previous version of the state it must be passed in the 
        //form of function with the prevState
       setUserAnswers((prevUserAnswers) => {
        //have the prevUser answer into the array and append with the new selected Answer
        return [...prevUserAnswers,selectedAnswer]
       });
       setTimeout(() => {
         if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
            setAnswerState('correct');
         }else{
            setAnswerState('wrong');
         }
         setTimeout(() => {
            setAnswerState('');
         },2000);
       },1000);
    },[activeQuestionIndex]);
    //if time runs out treat as no answer null means user skipped this question 
    const handleSkipAnswer = useCallback(() =>handleSelectAnswer(null),[handleSelectAnswer])
    if(quizIsComplete){
        return <div id= "summary">
        <img src= {quizCompleteImg} alt= "Trophy Icon"/>
        <h2>Quiz Completed ! </h2>
        </div>

    }
   
      
    return (
        <div id= "quiz">
         <div id ="questions">
            <QuestionTimer 
            //whenever the key component is created and then destroyrd its unmounted and remounted that is we have a timer reinitiated wheneer we switch to the new question 
            key ={activeQuestionIndex}
            timeout={10000} onTimeOut = {handleSkipAnswer}/>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <Answers 
        //key is used to force react to destroy and recreate a component 
        key ={activeQuestionIndex}
        answers = {QUESTIONS[activeQuestionIndex].answers} 
        selectedAnswer={userAnswers[userAnswers.length -1]}
        answerState = {answerState}
        onSelect ={handleSelectAnswer}
         />
       </div>
        </div>
    );
    
} 