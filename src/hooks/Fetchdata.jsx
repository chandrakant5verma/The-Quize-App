import { useEffect, useState } from "react";
import Database from "../Database/Database";
import { useDispatch } from 'react-redux'

// action
import * as Action from '../Redux/questions_reducer'

// fetching question hooks
export const useFetchQuestion = () => {
    const dispatch = useDispatch()

    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null })

    // async function
    useEffect(() => {

        setGetData(prev => ({ ...prev, isLoading: true }));

        (async () => {
            try {
                let question = await Database;

                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }))
                    setGetData(prev => ({ ...prev, apiData: question }));
                    dispatch(Action.startExamAction(question));
                } else {
                    throw new Error("No Question Available");
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false }))
                setGetData(prev => ({ ...prev, serverError: error }));
            }
        })();

    }, [dispatch])
    return [getData, setGetData];

}

// next action
export const moveNext = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log(error)
    }
}
// next action
export const movePrev = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error)
    }
}