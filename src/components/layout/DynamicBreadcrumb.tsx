"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const DynamicBreadcrumb: React.FC = () => {
  const pathnames = usePathname();
  console.log(pathnames);
  const pathnameArray = pathnames.split("/").slice(1);
  console.log(pathnameArray);
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          {pathnameArray.map((value, index) => {
            const to = `${pathnameArray.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnameArray.length - 1;
            return isLast ? (
              <BreadcrumbItem key={to}>
                <BreadcrumbPage>{value}</BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <Fragment key={to}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={`/${to}`}>{value}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default DynamicBreadcrumb;
