import React, { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { IoFilterCircleOutline } from "react-icons/io5";
import { InvoicePeriod } from "./InvoicePeriod";
import { TextField } from "@/components/UIKit/Form";
import { Search2Icon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import {
  InvoiceFilter,
  InvoiceFilterActions,
} from "@/redux/invoice-filter-store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const COLLAPSED_HEIGHT = 50;
const EXPANDED_HEIGHT = 320;

export const SearchFilterArea: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const dispatch = useDispatch();

  const isFilterActive = useSelector(
    (state: RootState) => state.InvoiceFilter.active
  );

  const formik = useFormik<InvoiceFilter>({
    initialValues: {
      search_term: "",
      invoice_no: "",
      start_at: "",
      end_at: "",
      customer_name: "",
      email_address: "",
      min_amount: 0,
      max_amount: 0,
    },
    onSubmit(values: InvoiceFilter) {
      dispatch(InvoiceFilterActions.populateFilter(values));
      console.log(values);
    },
  });

  const clearFilter = useCallback(() => {
    dispatch(InvoiceFilterActions.clearFilter());
    formik.resetForm();
    setIsExpanded(false);
  }, [dispatch, formik]);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={{ height: isExpanded ? COLLAPSED_HEIGHT : EXPANDED_HEIGHT }}
        animate={{ height: isExpanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT }}
        transition={{ duration: 0.3 }}
        style={{
          width: "100%",
          background: "greens",
          overflowY: "hidden",
          flex: 1,
          paddingLeft: "20px",
          paddingRight: "20px",
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
              onChange={formik.handleChange("search_term")}
              value={formik.values.search_term}
              background="white"
              placeholder="Search invoices"
            />
          </InputGroup>

          <Button
            background={isFilterActive ? "brand.50" : "white"}
            borderColor={isFilterActive ? "brand.500" : "gray.200"}
            onClick={() => setIsExpanded(!isExpanded)}
            leftIcon={<IoFilterCircleOutline />}
            color={isFilterActive ? "brand.500" : "black"}
          >
            Filter
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
        <VStack>
          <HStack
            background={"pinka"}
            width="100%"
            height="inherit"
            alignItems={"flex-start"}
            paddingTop={"20px"}
            paddingBottom={"0px"}
          >
            <FormControl maxWidth={"300px"}>
              <FormLabel>Invoice no.</FormLabel>
              <TextField
                onChange={formik.handleChange("invoice_no")}
                value={formik.values.invoice_no}
                background={"white"}
              />
            </FormControl>
            <FormControl maxWidth={"300px"}>
              <FormLabel>Min Amount</FormLabel>
              <TextField
                onChange={formik.handleChange("min_amount")}
                value={formik.values.min_amount}
                type="number"
                background={"white"}
              />
            </FormControl>
            <FormControl maxWidth={"300px"}>
              <FormLabel>Max Amount</FormLabel>
              <TextField
                onChange={formik.handleChange("max_amount")}
                value={formik.values.max_amount}
                type="number"
                background={"white"}
              />
            </FormControl>

            <InvoicePeriod />
          </HStack>
          <HStack
            background={"pinks"}
            width="100%"
            height="inherit"
            alignItems={"flex-end"}
            paddingTop={"20px"}
            paddingBottom={"0px"}
          >
            <FormControl maxWidth={"300px"}>
              <FormLabel>Customer Name</FormLabel>
              <TextField
                onChange={formik.handleChange("customer_name")}
                value={formik.values.customer_name}
                type="text"
                background={"white"}
              />
            </FormControl>
            <FormControl maxWidth={"300px"}>
              <FormLabel>Email Address</FormLabel>
              <TextField
                onChange={formik.handleChange("email_address")}
                value={formik.values.email_address}
                type="text"
                background={"white"}
              />
            </FormControl>
          </HStack>
          <HStack
            background={"pinks"}
            width="100%"
            height="inherit"
            alignItems={"flex-end"}
            paddingTop={"20px"}
            paddingBottom={"0px"}
          >
            <Button
              onClick={() => formik.handleSubmit()}
              leftIcon={<Search2Icon />}
              colorScheme={"brand"}
            >
              Search Filter
            </Button>
            <Button onClick={clearFilter} background={"white"}>
              Clear
            </Button>
          </HStack>
        </VStack>
      </motion.div>
    </AnimatePresence>
  );
};
