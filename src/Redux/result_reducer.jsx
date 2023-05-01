import { createSlice } from "@reduxjs/toolkit";

const resultReducer = createSlice({
    name:"result",
    initialState:{
        userId:null,
        result:[]
    },
    reducers:{
        setUserId:(state,action)=>{
            state.userId  = action.payload
        },
        AnswerPushMAn:(state,action) =>{
            state.result.push(action.payload)
        },
        resetAllAction:()=>{
            return{
                userId:null,
                result:[]
            }
        },
        updateResultAction:(state,action)=>{
            
                const { trace,checked} = action.payload;
                state.result.fill(checked,trace,trace+1)            
        },
    }
})

export const {setUserId,AnswerPushMAn,resetAllAction,updateResultAction}  = resultReducer.actions;
export default resultReducer.reducer;