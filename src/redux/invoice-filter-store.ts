import { createReducer, createAction } from "@reduxjs/toolkit";

export interface InvoiceFilter {
  search_term: string;
  invoice_no: string;
  start_at: string;
  end_at: string;
  customer_name: string;
  email_address: string;
  min_amount: number;
  max_amount: number;
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
  search_term: "",
  invoice_no: "",
  start_at: "",
  end_at: "",
  customer_name: "",
  email_address: "",
  min_amount: 0,
  max_amount: 0,
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
