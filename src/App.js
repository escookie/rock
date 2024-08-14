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
    img:"https://raw.githubusercontent.com/escookie/rock/main/img/scissors.png"
  },
  paper:{
    name:"Paper",
    img:"https://raw.githubusercontent.com/escookie/rock/main/img/paper.png"
  }
}

function App() {
  
  const [userSelect, setUserSelect] = useState({
    name: "게임을",
    img: "https://www.menupan.com/Event/2013/01_rps/img/rps_all.gif" // 기본 이미지
  })
  const [computerSelect,setComputerSelect] = useState({
    name: "시작합니다!",
    img: "https://www.menupan.com/Event/2013/01_rps/img/rps_all.gif" // 기본 이미지
  })
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
    <div>      
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <div className='main mobile-display'>
          <button onClick={()=>play("scissors")}>가위</button>
          <button button onClick={()=>play("rock")}>바위</button>
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
