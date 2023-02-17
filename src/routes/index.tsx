import React from "react";
import { routerConfig } from "@/configs/router.config";
import { CoreLayout } from "@/layouts/CoreLayout";
import { InvoiceListingPage } from "@/pages/Invoices/InvoiceListingPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { InvoiceDetail } from "@/pages/Invoices/InvoiceDetail";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CoreLayout />}>
        <Route index element={<Navigate to={routerConfig.invoice.path} />} />

        <Route
          path={routerConfig.invoice.path}
          element={<InvoiceListingPage />}
        />
        <Route
          path={`${routerConfig.invoice.path}/:invoice_no`}
          element={<InvoiceDetail />}
        />
      </Route>

      <Route path="*" element={<Navigate to={routerConfig.invoice.path} />} />
    </Routes>
  );
};
