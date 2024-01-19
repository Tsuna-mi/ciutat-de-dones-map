import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  Spacer,
  Spinner,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import {
  Biography,
  SortingAndDirection,
  SubwayLine,
  Category,
} from 'app/types';
import { setBioId, setBiosIdsArray } from 'redux/biosSlice';
import { useGetAllBiosQuery } from 'redux/api/biosAPI';
import { Page } from 'shared/Layout/Page';
import { ProjectHeader } from 'shared/Layout/ProjectHeader';
import { BackButton } from 'shared/Layout/BackButton';
import { sortArrayByField, filterByStringInArrayField } from 'utils/general';

export function ResultsPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { getButtonProps, getDisclosureProps, isOpen, onToggle } =
    useDisclosure({ defaultIsOpen: false });
  const { sorting, direction, subwayLine, category }: SortingAndDirection =
    useAppSelector((state) => state.bios.sortingAndDirection);

  const [hidden, setHidden] = useState(!isOpen);
  const asideHeight = 220;
  const { data: allBios = [], isLoading = Boolean } = useGetAllBiosQuery();
  const [bios, setBios] = useState<Biography[]>([]);

  useEffect(() => {
    if (allBios.length > 0) {
      const directionType: 'asc' | 'desc' =
        direction === 'asc' ? 'asc' : 'desc';
      const subwayLineType: SubwayLine = subwayLine as SubwayLine;
      const categoryType: Category = category as Category;

      const sorted = sortArrayByField(
        allBios,
        sorting === 'birthDate' ? sorting : 'name',
        directionType
      );

      const filteredByLine = filterByStringInArrayField(
        sorted,
        'subwayLine',
        subwayLineType
      );

      const filteredByCategory = filterByStringInArrayField(
        filteredByLine,
        'category',
        categoryType
      );
      setBios(filteredByCategory);
    }
  }, [allBios, sorting, direction, subwayLine, category]);

  useEffect(() => {
    if (bios.length > 0) {
      dispatch(setBiosIdsArray(bios.map((bio) => bio.id)));
    }
  }, [bios, dispatch]);

  return (
    <Page>
      <Flex marginBottom="20px">
        <BackButton />
        <Spacer />
        <Box height="45px" width="100px" bg="white" borderRadius={'6'}>
          <Center>
            <Text as="span" color="gray5" lineHeight="2.7rem">
              {bios.length}
            </Text>
          </Center>
        </Box>
      </Flex>
      <ProjectHeader
        getButtonProps={getButtonProps}
        onToggle={onToggle}
        isOpen={isOpen}
        asideHeight={asideHeight}
        getDisclosureProps={getDisclosureProps}
        hidden={hidden}
        setHidden={setHidden}
      />
      <List
        style={{
          maxHeight: isOpen ? '350px' : '800px', //
          margin: '10px 0',
          wordWrap: 'break-word',
          overflowY: 'auto',
          whiteSpace: 'preserve',
        }}
        sx={{
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'secondaryLight',
            borderRadius: '12px',
          },
        }}
      >
        {isLoading ? (
          <Center>
            <Spinner color="accent" />
          </Center>
        ) : (
          bios.map((bio) => (
            <ListItem key={bio.id}>
              <LinkBox as="article">
                <Flex>
                  <Box>
                    <LinkOverlay
                      onClick={() => {
                        dispatch(setBioId(bio.id));
                        navigate(`/detail/${bio.id}`);
                      }}
                    >
                      <Heading
                        as="h2"
                        fontFamily={'Source Sans Pro'}
                        fontSize="24px"
                        style={{
                          whiteSpace: 'preserve',
                          marginTop: '30px',
                        }}
                      >
                        {bio.name}
                      </Heading>
                    </LinkOverlay>
                    <Text
                      fontFamily={'Source Sans Pro'}
                      fontWeight={'100'}
                      fontSize={'20px'}
                      lineHeight={'1'}
                      style={{
                        whiteSpace: 'preserve',
                      }}
                    >
                      {bio.dates}
                    </Text>
                  </Box>
                  {bio.image ? <Image src={bio.image} alt={bio.alt} /> : <></>}
                </Flex>

                <Box>
                  <Text
                    fontSize={'18px'}
                    style={{
                      maxHeight: '80px',
                      margin: '15px 5px 20px 0',
                      whiteSpace: 'preserve',
                      overflow: 'hidden',
                    }}
                  >
                    {bio.description}
                  </Text>
                </Box>
              </LinkBox>
              <Divider bg="white" />
            </ListItem>
          ))
        )}
      </List>
    </Page>
  );
}

export const Component = ResultsPage;
