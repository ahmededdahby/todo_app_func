import React, { useContext } from 'react'

import axios from 'axios'
import Set from './Set'

import { context } from '../App';

const Data = () => {
    // const [data,setdata] = useState([]);
    // useEffect(()=>{
    //     axios.get('http://localhost:3000/data').then((response)=>setdata(response.data)).catch((error)=>console.log(error));
    // },[])
    const { data, deleteItem } = useContext(context);
    const deleteTask = (id) => {
        deleteItem(id);
        console.log(id)
      };


    return <>

        {

            data.map(el =>
                <div key={el.id}>
                    <h2 >{el.Name}</h2>
                    <button onClick={()=>deleteTask(el.id)}>X</button>
                </div>

            )
        }

    </>

}

export default Data
