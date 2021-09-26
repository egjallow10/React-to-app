const Form = ({setInputtext, todos, setTodos, inputText, setStatus})=>{
    const inputTextHanduler =(e)=>{
        console.log(e.target.value);
        setInputtext(e.target.value);
        e.preventDefault();
    }

    const sumitHandler=(e)=>{
        
        e.preventDefault();
        setTodos([
            ...todos,{text:inputText, completed:false, id:Math.random()*100}
        ]);
        setInputtext('')

    }

    const selectHandler = (e)=>{
        setStatus(e.target.value);
    }
    return(
        <div className="form-div">
        <form>
            <input className="form-input" value={inputText} onChange = {inputTextHanduler} type="text"/>
            <button className="form-button" onClick={sumitHandler}  type='submit'>Add</button>
                <select onChange={selectHandler} className="select-form">
                    <option value='all'>All</option>
                    <option value='Completed'>Completed</option>
                    <option value='unCompleted'>Uncompleted</option>
                </select>
        </form>
        </div>
        
    )
}

export default Form;