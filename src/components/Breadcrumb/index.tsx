import React, { useCallback } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { capitalize, uniqueId } from "lodash";

export const BreadCrumb: React.FC = () => {
  const location = useLocation();

  const pathNames = location.pathname.split("/").filter((x) => x);

  const isCurrentPage = useCallback(
    (currentIndex: number) => {
      return currentIndex === pathNames.length - 1;
    },
    [pathNames]
  );
  return (
    <Breadcrumb
      fontSize={"sm"}
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
    >
      {pathNames.map((path: string, index: number) => (
        <BreadcrumbItem key={uniqueId()} isCurrentPage={isCurrentPage(index)}>
          <BreadcrumbLink
            fontWeight={isCurrentPage(index) ? "bold" : "medium"}
            href={`/${path}`}
          >
            {capitalize(path)}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
