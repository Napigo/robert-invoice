import React, { Fragment } from "react";
import { ButtonProps, IconButton } from "@chakra-ui/react";
import { Calendar, GetBackForwardPropsOptions } from "dayzed";
import { DatepickerProps } from "./commonTypes";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export interface DatepickerBackBtnsProps extends DatepickerProps {
  calendars: Calendar[];
  getBackProps: (data: GetBackForwardPropsOptions) => Record<string, any>;
}

const DefaultBtnStyle: ButtonProps = {
  variant: "ghost",
  size: "sm",
};

export const DatepickerBackBtns: React.FC<DatepickerBackBtnsProps> = (
  props
) => {
  const { calendars, getBackProps } = props;
  return (
    <Fragment>
      <IconButton
        aria-label={"svadv"}
        {...getBackProps({ calendars, offset: 12 })}
        {...DefaultBtnStyle}
        icon={<ArrowLeftIcon fontSize={11} />}
      />

      <IconButton
        aria-label={"svadv"}
        {...getBackProps({ calendars })}
        {...DefaultBtnStyle}
        icon={<ChevronLeftIcon fontSize={20} />}
      />
    </Fragment>
  );
};

export interface DatepickerForwardBtnsProps extends DatepickerProps {
  calendars: Calendar[];
  getForwardProps: (data: GetBackForwardPropsOptions) => Record<string, any>;
}

export const DatepickerForwardBtns: React.FC<DatepickerForwardBtnsProps> = (
  props
) => {
  const { calendars, getForwardProps } = props;
  return (
    <Fragment>
      <IconButton
        aria-label={"svadv"}
        {...getForwardProps({ calendars })}
        {...DefaultBtnStyle}
        icon={<ChevronRightIcon fontSize={20} />}
      />

      <IconButton
        aria-label={"svadv"}
        {...getForwardProps({ calendars, offset: 12 })}
        {...DefaultBtnStyle}
        icon={<ArrowRightIcon fontSize={11} />}
      />
    </Fragment>
  );
};
