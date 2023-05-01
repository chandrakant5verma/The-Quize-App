import { createSlice } from "@reduxjs/toolkit"

const questioReducer = createSlice({
    name:"questions",
    initialState:{
        queue:[],
        answer:[],
        trace:0
    },
    reducers:{
        startExamAction:(state,action)=>{
            return{
                ...state,
                queue:action.payload
            }
        },
        moveNextAction:(state)=>{
            return{
                ...state,
                trace: state.trace+1
            }
        },
        movePrevAction:(state)=>{
            return{
                ...state,
                trace: state.trace-1
            }
        },
        ResetAllAction:(state,action)=>{
            return{
                queue:[],
                answer:[],
                trace:0
            }
        }
    }
})


export const {startExamAction,moveNextAction,movePrevAction,ResetAllAction}  = questioReducer.actions;
export default questioReducer.reducer;