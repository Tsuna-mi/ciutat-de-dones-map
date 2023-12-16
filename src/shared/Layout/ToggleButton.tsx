import { Box } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
export function ToggleButton({
  getButtonProps,
  onToggle,
  isOpen,
  asideWidth,
}: {
  getButtonProps: any;
  onToggle: any;
  isOpen: boolean;
  asideWidth: number;
}) {
  const iconSize = {
    marginLeft: '-14px',
    marginTop: '-6px',
  };
  return (
    <Box
      {...getButtonProps()}
      as="button"
      onClick={onToggle}
      bg="primary"
      height="45px"
      width="30px"
      _focus={{
        boxShadow: '0 0 1px 3px #C3A3C9, 0 1px 1px rgba(0, 0, 0, .15)',
      }}
      _focus-visible={{
        boxShadow: '0 0 1px 3px #C3A3C9, 0 1px 1px rgba(0, 0, 0, .15)',
      }}
      style={{
        position: 'absolute',
        left: isOpen ? `${asideWidth}px` : 0,
        top: '24px',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
      }}
    >
      {isOpen ? (
        <ChevronLeftIcon w={14} h={14} color="accent" style={iconSize} />
      ) : (
        <ChevronRightIcon w={14} h={14} color="accent" style={iconSize} />
      )}
    </Box>
  );
}
