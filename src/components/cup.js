import React, { useState, useEffect } from 'react';
// import { render } from "react-dom";
import './cup.css';
import cup from '../images/cup.png';


export default function Cup(props) {
  
  const [cupPositionX,cupPositionSetterX]= useState({left:0 });
  const [cupPositionY,cupPositionSetterY]= useState({top:0});
  const [isOpen,isOpenSetter]= useState(true);

  useEffect(()=> {
    console.log(props.position);
    if(props.position && props.cupIndex===1){
      var indexGap=150;
      var posX= (window.innerWidth/2) + indexGap ;
      cupPositionSetterX(posX)
    }
    else if(props.position && props.cupIndex===2){
      posX= window.innerWidth/2;
      cupPositionSetterX(posX)
    }
    else if(props.position && props.cupIndex===3){
      indexGap=150;
      posX= (window.innerWidth/2) - indexGap ;
      cupPositionSetterX(posX)
    }
    console.log(posX);
  },[props.position] )
  
  useEffect(()=> {
    var posY=  window.innerHeight/2 ;
    cupPositionSetterY(posY)
    setTimeout(()=>{
      isOpenSetter(false)
  },2000)
  },[] )

      // const timeout = setTimeout(() => {
    //   isOpenSetter: false;
    // }, 3000);

  // },[]);



// componentDidMount () {
//   this.timeoutId = setTimeout(function () {
//       this.setState({show: true});
//   }.bind(this), 3000);
// } 




        return (
          <div className="cup" style={{left:cupPositionX + "px" , top:cupPositionY + "px" }} >
              <img id={"cupimage-"+ props.id} className={isOpen ? '--open' : ""}  src={cup} alt='cup' 
              />
          </div>
        );
 }
