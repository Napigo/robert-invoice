import React, { useMemo } from "react";
import { ProductTable } from "@/components/Products/ProductTable";
import { Card } from "@/components/UIKit";
import { fetchInvoiceDetail } from "@/lib/apis/invoice-service";
import { groupProductsBySKU } from "@/lib/helpers/groupProductBySKU";
import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { uniqueId } from "lodash";
import moment from "moment";
import { useParams } from "react-router-dom";

export const InvoiceDetailPage: React.FC = () => {
  const param = useParams();

  const { invoice_no } = param;
  const { data: response, isLoading } = useQuery({
    queryKey: ["invoice-details", invoice_no],
    queryFn: () => fetchInvoiceDetail(invoice_no ?? ""),
  });

  const data = response?.data;

  const skusProduct = useMemo(() => {
    const a = groupProductsBySKU(data?.Products ?? []);
    return Object.entries(a);
  }, [data]);

  if (!isLoading && data !== undefined) {
    return (
      <VStack
        background="y"
        overflow="scroll"
        height="100%"
        padding={"20px"}
        gap={2}
      >
        <HStack width="100%">
          <VStack gap={0} spacing={0} alignItems="flex-start">
            <Heading
              as="h3"
              size="md"
              fontWeight={"extrabold"}
              color="gray.700"
            >
              INVOICE
            </Heading>
            <HStack color="brand.500">
              <Text fontWeight={"semibold"}>Invoice No:</Text>
              <Text fontWeight={"semibold"}>{data?.InvoiceNo}</Text>
            </HStack>
          </VStack>
        </HStack>

        <Card width={"100%"}>
          <SimpleGrid columns={4} spacing={0} width="100%">
            <Box bg="tomatos" height="80px" width="100%">
              <VStack spacing={0} width="inherit" alignItems={"flex-start"}>
                <Text color="brand.500" fontWeight={"bold"}>
                  Customer Name
                </Text>
                <Text>{data.CustomerName}</Text>
              </VStack>
            </Box>
            <Box bg="tomatos" height="80px" width="100%">
              <VStack spacing={0} width="inherit" alignItems={"flex-start"}>
                <Text color="brand.500" fontWeight={"bold"}>
                  Email
                </Text>
                <Text>{data.Email}</Text>
              </VStack>
            </Box>
            <Box bg="tomatos" height="80px" width="100%">
              <VStack spacing={0} width="inherit" alignItems={"flex-start"}>
                <Text color="brand.500" fontWeight={"bold"}>
                  Contact
                </Text>
                <Text>{data.ContactNo}</Text>
              </VStack>
            </Box>
            <Box bg="tomatos" height="80px" width="100%">
              <VStack spacing={0} width="inherit" alignItems={"flex-start"}>
                <Text color="brand.500" fontWeight={"bold"}>
                  Date Purchased
                </Text>
                <Text>{moment(data.DatePurchased).format("Do MMM YYYY")}</Text>
              </VStack>
            </Box>
            <Box bg="tomatos" height="80px" width="100%">
              <VStack spacing={0} width="inherit" alignItems={"flex-start"}>
                <Text color="brand.500" fontWeight={"bold"}>
                  Grand Total
                </Text>
                <Text fontWeight={"bold"}>{data.GrandTotalPrice}</Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Card>

        <HStack width="100%" paddingTop={"50px"} bg={"pinsk"}>
          <VStack gap={0} spacing={0} alignItems="flex-start">
            <Heading
              as="h3"
              size="md"
              fontWeight={"extrabold"}
              color="gray.700"
            >
              Purchased Items
            </Heading>
          </VStack>
        </HStack>

        {skusProduct.map((item) => {
          return (
            <ProductTable key={uniqueId()} sku={item[0]} products={item[1]} />
          );
        })}
      </VStack>
    );
  }
  return (
    <Box
      height="100%"
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Spinner colorScheme={"brand"} size="lg" thickness="4px" />
    </Box>
  );
};
