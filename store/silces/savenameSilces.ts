import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import { RootState } from "../store";


type SavenameSilces = {
    name: string;
    
  };

const initialValues:SavenameSilces ={
    name:"",
   
}

const savenameSilces = createSlice({
    name:"savename",
    initialState:initialValues,
    reducers:{
        userInter:(state:SavenameSilces ,action:PayloadAction<string>)=>{

            state.name = action.payload;
           // initialValues.name = action.payload;
        }

    },
    extraReducers:(builder)=>{},

});

export const {userInter} = savenameSilces.actions;
export const savenameSelector = (store: RootState) => store.Name_User;
export default savenameSilces.reducer;