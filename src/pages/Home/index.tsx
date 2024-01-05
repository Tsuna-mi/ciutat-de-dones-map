import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { setSortingAndDirection, storedBios } from 'redux/biosSlice';
import { Page } from 'shared/Layout/Page';
import { ProjectHeader } from 'shared/Layout/ProjectHeader';
import { SearchBar } from 'shared/Layout/SearchBar';

export function HomePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const asideHeight = 220;

  const { sortingAndDirection } = useAppSelector(storedBios);
  const { getButtonProps, getDisclosureProps, isOpen, onToggle } =
    useDisclosure({ defaultIsOpen: true });

  const [hidden, setHidden] = useState(!isOpen);
  const [localSortingAndDirection, setLocalSortingAndDirection] =
    useState(sortingAndDirection);
  const [valueSort, setValueSort] = useState('alphabetic');
  const [valueDirection, setValueDirection] = useState('asc');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (!e.target) return;
    const { name, value } = e.target;
    if (name === 'sorting') {
      setValueSort(value);
    } else if (name === 'direction') {
      setValueDirection(value);
    } else {
      setLocalSortingAndDirection({
        ...localSortingAndDirection,
        [name]: value,
      });
    }
  };

  const handleApplyClick = () => {
    dispatch(
      setSortingAndDirection({
        ...localSortingAndDirection,
        sorting: valueSort,
        direction: valueDirection as 'asc' | 'desc',
      })
    );
    navigate('/results');
  };

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
              name="sorting"
              color="gray5"
              value={valueSort}
              onChange={setValueSort}
            >
              <Stack spacing={5} direction="row">
                <Radio
                  _before={{ background: 'secondary !important' }}
                  borderColor="secondary"
                  defaultChecked={true}
                  onChange={handleChange}
                  value="alphabetic"
                >
                  Alfabético
                </Radio>
                <Radio
                  _before={{ background: 'secondary !important' }}
                  borderColor="secondary"
                  onChange={handleChange}
                  value="birthDate"
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
              value={valueDirection}
              onChange={setValueDirection}
            >
              <Stack spacing={5} direction="row">
                <Radio
                  _before={{ background: 'secondary !important' }}
                  borderColor="secondary"
                  defaultChecked={true}
                  onChange={handleChange}
                  value="asc"
                >
                  Ascendente
                </Radio>
                <Radio
                  _before={{ background: 'secondary !important' }}
                  borderColor="secondary"
                  onChange={handleChange}
                  value="desc"
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
                name="subwayLine"
                variant="selectPrimary"
                minWidth="300px"
                placeholder="Selecciona una línea de Metro"
                onChange={handleChange}
              >
                <option value="allSubwayLines">Todas</option>
                <option value="l1">Línea 1 (L1) - Roja</option>
                <option value="l2">Línea 2 (L2) - Lila</option>
                <option value="l3">Línea 3 (L3) - Verde</option>
                <option value="l4">Línea 4 (L4) - Amarilla</option>
                <option value="l5">Línea 5 (L5) - Azul</option>
                <option value="l6">Línea 6 (L6) - Violeta</option>
                <option value="l7">Línea 7 (L7) - Marrón</option>
                <option value="l9n">Línea 9 Norte (L9N) - Naranja</option>
                <option value="l9s">Línea 9 Sur (L9S) - Naranja</option>
                <option value="l10n">Línea 10 Norte (L10N) - Azul claro</option>
                <option value="l10s">Línea 10 Sur (L10S) - Azul claro</option>
                <option value="l11">Línea 11 (L11) - Verde claro</option>
                <option value="l12">Línea 12 (L12) - Violeta claro</option>
                <option value="s1">Línea s1 (S1) - Naranja oscuro</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel mb="0">Categoría</FormLabel>
              <Select
                name="category"
                variant="selectPrimary"
                placeholder="Selecciona una categoría"
                onChange={handleChange}
              >
                <option value="allCategories">Todas</option>
                <option value="activism">Activismo y cambio social</option>
                <option value="health">Salud y Bienestar</option>
                <option value="sports">Deporte y Representación</option>
                <option value="culture">Cultura y Educación</option>
                <option value="literature">Literatura y Periodismo</option>
                <option value="rights">Derechos de la Mujer</option>
                <option value="urbanism">Ciencias Sociales y Urbanismo</option>
              </Select>
            </FormControl>
          </VStack>
        </Center>
      </FormControl>
      <Flex mt="25px" justifyContent="end">
        <Button
          width="200px"
          fontSize="lg"
          variant="normal"
          size="lg"
          onClick={handleApplyClick}
        >
          APLICAR
        </Button>
      </Flex>
    </Page>
  );
}

export const Component = HomePage;
