import { configureStore } from "@reduxjs/toolkit";

import { dataSlice } from "./data";
import { linkwordsSlice } from "./linkwords";
import { verbsSlice } from "./verbs";
import { adjectivesSlice } from "./adjectives";
import { firstconditionalSlice } from "./firstconditional";
import { zeroconditionalSlice } from "./zeroconditional";

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    linkwords: linkwordsSlice.reducer,
    verbs: verbsSlice.reducer,
    adjectives: adjectivesSlice.reducer,
    firstconditional: firstconditionalSlice.reducer,
    zeroconditional: zeroconditionalSlice.reducer,
  },
});
