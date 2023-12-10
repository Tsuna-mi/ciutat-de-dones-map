import { Map } from './Map';
import { useState } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import { Sidebar } from './Sidebar';
import { Outlet } from '../Router';

export function Layout() {
  const { getButtonProps, getDisclosureProps, isOpen, onToggle } =
    useDisclosure({ defaultIsOpen: true });
  const [hidden, setHidden] = useState(!isOpen);
  const asideWidth = 380;
  return (
    <Box as="main">
      <Box
        as="section"
        sx={{ paddingTop: '0 !important', paddingBottom: '0 !important' }}
      >
        <Map />
      </Box>
      <Sidebar
        getButtonProps={getButtonProps}
        onToggle={onToggle}
        isOpen={isOpen}
        asideWidth={asideWidth}
        getDisclosureProps={getDisclosureProps}
        hidden={hidden}
        setHidden={setHidden}
      />
      <Outlet />
    </Box>
  );
}
