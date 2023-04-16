import { useEffect, useMemo, useState } from "react"
import "./app.css"
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start"

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("0 gallons");


  const data = [
    {
      id: 1,
      question: "What is the plant closest to the Sun?",
      answers: [
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mercury",
          correct: true,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is the fifth planet from the Sun?",
      answers: [
        {
          text: "Jupiter",
          correct: true,
        },
        {
          text: "Uranus",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
        {
          text: "Earth",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "In 2006 Pluto was no longer counted as being a planet. How many known planets are there in our solar system now? is the fifth planet from the Sun?",
      answers: [
        {
          text: "12",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "8",
          correct: true,
        },
        {
          text: "7",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What is the Sun?",
      answers: [
        {
          text: "Dwarf Planet",
          correct: false,
        },
        {
          text: "Planet",
          correct: false,
        },
        {
          text: "Star",
          correct: true,
        },
        {
          text: "Meteor",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which planet has the most visible rings?",
      answers: [
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Neptune",
          correct: false,
        },
        {
          text: "Mercury",
          correct: false,
        },
        {
          text: "Saturn",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Who is the first man to walk on the moon?",
      answers: [
        {
          text: "Neil Armstrong",
          correct: true,
        },
        {
          text: "None",
          correct: false,
        },
        {
          text: "Buzz Aldrin",
          correct: false,
        },
        {
          text: "Yuri Gagarin",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the name of our galaxy?",
      answers: [
        {
          text: "Cow Way",
          correct: false,
        },
        {
          text: "Milk Way",
          correct: false,
        },
        {
          text: "Milky Way",
          correct: true,
        },
        {
          text: "Milky Bar",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which of these planets is furthest from the Sun?",
      answers: [
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Neptune",
          correct: true,
        },
        {
          text: "Saturn",
          correct: false,
        },
        {
          text: "Uranus",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which of these planets supports intelligent life?",
      answers: [
        {
          text: "Earth",
          correct: true,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
        {
          text: "Pluto",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "All the planets travel around the sun in a specifc pathway. What is this pathway called?",
      answers: [
        {
          text: "No plants travel around the sun",
          correct: false,
        },
        {
          text: "Orbit",
          correct: true,
        },
        {
          text: "Rotation",
          correct: false,
        },
        {
          text: "Circumference",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(() => 
    [
    {id:1, amount: "1000 gallons"}, 
    {id:2, amount: "2000 gallons"}, 
    {id:3, amount: "3000 gallons"}, 
    {id:4, amount: "5000 gallons"}, 
    {id:5, amount: "10000 gallons"}, 
    {id:6, amount: "20000 gallons"}, 
    {id:7, amount: "40000 gallons"}, 
    {id:8, amount: "80000 gallons"}, 
    {id:9, amount: "160000 gallons"}, 
    {id:10, amount: "320000 gallons"}, 
  ].reverse(),
  []);
  

  useEffect(() => {
    questionNumber >1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber-1).amount);
  },[moneyPyramid, questionNumber])

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
        <div className="main">
        {timeOut ? ( 
        <h1 className = "endText">You earned: {earned} </h1> 
        ) : (
          <>
          <div className="top">
          <div className="timer">
            <Timer 
            setTimeOut={setTimeOut}
            questionNumber={questionNumber}
            />
          </div>
        </div>
        <div className="bottoms">
          <Trivia 
          data={data} 
          setTimeOut={setTimeOut} 
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber} 
          />
        </div>
      </>
      )}

      </div>
      <div className="pyramid">
        <ul className="gasList">
          {moneyPyramid.map((m) => (
          <li className={questionNumber === m.id ? "gasListItem active" : "gasListItem" }> 
          <span className = "gasListItemAmount">{m.amount}</span>
        </li>
          ))}
        </ul>
      </div>
        </>
      )}
    </div>
  );
}

export default App;
