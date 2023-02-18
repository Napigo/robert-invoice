import React, { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  HStack,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Product } from "@/types";
import { truncate, uniqueId } from "lodash";
import { displayCurrency } from "@/utils/currency";
import { Card } from "@/components/UIKit";

type ProductTableProps = {
  sku: string;
  products: Product[];
};
export const ProductTable: React.FC<ProductTableProps> = ({
  sku,
  products,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Accordion allowMultiple width={"100%"} defaultIndex={[0]}>
      <AccordionItem>
        <h2>
          <AccordionButton onClick={handleAccordionClick}>
            <HStack flex="1" textAlign="left" spacing={1} alignItems="center">
              <Text color="gray.500" fontWeight={"bold"}>
                SKU:{" "}
              </Text>
              <Text fontWeight={"semibold"} color="brand.500">
                {sku}
              </Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} pr={0} pl={0}>
          <Table variant="simple" p={0}>
            <Thead>
              <Tr>
                <Th>Product Name</Th>
                <Th>Description</Th>
                <Th>Unit Price</Th>
                <Th>Quantity</Th>

                <Th textAlign={"right"}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((item: Product) => (
                <Tr key={uniqueId()}>
                  <Td>{item.Name}</Td>
                  <Td>{truncate(item.Description, { length: 20 })}</Td>
                  <Td fontWeight={"bold"}>{displayCurrency(item.UnitPrice)}</Td>
                  <Td>{item.Quantity}</Td>
                  <Td minW={"300px"} textAlign="right">
                    <Accordion allowMultiple>
                      <AccordionItem
                        borderColor={"transparent"}
                        _hover={{ bg: "transparent" }}
                        padding={0}
                      >
                        <h2>
                          <AccordionButton
                            p={0}
                            _hover={{ bg: "transparent" }}
                            justifyContent="flex-end"
                          >
                            <Button
                              size={"sm"}
                              rightIcon={<ChevronDownIcon />}
                              bg="transparent"
                              _hover={{ bg: "gray.100" }}
                              _focus={{ bg: "gray.100" }}
                            >
                              Serial numbers
                            </Button>
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          textAlign={"start"}
                          pb={4}
                          as={Card}
                          marginTop={"10px"}
                        >
                          <ul style={{ listStyle: "none" }}>
                            {item.SerialNumbers.map((number) => (
                              <li key={number}>
                                <Link color="brand.500" fontSize={"sm"}>
                                  {number}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Td>
                </Tr>
              ))}
              {/* <Tr>
                <Td>Cell 1</Td>
                <Td>Cell 2</Td>
                <Td>
                  <Accordion allowMultiple>
                    <AccordionItem
                      borderColor={"transparent"}
                      _hover={{ bg: "transparent" }}
                      padding={0}
                    >
                      <h2>
                        <AccordionButton p={0} _hover={{ bg: "transparent" }}>
                          <Button
                            size={"sm"}
                            rightIcon={<ChevronDownIcon />}
                            bg="transparent"
                            _hover={{ bg: "gray.100" }}
                            _focus={{ bg: "gray.100" }}
                            color="blue.400"
                          >
                            Serial numbers
                          </Button>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <ul>
                          {serialNumbers.map((number) => (
                            <li key={number}>{number}</li>
                          ))}
                        </ul>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Td>
              </Tr> */}
            </Tbody>
          </Table>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
