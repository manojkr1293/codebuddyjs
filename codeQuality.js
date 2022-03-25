//level 1


import React, {useState} from 'react';
const [items, setItems] = useState([]);

async function GET_daTA() {
    
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(response => {
        setItems(response.result);
        console.log(response.result);
    }).catch(err => console.error(err));


    return (
        <div>
        { (items.map((item) =>
                       
                        <h4>{item.title}</h4>)
                    )
        }
        </div>
    )
  }
 


export default GET_daTA;