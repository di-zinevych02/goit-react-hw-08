import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
    name: "filters",
    initialState: {
        filterValue: "",
    },
    reducers: {
        changeFilter(state, action) {
            
            state.filterValue = action.payload.toLowerCase() || "";
            
        },
    },
});
export const { changeFilter } = slice.actions;
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