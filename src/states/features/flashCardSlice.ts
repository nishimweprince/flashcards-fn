import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FlashCardState {
    showFront: boolean;
    showBack: boolean;
    flashcard: {}
  }
  
  const initialState: FlashCardState = {
    showFront: true,
    showBack: false,
    flashcard: {}
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
      },
      createFlashCard: (state, { payload }: PayloadAction<object>) => {
        console.log(payload)
      },
    },
  });

export default flashCardSlice.reducer;

export const { 
    setFrontCard,
    setBackCard,
    createFlashCard
} = flashCardSlice.actions;
