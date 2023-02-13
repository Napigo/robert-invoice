import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export const BreadCrumb: React.FC = () => {
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Invoices</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
