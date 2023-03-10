import { configureStore } from "@reduxjs/toolkit";
import SessionStore from "./session-store";
import InvoiceFilterStore from "./invoice-filter-store";

export const store = configureStore({
  reducer: {
    Session: SessionStore,
    InvoiceFilter: InvoiceFilterStore,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
