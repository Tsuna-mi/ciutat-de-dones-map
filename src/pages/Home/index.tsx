import { useState } from 'react';
import {
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  Stack,
  VStack,
  useDisclosure,
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
                <option value="option1">Todas</option>
                <option value="l1">Línea 1 (L1) - Roja</option>
                <option value="l2">Línea 2 (L2) - Lila</option>
                <option value="l3">Línea 3 (L3) - Verde</option>
                <option value="l4">Línea 4 (L4) - Amarilla</option>
                <option value="l5">Línea 5 (L5) - Azul</option>
                <option value="l9n">Línea 9 Norte (L9N) - Naranja</option>
                <option value="l9s">Línea 9 Sur (L9S) - Naranja</option>
                <option value="l10n">Línea 10 Norte (L10N) - Azul claro</option>
                <option value="l10s">Línea 10 Sur (L10S) - Azul claro</option>
                <option value="l11">Línea 11 (L11) - Verde claro</option>
                <option value="l12">Línea 12 (L12) - Morado</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel mb="0">Categoría</FormLabel>
              <Select
                variant="selectPrimary"
                placeholder="Selecciona una categoría"
              >
                <option value="all">Todas</option>
                <option value="activism">Activismo y cambio social</option>
                <option value="health">Salud y Bienestar</option>
                <option value="sports">Deporte y Representación</option>
                <option value="culture">Cultura y Educación</option>
                <option value="literature">Literatura y Periodismo</option>
                <option value="womens_rights">Derechos de la Mujer</option>
                <option value="social_science">
                  Ciencias Sociales y Urbanismo
                </option>
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
