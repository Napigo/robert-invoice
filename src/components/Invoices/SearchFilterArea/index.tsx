import React, { useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Button,
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { TextField } from "@/components/UIKit/Form";
import { Search2Icon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import {
  InvoiceFilter,
  InvoiceFilterActions,
} from "@/redux/invoice-filter-store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { isEmpty } from "lodash";

const COLLAPSED_HEIGHT = 50;

type Props = {
  onSearch: () => void;
};
export const SearchFilterArea: React.FC<Props> = ({ onSearch }) => {
  const dispatch = useDispatch();

  const isFilterActive = useSelector(
    (state: RootState) => state.InvoiceFilter.active
  );

  const formik = useFormik<InvoiceFilter>({
    initialValues: {
      invoice_no: "",
      customer_name: "",
      email_address: "",
    },
    onSubmit(values: InvoiceFilter) {
      /**
       * Wont using redux for this actually
       * Deprecated
       */
      const withFilter = Boolean(
        !isEmpty(values.invoice_no) ||
          !isEmpty(values.customer_name) ||
          !isEmpty(values.email_address)
      );
      if (withFilter) {
        dispatch(InvoiceFilterActions.populateFilter(values));
      } else {
        dispatch(InvoiceFilterActions.clearFilter());
      }

      onSearch();
    },
  });

  const clearFilter = useCallback(() => {
    dispatch(InvoiceFilterActions.clearFilter());
    formik.resetForm();
    onSearch();
  }, [dispatch, formik, onSearch]);

  return (
    <AnimatePresence initial={false}>
      <VStack
        style={{
          width: "100%",
          background: "greens",
          overflowY: "hidden",
          flex: 1,
          paddingLeft: "20px",
          paddingRight: "20px",
          alignItems: "flex-start",
        }}
      >
        <HStack
          width={"100%"}
          height={`${COLLAPSED_HEIGHT}px`}
          background={"pinks"}
        >
          <InputGroup maxW={300}>
            <InputLeftElement
              pointerEvents="none"
              children={<RiSearchLine />}
            />
            <Input
              onChange={formik.handleChange("invoice_no")}
              value={formik.values.invoice_no}
              background="white"
              placeholder="Invoice No."
            />
          </InputGroup>

          <FormControl maxWidth={"300px"}>
            <TextField
              onChange={formik.handleChange("customer_name")}
              value={formik.values.customer_name}
              type="text"
              background={"white"}
              placeholder="Customer Name"
            />
          </FormControl>
          <FormControl maxWidth={"300px"}>
            <TextField
              onChange={formik.handleChange("email_address")}
              value={formik.values.email_address}
              type="text"
              background={"white"}
              placeholder="Email Address"
            />
          </FormControl>
        </HStack>
        <HStack>
          <Button
            background={isFilterActive ? "brand.50" : "white"}
            borderColor={isFilterActive ? "brand.500" : "gray.200"}
            onClick={() => formik.handleSubmit()}
            leftIcon={<Search2Icon />}
            color={isFilterActive ? "brand.500" : "black"}
          >
            Search
          </Button>
          {isFilterActive && (
            <Link
              as="button"
              onClick={clearFilter}
              alignItems={"center"}
              color="brand.500"
            >
              <Text>Clear Filter</Text>
            </Link>
          )}
        </HStack>
      </VStack>
    </AnimatePresence>
  );
};
