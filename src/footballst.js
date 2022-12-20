
import React, {useState} from "react";
import Style from "./style.module.css";

function Footballst() {

  const [ball, setballpos]= useState({
    x:  50,
    y:  50
  });

  let [home, sethome] = useState(0);

 

  let [opponent, setopponent] = useState(0);
 



  const up = () => {
    if(ball.y > 5){
      setballpos({
        ...ball,
        y: ball.y - 5
      })  
    }
  }
  const down = () => {
    if(ball.y < 95){
      setballpos({
        ...ball,
        y: ball.y + 5
      })
    } 
  }
  const right = () => {
    if(ball.x < 95){
      setballpos({
        ...ball,
         x: ball.x + 5  
      });
    }
    if(ball.x >= 95){
      sethome(home += 1);
      setballpos({x:50,y:50});
    }
    
  }
  const left = () => {
    if(ball.x > 5){
      setballpos({
        ...ball,
        x: ball.x - 5 
      });
    }
    if(ball.x <= 5){
      setopponent(opponent += 1);
      setballpos({x:50,y:50});
    }  
  }


  
  
  return (
    <div className={Style.ground}>
      <span>Home {home}</span>
      <span>Opponent {opponent}</span>
      <div className={Style.stadium}>
        <div className={Style.leftbasket}></div>
        <div className={Style.ball} style= {{top: ball.y + "%", left: ball.x + "%"}}></div>
        <div className={Style.rightbasket}></div>
      </div>
      <div>
        <button onClick={() => up()}>up</button>
        <button onClick={() => right()}>right</button>
        <button onClick={() => left()}>left</button>
        <button onClick={() => down()}>down</button>
      </div>
    </div>
  );
}

export default Footballst;
