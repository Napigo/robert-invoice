import React from "react";
import { routerConfig } from "@/configs/router.config";
import { CoreLayout } from "@/layouts/CoreLayout";
import { InvoiceListingPage } from "@/pages/invoices/InvoiceListingPage";
import { OrderListingPage } from "@/pages/orders/OrderListingPage";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CoreLayout />}>
        <Route index element={<Navigate to={routerConfig.invoice.path} />} />
        <Route
          path={routerConfig.invoice.path}
          element={<InvoiceListingPage />}
        />
        <Route path="*" element={<Navigate to={routerConfig.invoice.path} />} />
      </Route>
    </Routes>
  );
};
