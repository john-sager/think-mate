import { Box, Heading } from "@chakra-ui/react";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const AppLayout = () => (
  <Box maxW="1280px" py="4" px="16">
    <Heading size="2xl" textAlign="center" mb="8">
      ThinkMate
    </Heading>

    <Box>
      <Outlet />
    </Box>

    <TanStackRouterDevtools />
  </Box>
);

export default AppLayout;
