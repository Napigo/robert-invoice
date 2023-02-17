import React, { useEffect } from "react";
import { useSession } from "@/hooks/useSession";
import { AuthLoginPage } from "@/pages/Auth/AuthLoginPage";
import { AppRoutes } from "@/routes";
import { AppLoader } from "./AppLoader";

export const App: React.FC = () => {
  const { checkAuth, authing, authenticated } = useSession();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (authing) {
    return <AppLoader />;
  }
  if (!authing && !authenticated) {
    return <AuthLoginPage />;
  }
  return <AppRoutes />;
};

/**
 * ---------------------------------------------------------------------------
 */
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6In
//JvYmVydC1pbnZvaWNlIiwiaWF0IjoxNTE2MjM5MDIyfQ.ZcYOSENZYoN
//1H1geu8pdUm9wpnYNlb0ndCcmG7oGRy4
// {
//     "sub": "1234567890",
//     "name": "robert-invoice",
//     "iat": 1516239022
//   }
