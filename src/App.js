import './App.css';
import {useRef, useState} from 'react';
import images from './utils/data';
var i = 0;

function App() {
  const [image, setImage] = useState(images[0]);
  const [counter, setCounter] = useState(0);
  const h1Ref = useRef();
  const btnGoodRef = useRef();
  const btnBadRef = useRef();

  console.log(i)
  
  const clickHandler = (e) => {
    if (i < 8) {
      const answer = e.target.getAttribute('class');
      console.log('answer', answer);
      console.log('image.answer', image.answer);

      if (answer === image.answer) {
        setCounter((prev) => prev + 1);
      }
      setImage(images[++i]);
    }else {
      if (counter >= 5) {
        h1Ref.current.innerText = 'WINNER';
        h1Ref.current.style.color = 'green';

      }else{
        h1Ref.current.innerText = 'LOSER';
        h1Ref.current.style.color = 'red';
      }
      btnGoodRef.current.enabled = false;
      btnBadRef.current.enabled = false;
    }
    
  }

  return (
    <div className="App">
      <nav>
        <h1 ref={h1Ref}>Match Finding App</h1>
        <h3><span>good answers: </span>{counter}</h3>
      </nav>
      <main className={image.real}>
      </main>
      <div className='description'>{image.desc}</div>
      <footer>
        <button ref={btnBadRef} onClick={clickHandler} className='bad'></button>
        <button ref={btnGoodRef} onClick={clickHandler} className='good'></button>
      </footer>
    </div>
  );
}

export default App;
