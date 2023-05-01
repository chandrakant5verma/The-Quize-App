import * as Action from '../Redux/result_reducer'

export const resultHook =(result)=> async(dispatch)=>{
    try {
        await  dispatch(Action.AnswerPushMAn(result))
        console.log(Action.AnswerPushMAn(result))
    } catch (error) {
        console.log('error', error)
    }
}

export const updateResult = (index,checked) => async(dispatch)=>{
    try {
        dispatch(Action.updateResultAction(index,checked))
    } catch (error) {
        console.log(error)
    }

}