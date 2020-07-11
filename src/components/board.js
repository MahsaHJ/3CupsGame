import React,{useState, useEffect } from 'react';
import Ball from './ball';
import './cup.css';
import Cup from './cup';
// import Ball from './ball';

export default function Board(props) {


    // shuffle = function(o) { 
    //     for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    //     return o;
    //   };



        const [cup1,cup1Setter]= useState({index:1 , goal:false , position:1});
        const [cup2,cup2Setter]= useState({index:2 , goal:true , position:2});
        const [cup3,cup3Setter]= useState({index:3 , goal:false , position:3});

    //    const {cups}=this.state;
       const [ballIndex, ballindexSetter]= useState(null);

        setTimeout(()=>{
        ballindexSetter(2);
    },1000)

    // var myArray = [
    //   "Apples",
    //   "Bananas",
    //   "Pears"
    // ];
    
    // var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

    var nums = [1, 2, 3];
    var num = nums[Math.floor(Math.random() * nums.length)];


      
      useEffect(() => {
        const swap=(index1, index2)=> {
          cup1Setter({position:index1, ...cup1});
          cup3Setter({position:index2, ...cup3});
        }
        const interval = setInterval(() => {
          swap(num,num);

        }, 6000);
    
        return () => clearInterval(interval);
      }, []);
    
        return(
            <div>
            <Cup id='1'  
            cupIndex={cup1.index}
            goal={cup1.goal}  
            position={cup1.position} 
            
            />
            <Cup id='2'
            cupIndex={cup2.index}
            goal={cup2.goal}  
            position={cup2.position} 
            />
            <Cup id='3'
            cupIndex={cup3.index}
            goal={cup3.goal}  
            position={cup3.position} 
            />
            {/* <Ball ballIndex={cups[1].index} /> */}
            <Ball ballIndex={ballIndex} />
            </div>
        )
}