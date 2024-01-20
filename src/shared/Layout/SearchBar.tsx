import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { useAppDispatch } from 'app/hooks';
import { setSearchedBios } from 'redux/biosSlice';
import { useGetAllBiosQuery } from 'redux/api/biosAPI';

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data: allBios = [] } = useGetAllBiosQuery();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    const searchedBios = allBios.filter(
      (bio) =>
        bio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bio.birthDate?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bio.dates.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bio.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bio.subwayLine
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        bio.category.join(' ').toLowerCase().includes(searchTerm.toLowerCase())
    );

    dispatch(setSearchedBios(searchedBios));
    navigate('/results');
  };

  return (
    <search>
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
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSearchClick();
              }
            }}
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
              onClick={handleSearchClick}
            >
              <Search2Icon />
            </Button>
          </InputRightAddon>
        </InputGroup>
        <FormHelperText mt="1" color="white">
          "Puedes buscar por nombre, fecha..."
        </FormHelperText>
      </FormControl>
    </search>
  );
};
