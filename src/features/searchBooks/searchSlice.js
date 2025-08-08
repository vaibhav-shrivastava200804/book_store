import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title:"",
  value: {
    docs: [],
    numFound: 0
  },
};

export const setSearchSlice = createSlice({
  name: 'setSearchBooks',
  initialState,
  reducers: {
    setTitle:(state,action) =>{
      state.title=action.payload;
      console.log(state.title)
    },
    setSearchBooks: (state, action) => {
      state.value = {
        docs: action.payload.docs,
        numFound: action.payload.numFound,
      };
      console.log(state.value.docs)
    },
  },
});

export const { setSearchBooks,setTitle } = setSearchSlice.actions;

export default setSearchSlice.reducer;

