import React, { Component } from "react";

class IterationSample extends Component{
    //key값을 설정할 때 index값으로 주면 안된다는 이슈 체크

    render(){
        const animals = [
            {id : 1, animal: '강아지'}, 
            {id : 2, animal: '고양이'}, 
            {id : 3, animal: '곰'}, 
            {id : 4, animal: '기린'}
        ]
        
        const animalsList = animals.map(
            (animals) => (<li key = {animals.id}>{animals.animal}</li>)
           // key = {animals.id}
        );
        
        console.log(animalsList)
        
    return(
          <ul>
         <h1>동물 리스트</h1>
         {animalsList}
        </ul>
        );

    }

}

export default IterationSample;