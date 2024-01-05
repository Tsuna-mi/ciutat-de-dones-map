import { Box, Center, Divider } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

export function ToggleSidebarContentButton({
  onToggle,
  isOpen,
}: {
  onToggle: any;
  isOpen: boolean;
}) {
  return (
    <>
      <Divider bg="white" marginTop="40px" />
      <Center h="45px" mt="-2px" marginBottom="20px">
        <Box
          as="button"
          aria-label="Mostrar/Ocultar la información del Proyecto"
          onClick={onToggle}
          height="40px"
          width="50px"
          _focus={{
            boxShadow: '0 0 1px 3px #C3A3C9, 0 1px 1px rgba(0, 0, 0, .15)',
          }}
          _focus-visible={{
            boxShadow: '0 0 1px 3px #C3A3C9, 0 1px 1px rgba(0, 0, 0, .15)',
          }}
        >
          <Center>
            {isOpen ? (
              <ChevronUpIcon mt="-10px" w={14} h={14} color="accent" />
            ) : (
              <ChevronDownIcon mt="-10px" w={14} h={14} color="accent" />
            )}
          </Center>
        </Box>
      </Center>
    </>
  );
}
