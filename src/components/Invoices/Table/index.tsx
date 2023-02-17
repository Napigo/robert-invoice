import React, { useMemo, useState } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { IoEllipsisVertical } from "react-icons/io5";
import { Invoice } from "@/types";
import { uniqueId } from "lodash";
import { displayCurrency } from "@/utils/currency";
import { Pagination } from "@/components/Pagination";
import { fetchInvoices } from "@/lib/apis/invoice-service";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const InvoiceTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { is_dirty, active, ...filterObject } = useSelector(
    (state: RootState) => state.InvoiceFilter
  );

  const {
    status,
    data: response,
    error,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["invoices", currentPage],
    queryFn: () => fetchInvoices(currentPage, active ? filterObject : null),
    keepPreviousData: true,
    staleTime: 5000,
  });

  const data = response?.data;

  if (!isFetching && data) {
    return (
      <TableContainer width="100%">
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Invoice No.</Th>
              <Th>Customer Name</Th>
              {/* <Th>Contact No.</Th>
            <Th>Email</Th> */}
              <Th>Grand Total</Th>
              <Th>Purchased at</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.results.map((item: Invoice) => (
              <Tr key={uniqueId()}>
                <Link
                  as={Td}
                  maxW={200}
                  fontSize={14}
                  wordBreak="break-all"
                  _hover={{ color: "brand.500" }}
                >
                  {item.invoiceNo}
                </Link>

                <Td fontSize={14}>{item.customerName}</Td>
                {/* <Td fontSize={14}>{item.contactNo}</Td>
              <Td fontSize={14}>{item.email}</Td> */}
                <Td fontSize={14}>{displayCurrency(item.grandTotal)}</Td>
                <Td fontSize={14}>{item.datePurchased}</Td>
                <Td isNumeric>
                  <Menu>
                    <MenuButton as={IconButton} icon={<IoEllipsisVertical />} />
                    <MenuList>
                      <MenuItem>
                        <Text
                          fontSize={"sm"}
                          fontWeight="semibold"
                          color="red.500"
                        >
                          Delete Invoice
                        </Text>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Flex
          padding={"20px"}
          width="100%"
          display={"flex"}
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Pagination
            totalCount={data.total_counts}
            countPerPage={20}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </Flex>
      </TableContainer>
    );
  }
  return (
    <div>
      <span>Loading</span>
    </div>
  );
};
