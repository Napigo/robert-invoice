import React, { useState } from "react";
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
  Skeleton,
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
    data: response,
    error,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ["invoices", currentPage],
    queryFn: () => fetchInvoices(currentPage, active ? filterObject : null),
    keepPreviousData: true,
    staleTime: 5000,
    cacheTime: 5000,
  });

  const data = response?.data;

  const showLoader = Boolean(isLoading || isFetching);

  return (
    <TableContainer width="100%" position={"relative"}>
      <Table variant={showLoader ? "simple" : "striped"}>
        <Thead>
          <Tr>
            <Th>Invoice No.</Th>
            <Th>Customer Name</Th>
            <Th>Grand Total</Th>
            <Th>Purchased at</Th>
            <Th isNumeric>Action</Th>
          </Tr>
        </Thead>

        <Tbody>
          {showLoader ? (
            <>
              {new Array(3).fill(0).map(() => (
                <Tr key={uniqueId()} background="transparent">
                  <Td colSpan={5}>
                    <Skeleton
                      startColor="gray.200"
                      endColor="gray.100"
                      width={"100%"}
                      height="25px"
                      borderRadius={"lg"}
                    />
                  </Td>
                </Tr>
              ))}
            </>
          ) : (
            <>
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
                  <Td fontSize={14}>{displayCurrency(item.grandTotal)}</Td>
                  <Td fontSize={14}>{item.datePurchased}</Td>
                  <Td isNumeric>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        icon={<IoEllipsisVertical />}
                      />
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
            </>
          )}
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
          totalCount={data?.total_counts ?? 0}
          countPerPage={20}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </Flex>
    </TableContainer>
  );
};
