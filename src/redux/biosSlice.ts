import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { SortingAndDirection } from 'app/types';

export interface BioState {
  selectedBioId: number | null;
  sortingAndDirection: SortingAndDirection;
  biosIdsArray: number[];
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
  },
});

export const storedBios = (state: RootState): BioState => state.bios;

export const { setBioId, setSortingAndDirection, setBiosIdsArray } =
  biosSlice.actions;
export default biosSlice.reducer;
