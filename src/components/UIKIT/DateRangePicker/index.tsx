import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
import { Month_Names_Short, Weekday_Names_Short } from "./utils";
import {
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import {
  CalendarConfigs,
  DatepickerConfigs,
  DatepickerProps,
  OnDateSelected,
} from "./commonTypes";
import FocusLock from "react-focus-lock";
import { RangeCalendarPanel } from "./RangeDatePanel";
import { isEmpty } from "lodash";

const DATE_FORMAT = "DD/MM/YYYY";
/**
 *
 */
const propsConfigs = {
  dateNavBtnProps: {
    colorScheme: "blue",
    variant: "outline",
  },
  dayOfMonthBtnProps: {
    defaultBtnProps: {
      borderColor: "transparent",
      borderRadius: 3,
      _hover: {
        background: "brand.500",
        color: "brand.50",
      },
    },
    isInRangeBtnProps: {
      // color: "yellow",
      borderColor: "transparent",
      background: "brand.100",
    },
    selectedBtnProps: {
      background: "brand.500",
      borderColor: "transparent",
      color: "brand.50",
    },
    todayBtnProps: {
      background: "gray.700",
      color: "gray.100",
      borderColor: "transparent",
      _hover: {
        background: "gray.800",
        color: "gray.100",
      },
    },
  },
  inputProps: {
    background: "white",
  },
  popoverCompProps: {
    popoverContentProps: {
      background: "white",
      color: "gray.500",
    },
  },
};

export interface RangeDatepickerProps extends DatepickerProps {
  configs?: DatepickerConfigs;
  disabled?: boolean;
  defaultIsOpen?: boolean;
  closeOnSelect?: boolean;
  onDateChange: (date: Date[]) => void;
  id?: string;
  name?: string;
  usePortal?: boolean;
  placeholder: string;
}

const DefaultConfigs: CalendarConfigs = {
  dateFormat: "MM/dd/yyyy",
  monthNames: Month_Names_Short,
  dayNames: Weekday_Names_Short,
  firstDayOfWeek: 0,
};

export const RangeDatepicker: React.FC<RangeDatepickerProps> = ({
  configs,
  id,
  name,
  usePortal,
  defaultIsOpen = false,
  closeOnSelect = true,
  ...props
}) => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);
  const [inputValues, setInputvalues] = useState<string>("");
  const { minDate, maxDate, disabled, onDateChange, placeholder } = props;

  // chakra popover utils
  const [dateInView, setDateInView] = useState(selectedDates[0] || new Date());
  const [offset, setOffset] = useState(0);
  const { onOpen, onClose, isOpen } = useDisclosure({ defaultIsOpen });

  const calendarConfigs: CalendarConfigs = {
    ...DefaultConfigs,
    ...configs,
  };

  const onPopoverClose = () => {
    onClose();
    setDateInView(selectedDates[0] || new Date());
    setOffset(0);
  };

  const handleOnDateSelected: OnDateSelected = ({ selectable, date }) => {
    if (!selectable) {
      return;
    }
    const newDates = [...selectedDates];
    if (selectedDates.length) {
      if (selectedDates.length === 1) {
        const firstTime = selectedDates[0];
        if (firstTime < date) {
          newDates.push(date);
        } else {
          newDates.unshift(date);
        }
        setSelectedDates(newDates);

        if (closeOnSelect) onClose();
        return;
      }

      if (newDates.length === 2) {
        setSelectedDates([date]);
        return;
      }
    } else {
      newDates.push(date);
      setSelectedDates(newDates);
    }
  };

  const inputVal = useMemo(() => {
    const fromDate = selectedDates[0]
      ? moment(selectedDates[0]).format(DATE_FORMAT)
      : "";
    const toDate = selectedDates[1]
      ? moment(selectedDates[1]).format(DATE_FORMAT)
      : "";

    if (isEmpty(fromDate) && isEmpty(toDate)) {
      return "";
    }
    return `${fromDate} - ${toDate}`;
  }, [selectedDates]);

  const PopoverContentWrapper = usePortal ? Portal : React.Fragment;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputvalues(e.target.value);
  };

  useEffect(() => {
    setInputvalues(inputVal);
  }, [inputVal]);

  useEffect(() => {
    if (isEmpty(inputValues)) {
      setSelectedDates([]);
    }
  }, [isOpen, inputValues]);

  return (
    <Popover
      placement="bottom-start"
      variant="responsive"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onPopoverClose}
      isLazy
    >
      <PopoverTrigger>
        <Input
          onKeyPress={(e) => {
            if (e.key === " " && !isOpen) {
              e.preventDefault();
              onOpen();
            }
          }}
          placeholder={placeholder}
          id={id}
          autoComplete="off"
          isDisabled={disabled}
          name={name}
          value={inputValues}
          onChange={onInputChange}
          {...propsConfigs.inputProps}
        />
      </PopoverTrigger>
      <PopoverContentWrapper>
        <PopoverContent
          width="100%"
          {...propsConfigs?.popoverCompProps?.popoverContentProps}
        >
          <PopoverBody {...propsConfigs.popoverCompProps?.popoverContentProps}>
            <FocusLock>
              <RangeCalendarPanel
                dayzedHookProps={{
                  onDateSelected: handleOnDateSelected,
                  selected: selectedDates,
                  monthsToDisplay: 2,
                  date: dateInView,
                  minDate: minDate,
                  maxDate: maxDate,
                  offset: offset,
                  onOffsetChanged: setOffset,
                  firstDayOfWeek: calendarConfigs.firstDayOfWeek,
                }}
                configs={calendarConfigs}
                propsConfigs={propsConfigs}
                selected={selectedDates}
              />
            </FocusLock>
          </PopoverBody>
        </PopoverContent>
      </PopoverContentWrapper>
    </Popover>
  );
};
