import {useState} from 'react';

export default function Quiz(){
    //one way is by useState is the one way of managing which question should be displayed to the user
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    //to register answer selected by the user
    const [userAnswers, setUserAnswers] = useState([SS])
    return <p>Currently active Question</p>
}