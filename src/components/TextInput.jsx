import { useRef, useState } from 'react';
import styles from './TextInput.module.css'

export default function TextInput({ placeholder = 'O que está acontecendo?', maxLength, ...props }) {
    const [text, setText] = useState('');
    const inputElement = useRef();

    function onTextChange(event) {
        const text = event.target.value;
        if (text.length <= maxLength) {
            setText(text)
        }
    }

    // console.log(inputElement.current.defaultValue)

    return (
        <div>
            <textarea 
                ref={inputElement}
                className={styles.input} 
                placeholder={placeholder} 
                maxLength={maxLength} 
                defaultValue={10} 
                {...props}
            />
            <p>{text.length} / {maxLength}</p>
            <button onClick={() => console.log(inputElement.current.value)}>Tweetar</button>
        </div>
    )
}