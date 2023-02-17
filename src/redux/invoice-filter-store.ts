import { createReducer, createAction } from "@reduxjs/toolkit";

export interface InvoiceFilter {
  invoice_no: string;
  customer_name: string;
  email_address: string;
}

export interface InvoiceFilterStore extends InvoiceFilter {
  is_dirty: boolean;
  active: boolean;
}

/**
 * @Action
 */
export const populateFilter = createAction<InvoiceFilter>(
  "INVOICE-FILTER/populate-filter"
);
export const clearFilter = createAction<void>("INVOICE-FILTER/clear-filter");
export const isFilterActive = createAction<boolean>("INVOICE-FILTER/is-active");

const initialState: InvoiceFilterStore = {
  invoice_no: "",
  customer_name: "",
  email_address: "",
  is_dirty: false,
  active: false,
};

const reducer = createReducer<InvoiceFilterStore>(initialState, (build) => {
  build.addCase(populateFilter, (state, action) => {
    return {
      ...action.payload,
      is_dirty: true,
      active: true,
    };
  });
  build.addCase(clearFilter, (_, __) => {
    return initialState;
  });
  build.addCase(isFilterActive, (state, action) => {
    return Object.assign(state, {}, { active: action.payload });
  });
});

export const InvoiceFilterActions = {
  populateFilter,
  clearFilter,
  isFilterActive,
};
export default reducer;
