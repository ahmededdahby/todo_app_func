import React, { useContext  } from 'react'

import axios from 'axios'
import Set from './Set'
import DataContext from '../context/DataContext';

const Data = ( ) => {
    // const [data,setdata] = useState([]);
    // useEffect(()=>{
    //     axios.get('http://localhost:3000/data').then((response)=>setdata(response.data)).catch((error)=>console.log(error));
    // },[])
    const { data } = useContext(DataContext);
 

    return <>
        
        {
            
            data.map(el => <h2 key={el.id}>{el.Name}</h2>)
        }
    
    </>

}

export default Data
