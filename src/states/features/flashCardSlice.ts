import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FlashCardState {
    showFront: boolean;
    showBack: boolean;
  }
  
  const initialState: FlashCardState = {
    showFront: true,
    showBack: false,
  };

  export const flashCardSlice = createSlice({
    name: 'flashCardSlice',
    initialState,
    reducers: {
      setFrontCard: (state, { payload }: PayloadAction<boolean>) => {
        state.showFront = payload
      },
      setBackCard: (state, { payload }: PayloadAction<boolean>) => {
        state.showBack = payload
      }
    },
  });

export default flashCardSlice.reducer;

export const { 
    setFrontCard,
    setBackCard
} = flashCardSlice.actions;
