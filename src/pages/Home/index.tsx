import { useState } from 'react';
import {
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  Radio,
  Select,
  VStack,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { Page } from 'shared/Layout/Page';
import { ProjectHeader } from 'shared/Layout/ProjectHeader';
import { SearchBar } from 'shared/Layout/SearchBar';
export function HomePage() {
  const { getButtonProps, getDisclosureProps, isOpen, onToggle } =
    useDisclosure({ defaultIsOpen: true });
  const [hidden, setHidden] = useState(!isOpen);

  const [valueSort, setValueSort] = useState('1');
  const [valueDirection, setValueDirection] = useState('1');
  const asideHeight = 380;
  return (
    <Page>
      <ProjectHeader
        getButtonProps={getButtonProps}
        onToggle={onToggle}
        isOpen={isOpen}
        asideHeight={asideHeight}
        getDisclosureProps={getDisclosureProps}
        hidden={hidden}
        setHidden={setHidden}
      />
      <SearchBar />
      <FormControl marginBottom="8px">
        <FormLabel mb="0" as="legend">
          Ordenación
        </FormLabel>
        <Center bg="white" borderRadius="5" height="120px">
          <VStack>
            <RadioGroup
              colorScheme="white"
              name="sort"
              color="gray5"
              onChange={setValueSort}
              value={valueSort}
            >
              <Stack spacing={5} direction="row">
                <Radio
                  borderColor="secondary"
                  defaultChecked
                  value="alphabetic"
                  _before={{ background: 'secondary !important' }}
                >
                  Alfabético
                </Radio>
                <Radio
                  borderColor="secondary"
                  value="birthDate"
                  _before={{ background: 'secondary !important' }}
                >
                  Fecha Nacimiento
                </Radio>
              </Stack>
            </RadioGroup>
            <Center>
              <Divider bg="secondary" w="250px" margin="10px 0" />
            </Center>
            <RadioGroup
              colorScheme="white"
              name="direction"
              color="gray5"
              onChange={setValueDirection}
              value={valueDirection}
            >
              <Stack spacing={5} direction="row">
                <Radio
                  borderColor="secondary"
                  defaultChecked
                  value="asc"
                  _before={{ background: 'secondary !important' }}
                >
                  Ascendente
                </Radio>
                <Radio
                  borderColor="secondary"
                  value="desc"
                  _before={{ background: 'secondary !important' }}
                >
                  Descendente
                </Radio>
              </Stack>
            </RadioGroup>
          </VStack>
        </Center>
      </FormControl>
      <FormControl>
        <FormLabel mb="0" as="legend">
          Country
        </FormLabel>
        <Center
          p="10px 0 20px"
          color="gray5"
          bg="white"
          borderRadius="5"
          height="auto"
        >
          <VStack>
            <FormControl>
              <FormLabel mb="0">Línea</FormLabel>
              <Select
                variant="selectPrimary"
                minWidth="300px"
                placeholder="Selecciona una línea de Metro"
              >
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel mb="0">Categoría</FormLabel>
              <Select
                variant="selectPrimary"
                placeholder="Selecciona una categoría"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </VStack>
        </Center>
      </FormControl>
      <Flex mt="25px" justifyContent="end">
        <Button width="200px" fontSize="lg" variant="normal" size="lg">
          APLICAR
        </Button>
      </Flex>
    </Page>
  );
}

export const Component = HomePage;
