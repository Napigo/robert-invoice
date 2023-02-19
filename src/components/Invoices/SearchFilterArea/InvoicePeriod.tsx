import React from "react";
import { CalendarIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { RangeDatepicker } from "@/components/UIKit/DateRangePicker";

export const InvoicePeriod: React.FC = () => {
  return (
    <FormControl>
      <FormLabel>Date Period</FormLabel>

      <InputGroup width={"300px"}>
        <RangeDatepicker
          usePortal
          placeholder=""
          onDateChange={(values) => {
            /**
             * @TODO
             */
          }}
        />
        <InputRightElement
          pointerEvents="none"
          children={<CalendarIcon color="black" />}
        />
      </InputGroup>
    </FormControl>
  );
};
