import React from "react";
import { Flex, VStack } from "@chakra-ui/react";
import { SearchFilterArea } from "@/components/Invoices/SearchFilterArea";
import { Pagination } from "@/components/Pagination";
import { InvoiceTable } from "@/components/Invoices/Table";

export const InvoiceListingPage: React.FC = () => {
  return (
    <VStack flex={1} background="blu" paddingTop={"20px"} paddingBottom="20px">
      <SearchFilterArea />
      <InvoiceTable />
      <Flex
        width={"100%"}
        display={"flex"}
        flexDirection={"row"}
        alignItems="center"
        justifyContent={"flex-end"}
        paddingLeft={"20px"}
        paddingRight={"20px"}
      >
        <Pagination
          totalCount={100}
          countPerPage={20}
          onPageChange={(page: number) => {}}
        />
      </Flex>
    </VStack>
  );
};
