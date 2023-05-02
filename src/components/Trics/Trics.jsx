import React, { useEffect, useState } from 'react';
import TricsCard from './TricsCard';

const Trics = () => {

    const [allTrics,setAllTrics] = useState([])

    useEffect(()=>{

        fetch('http://localhost:6005/allTrics')
        .then(res =>res.json())
        .then(data=>setAllTrics(data))
    },[])
    return (
        <div>
            <TricsCard allTrics={allTrics}></TricsCard>
        </div>
    );
};

export default Trics;