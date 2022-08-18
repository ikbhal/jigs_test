import Question from './Question'
import {useState} from 'react';
export default function TakeTest() {

    var qaList = [
        // first question
        //qa
        {
            q: "2+3", //qa.q
            clist: ["2", "5", "6", "8"], //qa.clist
            correctIndex:1 //qa.correctIndex
        },
        //second question
        {
            q: "3-1", clist: ["9","3", "2", "5"],correctIndex:2
        },
        // 2 index 
        {
            q: "2*3", clist: ["4", "5", "3", "6"],correctIndex:3
        }
    ];

    // var correctAnswerText ="";

    var qa = qaList[0];
    var currentQuestionIndex = 0;
    // current Question Index -> cqi
    var [ cqi, setCqi] = useState(0);
    var [qa, setQa] = useState(qaList[0]);
    var [correctAnswer, setCorrectAnswer] = useState("");
    // var userSelectedChoiceIndex = -1;
    // selectedChoice
    var [selectedChoiceIndex, setSelectedChoiceIndex] = useState(-1);//0, 1, 2
    var [selectedChoice,setSelectedChoice] =useState("");
    var [rightAnsCount, setRightAnsCount] = useState(0);
    var [displayTestResult, setDisplayTestResult] = useState(false);
    // var userSelectedChoiceText = "";

    const nextQuestion = () => {
        console.log("will show you next question ");
        //0, 1, 2 < length -1 true, 3<3 false
        //debugger;// code level debug
        incrRightAnsCountIfCorrect();
        if(cqi < qaList.length-1){
            // cqi ++;
            setQa(qaList[cqi+1]);
            setCqi(cqi+1);
            setSelectedChoiceIndex(-1);
            setSelectedChoice("")
            setCorrectAnswer("");
        }else{
            alert("no more question ,we are at the last question")
        }
    }

    const checkAnswer = () => {
       console.log("we are inside checkAnswer function ");
       setCorrectAnswer(qa.clist[qa.correctIndex]);
       if(selectedChoiceIndex != -1){
            setSelectedChoice(qa.clist[selectedChoiceIndex]); 

            //check use selected choice and correctd answer are same
            // incrRightAnsCountIfCorrect();
       }else{
            setSelectedChoice("You did not selected a choice"); 
       }
    }

    function incrRightAnsCountIfCorrect(){
        var ans = qa.clist[qa.correctIndex];
        var userAns = qa.clist[selectedChoiceIndex];
        if(ans == userAns){
            setRightAnsCount(rightAnsCount+1);
        }
    }

    const userSelectedChoice = (choiceIndex) => {
        console.log("I am in userSelectedChoice function , choiceIndex:" + choiceIndex);
        setSelectedChoiceIndex(choiceIndex)
        setSelectedChoice(qa.clist[choiceIndex]);
    };

    const finishTest = () => {
        console.log("inside finishTest function")
        setDisplayTestResult(true)
    }

    const retryTest= () =>{
        console.log("inside retry test");
        setCqi(0)
        setQa(qaList[0]);
        setCorrectAnswer("");
        setSelectedChoiceIndex(-1);
        setSelectedChoice("");
        setRightAnsCount(0);
        setDisplayTestResult(false);
    }
    return (
        <div> 
            {/* <h2>Test</h2> */}
            {/* <p>show question, multiple choice</p> */}
            {/* <p>next butotn, check answer, finish test</p>  */}
            {/* <Question/> */}
            {/* <p>Show current question</p> */}
            <button onClick={checkAnswer}> Check Answer</button>
            <button onClick={nextQuestion}> Next Question</button>
            <button onClick ={finishTest}> Finish Test</button>
            <button onClick ={retryTest}> Retry Test</button>
            
            {displayTestResult && 
                <div id="testResults">
                    Correct Answers {rightAnsCount} <br/>
                    Total Questions {qaList.length}
                </div>  
            }
            <div  className="currentQuestion">
                {correctAnswer && 
                    <div className="correctAnswer">
                        Correct Answer is: 
                        {correctAnswer}
                        <br/>
                        Use selected answer is {selectedChoice}
                    </div>
                }
                <Question 
                    question ={qa.q} 
                    choiceList={qa.clist}
                    userSelectedChoice={userSelectedChoice}/>
            </div>
            {/* {qaList.map( (qa,index) => 
                <div  key={index} className="currentQuestion">
                    <Question question ={qa.q} choiceList={qa.clist}/>
                </div>
            )} */}
            
        </div>
    );
}