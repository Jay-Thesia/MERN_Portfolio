import axios from 'axios'
import React from 'react'
import { createContext } from 'react'

export const DataContext=createContext();
export const DataProvider=({children})=>{
    return(
        <DataContext.Provider value='hello form context'>
            {children}
        </DataContext.Provider>
    );
}