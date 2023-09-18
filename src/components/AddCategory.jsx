import {useState} from "react";


// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One Punch');
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
    const onSubmit=(event)=>{
        event.preventDefault();

        if(inputValue.trim().length<=1){
            return
        }
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='buscar Gif'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )

}