import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  FormLabel,
  FormHelperText,
  FormControl,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export const SearchBar = () => {
  return (
    <FormControl marginBottom="8px">
      <FormLabel mb="0">Búsqueda</FormLabel>
      <InputGroup>
        <Input
          type="text"
          height="45px"
          bg="white"
          color="gray5"
          borderRadius={5}
          border="none"
          placeholder="Puedes buscar por nombre, fecha..."
        />
        <InputRightAddon p={0} height="45px" border="none">
          <Button
            aria-label="Buscar"
            bg="secondary"
            height="100%"
            maxWidth="45px"
            p="0"
            borderLeftRadius={0}
            borderRightRadius={5}
          >
            <Search2Icon />
          </Button>
        </InputRightAddon>
      </InputGroup>
      <FormHelperText mt="1" color="white">
        "Puedes buscar por nombre, fecha..."
      </FormHelperText>
    </FormControl>
  );
};
