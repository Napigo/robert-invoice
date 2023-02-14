import React from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { SearchFilterArea } from "@/components/Invoices/SearchFilterArea";
import { Pagination } from "@/components/Pagination";
import { InvoiceTable } from "@/components/Invoices/Table";

export const InvoiceListingPage: React.FC = () => {
  return (
    <>
      <Box paddingTop="20px" paddingBottom="20px">
        <SearchFilterArea />
      </Box>
      <Box
        display="flex"
        flexDirection={"column"}
        background="pinks"
        paddingTop={"20px"}
        paddingBottom="20px"
      >
        <InvoiceTable />
      </Box>
    </>
  );
};
