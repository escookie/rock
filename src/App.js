import { useState } from 'react';
import './App.css';
import Box from "./component/Box"

const choice ={
  rock:{
    name:"Rock",
    img:"https://raw.githubusercontent.com/escookie/rock/main/img/rock.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmdqhES9AEhEouS4qL5-hi0HMeHCTA3a6LA&s"
  },
  paper:{
    name:"Paper",
    img:"https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
  }
}

function App() {
  
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect,setComputerSelect] = useState(null)
  const [result,setResult] = useState("")

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice))
  };

  const judgement=(user,computer)=>{
    console.log("user",user,"computer",computer)
    if(user.name === computer.name){
      return "tie"
    }else if (user.name==="Rock")return computer.name==="Scissors"?"win":"lose"
    else if (user.name==="Scissors")return computer.name==="Paper"?"win":"lose"
    else if (user.name==="Paper")return computer.name==="Rock"?"win":"lose"
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice)//객체에 키 값만 뽑아서 어레이로 만들어주는 함수다
    console.log("item array", itemArray)

    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final];
  }

  return (
    <div className='make-center'>      
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <div className='main mobile-display'>
          <button onClick={()=>play("scissors")}>가위</button>
          <button onClick={()=>play("rock")}>바위</button>
          <button onClick={()=>play("paper")}>보</button>
        </div>        
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='main desktop-display'>
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
    )
}

export default App;
