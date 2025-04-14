import { createSlice } from '@reduxjs/toolkit';

export const selectNameFilter = (state) => state.filters.name;
const slice = createSlice({
    name: "filters",
    initialState: {
        name: "",
    },
    reducers: {
        changeNameFilter(state, action) {
            
            state.name = action.payload.toLowerCase();
            
        },
    },

});
export const { changeNameFilter } = slice.actions;
export default slice.reducer;

// export const filter = createAction("filter/changeFilter");

// const initialeState = {
//   name: "",
// };

// export default function filterSliceReducer(state = initialeState, action) {
//   switch (action.type) {
//     case "filter/changeFilter":
//       return {
//         ...state,
//         name: action.payload.toLowerCase(),
//       };

//     default:
//       return state;
//   }
// }