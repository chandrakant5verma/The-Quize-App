import React, { useEffect,useState } from 'react'

// import useSelector to fetch state
import { useSelector,useDispatch } from 'react-redux';

// import hooks 
import { useFetchQuestion } from '../hooks/Fetchdata';
import { updateResult } from '../hooks/resultDatahook';
import data from '../Database/Database';

export default function Questions({onChecked}) {


  const [{isLoading,apiData,serverError}]  = useFetchQuestion()
  const questions = useSelector(state => state.questions.queue[state.questions.trace])
  const result =  useSelector(state => state.result.result)
  const {trace}  = useSelector(state=> state.questions)
  const dispatch = useDispatch()
  const [checked,setChecked] = useState(undefined)
  const question = data;


    useEffect(()=>{
      console.log({trace,checked});
      dispatch(updateResult({trace,checked}))

    },[checked])

    const onSelect=(i)=>{
      onChecked(i)
      setChecked(i)
      dispatch(updateResult({trace,checked}))
    }
 


    if(isLoading) return <h3 className='text-light'>IsLoding</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unkown Error"}</h3>
  return (
    <div className='container'>
        <h1 className=' text-light'><div>{questions?.question}</div></h1>

        <ul key={questions?.id}>
        {questions?.options.map((q,i)=>(
            <li key={i}>
            <input type="radio" value={false} name='options' id={`q${i}-option` }onChange={()=>onSelect(i) }/>
            <label htmlFor={`q${i}-option`} className='text-primary'>{q}</label>
            <div className={`check ${result[trace] === i ? 'checked':''}`}></div>
            </li>
            ))}
        </ul>
    </div>
  )
}

