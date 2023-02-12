import { Avatar as ChakraAvatar, AvatarProps } from "@chakra-ui/react";
import React from "react";

interface Props extends AvatarProps {
  displayName: string;
}
export const Avatar: React.FC<Props> = (props) => {
  const { name, src, displayName, ...rest } = props;
  return <ChakraAvatar {...rest} name={displayName} src={""} />;
};
