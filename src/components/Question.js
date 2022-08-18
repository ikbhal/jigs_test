
import MultipleChoiceQuestionGroup from "./MutltipleChoiceQuestionGroup";
export default function Question({question,  choiceList, userSelectedChoice}){
    console.log("question component: question property:" + question);

    return (
        <div className="qa">
            {/* multiple choice question test here */}
            <div className="question">q:{question}</div>
            <MultipleChoiceQuestionGroup 
                choiceList={choiceList}
                userSelectedChoice={userSelectedChoice}/>
        </div>
    );
}