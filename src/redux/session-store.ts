import { createAction, createReducer } from "@reduxjs/toolkit";
import type { Session } from "@/types";

export interface SessionState {
  authenticated: boolean;
  authing: boolean;
  session: Session | null;
}

const initialState: SessionState = {
  authenticated: false,
  authing: false,
  session: null,
};

/**
 * Actionc creators
 */
const setSession = createAction<Session | null>("session/set-session");
const clearSession = createAction<void>("session/clear-session");
const isAuthenticated = createAction<boolean>("session/is-authenticated");
const isAuthing = createAction<boolean>("session/is-authing");

const reducer = createReducer<SessionState>(initialState, (build) => {
  build.addCase(setSession, (state, action) => {
    return Object.assign(
      state,
      {},
      {
        session: action.payload,
      }
    );
  });
  build.addCase(clearSession, (state, _) => {
    return Object.assign(
      state,
      {},
      {
        session: null,
      }
    );
  });
  build.addCase(isAuthenticated, (state, action) => {
    return Object.assign(
      state,
      {},
      {
        authenticated: action.payload,
      }
    );
  });
  build.addCase(isAuthing, (state, action) => {
    return Object.assign(
      state,
      {},
      {
        authing: action.payload,
      }
    );
  });
});

/**
 * Export all account related actions via actions object
 */
export const SessionActions = {
  setSession,
  clearSession,
  isAuthenticated,
  isAuthing,
};

export default reducer;
