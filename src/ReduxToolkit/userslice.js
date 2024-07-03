import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    datauser: [{ id: 1, firstname: 'Zakaria', lastname: 'Dalimi' }]
};

const userslice = createSlice({
    name : 'user' ,
    initialState ,
    reducers : {
        adduser : (state , action) => {
            state.datauser.push(action.payload)
        },

        updateuser: (state, action) => {
            const index = state.datauser.findIndex(item => item.id === action.payload.user);
            if (index !== -1) {
                state.datauser[index] = {
                    ...state.datauser[index],
                    ...action.payload.oldUser
                };
            }
        },

        deteleuser : (state , action) => {
            state.datauser = state.datauser.filter(item => item.id !== action.payload)
        }
    }

})

export const { adduser , updateuser , deteleuser } = userslice.actions;
export default userslice.reducer;