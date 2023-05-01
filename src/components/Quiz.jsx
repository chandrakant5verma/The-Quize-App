import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { useSelector, useDispatch } from "react-redux";
import { moveNext, movePrev } from "../hooks/Fetchdata";
import { resultHook } from "../hooks/resultDatahook";
import { Navigate } from 'react-router-dom'


export default function Quiz() {
  const [Checke, setChecke] = useState(undefined)
  const result = useSelector(state => state.result.result)
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(result)
  });
  const onPrev = () => {
    if (trace > 0) {
      dispatch(movePrev());
      //   console.log('trace', trace)
    }
  };
  const onNext = () => {
    if (trace < queue.length - 1) {
      dispatch(moveNext());
      //   console.log('trace', trace)
      if (result.lenght < trace) {
        dispatch(resultHook(Checke))

      }
    }
  };

  function onChecked(i) {
    setChecke(i)
  }

  // finished exam after the last question
  if (result.length && result.length >= queue.length - 1) {
    return <Navigate to={'/Result'} replace={true}></Navigate>
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <Questions onChecked={onChecked}></Questions>

      <div className="grid">
        {trace > 0 ? <button className="btn prev" onClick={() => onPrev()}>
          Prev
        </button> : <div></div>}
        <button className="btn next" onClick={() => onNext()}>
          Next
        </button>
      </div>
    </div>
  );

}