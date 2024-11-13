import { useState } from 'react';
import styles from './TextInput.module.css'

export default function TextInput(props) {
    const [tweetList, setTweetList] = useState([]);

    // function sendTweet() {
    //     setTweetList([...tweetList, text])
    //     setText('');
    // }

    return (
        <div>
            <textarea
                className={styles.input}
                {...props}
            />
            {/* <button onClick={sendTweet}>Enviar</button>
            {tweetList.map((tweet) => { 
                return (
                    <p>{tweet}</p>
                ) 
            })} */}
        </div>
    )
}