import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Biography, SortingAndDirection } from 'app/types';

export interface BioState {
  selectedBioId: number | null;
  sortingAndDirection: SortingAndDirection;
  biosIdsArray: number[];
  biosSearched: Biography[];
}

const initialState: BioState = {
  selectedBioId: null,
  sortingAndDirection: {
    sorting: 'alphabetic',
    direction: 'asc',
    subwayLine: 'all',
    category: 'all',
  },
  biosIdsArray: [],
  biosSearched: [],
};

export const biosSlice = createSlice({
  name: 'biosState',
  initialState,
  reducers: {
    setBioId: (state, action: PayloadAction<number>) => {
      state.selectedBioId = action.payload;
    },
    setSortingAndDirection: (
      state,
      action: PayloadAction<SortingAndDirection>
    ) => {
      state.sortingAndDirection = action.payload;
    },
    setBiosIdsArray: (state, action: PayloadAction<number[]>) => {
      state.biosIdsArray = action.payload;
    },
    setSearchedBios: (state, action: PayloadAction<Biography[]>) => {
      state.biosSearched = action.payload;
    },
    reset: () => initialState,
  },
});

export const storedBios = (state: RootState): BioState => state.bios;

export const {
  setBioId,
  setSortingAndDirection,
  setBiosIdsArray,
  setSearchedBios,
  reset,
} = biosSlice.actions;
export default biosSlice.reducer;
