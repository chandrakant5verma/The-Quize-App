import React from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable';
import '../style/Result.css'

export default function Result() {
    const onRestart=()=> console.log("happy reattamp");
  return (
    <div className='container'>
    <h1 className='title text-light'> Quiz Application</h1>

    <div className="result flex-center">
        <div className="flex">
            <span>Username</span>
            <span>Daily tutor</span>
        </div>
        <div className="flex">
            <span>Total Questions : </span>
            <span>07</span>
        </div>
        <div className="flex">
            <span>Total Attamps : </span>
            <span>30</span>
        </div>
        <div className="flex">
            <span>Quiz Result : </span>
            <span>Passed</span>
        </div>
       
    </div>
    <div className="start">
        <Link className='btn' to={'/'} onClick={()=>onRestart()}>Restart</Link>
    </div>
    <div className="container">
        <ResultTable></ResultTable>
    </div>
    </div>
  )
}
