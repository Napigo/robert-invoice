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

const COLLAPSED_HEIGHT = 40;
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
        background: "pinks",
        overflowY: "hidden",
        flex: 1,
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <HStack
        width={"100%"}
        height={`${COLLAPSED_HEIGHT + 10}px`}
        background={"transparent"}
      >
        <InputGroup maxW={300}>
          <InputLeftElement pointerEvents="none" children={<RiSearchLine />} />
          <Input placeholder="Search invoices" />
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
    </motion.div>
  );
};
