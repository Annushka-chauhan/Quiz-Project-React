
import {useRef} from 'react';
export default function Answers({answers,selectedAnswer,answerState ,onSelect}){
    const shuffledAnswers =useRef();
     if(!shuffledAnswers.current){
    shuffledAnswers.current = [...answers];
    //we are shuffling the answer math.random() => 0 to 1 (excluding 1)
    shuffledAnswers.current.sort(() => Math.random() -0.5 );
    }
    return (
        <ul id="answers">
            {/* to map the list of strings ie answer to list of jsx components */}
            {shuffledAnswers.current.map((answer)=> {
                const isSelected = selectedAnswer === answer;
                let cssClass= '';
                if(answerState === 'answered' && isSelected) {
                    cssClass = 'selected';
                }
                if((answerState === 'correct' || answerState === 'wrong') && isSelected ){
                    cssClass = answerState;
                }
          return   <li key ={answer} className ="answer">
                <button onClick = {() => onSelect(answer)} className ={cssClass} >{answer}</button>
            </li>
             }
            )}
        </ul>
    );
}