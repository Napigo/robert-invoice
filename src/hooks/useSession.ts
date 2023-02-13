import { SessionActions } from "@/redux/session-store";
import { RootState } from "@/redux/store";
import { isEmpty } from "lodash";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useSession = () => {
  const dispatch = useDispatch();

  const { session, authenticated, authing } = useSelector(
    (state: RootState) => state.Session
  );

  /**
   *
   */
  const checkAuth = useCallback(() => {
    dispatch(SessionActions.isAuthing(true));
    const jwt = localStorage.getItem("SESSION");
    if (!isEmpty(jwt)) {
      dispatch(
        SessionActions.setSession({
          jwtToken: jwt as string,
          displayName: "robert-invoice",
        })
      );
      dispatch(SessionActions.isAuthenticated(true));
      dispatch(SessionActions.isAuthing(false));
      return;
    }

    dispatch(SessionActions.isAuthenticated(false));
    dispatch(SessionActions.isAuthing(false));
  }, []);

  /**
   *
   */
  const createSession = useCallback((token: string) => {
    dispatch(SessionActions.isAuthing(true));
    localStorage.setItem("SESSION", token);
    dispatch(
      SessionActions.setSession({
        jwtToken: token,
        displayName: "robert-invoice",
      })
    );
    dispatch(SessionActions.isAuthenticated(true));
    setTimeout(() => {
      dispatch(SessionActions.isAuthing(false));
    }, 2000);
  }, []);

  const clearSession = useCallback(() => {
    dispatch(SessionActions.isAuthing(true));
    localStorage.removeItem("SESSION");
    dispatch(SessionActions.clearSession());
    dispatch(SessionActions.isAuthenticated(false));
    dispatch(SessionActions.isAuthing(false));
  }, []);

  return {
    session,
    authenticated,
    authing,
    checkAuth,
    createSession,
    clearSession,
  };
};
