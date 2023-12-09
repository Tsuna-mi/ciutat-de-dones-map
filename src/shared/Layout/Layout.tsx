import { Box, Image } from '@chakra-ui/react';

import { Outlet } from '../Router';

export function Layout() {
  return (
    <Box as="main">
      {/* Poner el sidebar */}
      <Box pt={{ base: 20, md: 24 }} pb={{ base: 4, md: 6 }}>
        <Image
          src={'src/img/map-ciutat-de-dones.svg'}
          alt={"Map 'Barcelona. Ciutat de dones'"}
          objectFit="cover"
          sx={{ paddingTop: 0, paddingBottom: 0 }}
        />
        <Outlet />
      </Box>
    </Box>
  );
}
