import './App.css'
import Counter from './components/Counter';
import LikeButton from './components/LikeButton';
import LoginForm from './components/LoginForm';
import { useEffect, useState } from 'react';

function App(){
    const [quotes, setQuotes] = useState([]); // غير اسم state لـ products
    
    useEffect(() => {
        fetch("https://dummyjson.com/quotes")
            .then(res => res.json())
            .then(data => {
                console.log(data); // تأكد من شكل البيانات في الكونسول
                setQuotes(data.quotes);
            })
            .catch(error => console.error('خطأ:', error));
    }, []);

    return (
        <div className="App">
            <ul>
                {quotes.map(quote => (
                    <li key={quote.id}>
                        {quote.quote} - {quote.author} <br />
                    </li>
                ))}
            </ul>
            
            <hr />
            <Counter />
            <LikeButton />
            <LoginForm />
        </div>
    );
}

export default App