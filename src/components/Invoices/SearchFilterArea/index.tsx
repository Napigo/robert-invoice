import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { IoFilterCircleOutline } from "react-icons/io5";
import DateRangePicker from "./DateRangePicker";

const COLLAPSED_HEIGHT = 50;
const EXPANDED_HEIGHT = 200;

export const SearchFilterArea: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
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
          <InputLeftElement pointerEvents="none" children={<RiSearchLine />} />
          <Input background="white" placeholder="Search invoices" />
        </InputGroup>

        <Button
          background={"white"}
          onClick={() => setIsExpanded(!isExpanded)}
          leftIcon={<IoFilterCircleOutline />}
        >
          Filter
        </Button>
        {/* <Link alignItems={"center"} color="brand.500">
          <Text>Clear Filter</Text>
        </Link> */}
      </HStack>
      <HStack background={"pinka"} width="100%" height="inherit">
        <DateRangePicker />
      </HStack>
    </motion.div>
  );
};
