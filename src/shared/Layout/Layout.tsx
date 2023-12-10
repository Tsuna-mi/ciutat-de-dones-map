import { Sidebar } from './Sidebar';
import { Box, Image, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Outlet } from '../Router';

export function Layout() {
  const { getButtonProps, getDisclosureProps, isOpen, onToggle } =
    useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);
  const asideWidth = 380;
  return (
    <Box as="main">
      <Sidebar
        getButtonProps={getButtonProps}
        onToggle={onToggle}
        isOpen={isOpen}
        asideWidth={asideWidth}
        getDisclosureProps={getDisclosureProps}
        hidden={hidden}
        setHidden={setHidden}
      />
      <Box
        pt={{ base: 20, md: 24 }}
        pb={{ base: 4, md: 6 }}
        sx={{ paddingTop: '0 !important', paddingBottom: '0 !important' }}
      >
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
