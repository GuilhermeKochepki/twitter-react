import { useState } from "react";
import TextInput from "../components/TextInput";
import Tweet from "../components/Tweet";
import styles from './Index.module.css'

export default function Index() {
    const [text, setText] = useState('');
    const [tweetList, setTweetList] = useState([]);
    const maxLength = 125;

    const tweet = {
        date: new Date(),
        text: text,
        user: {
            name: 'Guilherme Kochepki',
            username: '@guilherme.kochepki',
            picture: 'https://github.com/GuilhermeKochepki.png'
        }
    }
    
    function onTextChange(event) {
        const text = event.target.value;
        if (text.length <= maxLength) {
            setText(text)
        }
    }

    function sendTweet() {
        setTweetList([...tweetList, tweet])
        setText('');
    }

    return (
        <div>
            <h1 className={styles.pageTitle}>TreinaTweet</h1>
            <div className={styles.tweetContainer}>
                <img 
                    className={styles.avatar}
                    src={'https://github.com/GuilhermeKochepki.png'}
                    alt="" 
                />
                <TextInput 
                    placeholder={'O que está acontecendo?'} 
                    maxLength={125} 
                    value={text}
                    onChange={onTextChange}
                />
            </div>
            <div className={styles.buttonContainer}>
                <div>{text.length} / {maxLength}</div>
                <button 
                    className={styles.postButton}
                    onClick={sendTweet}
                >
                    Tweetar
                </button>
            </div>

            <ul className={styles.tweetList}>
                {tweetList.map((tweet) => { 
                    return (
                        <li className={styles.tweetListItem}><Tweet tweet={tweet} /></li>
                    ) 
                })}
            </ul>
        </div>
    )
}