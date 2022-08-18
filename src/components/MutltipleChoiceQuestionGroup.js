export default function MultipleChoiceQuestionGroup({choiceList, userSelectedChoice}){
    console.log("choiceList in mcq group", choiceList);
    if(choiceList ){
        console.log("choiceList is not empty")
    }else{
        console.log("choice list is empty");
    }
    return (
        <div className="mulitpleChoiceGroup">
            {/* <p>show mulitple choice using checkbox</p> */}
            {choiceList && choiceList.map( (choice, index) => 
                <span key={index} className="choice">
                    <input type="checkbox" 
                        name={"choice"+index}  
                        id={"choice"+index}
                        value={index}
                        onClick={e =>userSelectedChoice(index)}
                    >
                    </input>   
                    <label forName={"choice"+index}>{choice}</label>
                </span>
            )}
        </div>
    );
}