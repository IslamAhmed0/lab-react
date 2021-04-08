import {useEffect} from "react";

const {useState} = require("react");


const Seconds=({minutes,setminutes})=>{

    const [seconds,setseconds]=useState(minutes*60);



    useEffect(()=>{
        if (setseconds===0) {
            setminutes(0);
        }
    },[seconds,setminutes])




    useEffect(()=>{
        setseconds(minutes*60);
    },[minutes])



    useEffect(()=>{
        const countdown=
        setInterval(()=>{setseconds(prevState=> prevState-1)},1000);


        return ()=>clearInterval(countdown);

    },[]);






    return <h1>{`${seconds}` }second</h1>




}
export default Seconds;