import create from 'zustand'
import { persist } from 'zustand/middleware'
import { useEffect } from "react";

let store:any = (set:any) => ({
  User: 'DDDD',
  
  addUser: ()=> set((state:any) =>({User: state.User})),

});



store = persist(store,{name:'myUser'})
 
export const useStore:any = create(store)



