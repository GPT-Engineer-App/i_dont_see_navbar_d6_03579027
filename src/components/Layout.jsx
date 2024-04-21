import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <Flex>
      <Navbar />
      <Box width="80%">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Layout;