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
  Button,
  IconButton,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { generateMockInvoices } from "@/lib/mocks/invoice.mocks";
import { Invoice } from "@/types";
import { uniqueId } from "lodash";
import { displayCurrency } from "@/utils/currency";

export const InvoiceTable: React.FC = () => {
  const data = useMemo(() => {
    return generateMockInvoices(20, 10);
  }, []);
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
          {data.map((item: Invoice) => (
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
                    <MenuItem>Delete Invoice</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
