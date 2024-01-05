import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useGetAllBiosQuery } from 'redux/api/biosAPI';
import { Page } from 'shared/Layout/Page';
import { BackButton } from 'shared/Layout/BackButton';

export function DetailPage() {
  const { id } = useParams();
  const { data: bios = [] } = useGetAllBiosQuery();
  const selectedBio = bios.find((bio) => bio.id.toString() === id);
  return selectedBio?.id ? (
    <Page>
      <Flex>
        <BackButton />
        <Spacer />
        <Box height="45px" bg="white" borderRadius={'6'}>
          <ButtonGroup>
            <Center>
              {/* <Button onClick={'setPreviousPage'} isDisabled={'!previousEnabled'}> */}
              <IconButton
                variant="pagination"
                size="xl"
                aria-label="Biografía Anterior"
                icon={<ChevronLeftIcon />}
              />
              <Text as="span" color="gray5" lineHeight="2.7rem">
                {/* {'currentPage'} / {'totalPages'} */}
                {'28'} / {'130'}
              </Text>
              {/* <Button onClick={'setNextPage'} isDisabled={'!nextEnabled'}> */}
              <IconButton
                variant="pagination"
                size="xl"
                aria-label="Biografía Siguiente"
                icon={<ChevronRightIcon />}
              />
            </Center>
          </ButtonGroup>
        </Box>
      </Flex>
      <Box
        as="article"
        style={{
          marginTop: '75px',
        }}
      >
        {selectedBio.image ? (
          <Image
            src={selectedBio.image}
            alt={selectedBio.alt}
            style={{
              marginBottom: '40px',
            }}
          />
        ) : (
          <></>
        )}
        <Heading
          as="h2"
          fontFamily={'Source Sans Pro'}
          size="xl"
          lineHeight={2}
          style={{
            whiteSpace: 'preserve',
          }}
        >
          {selectedBio.name}
        </Heading>
        <Text
          fontFamily={'Source Sans Pro'}
          fontWeight={'100'}
          fontSize={'20px'}
          lineHeight={'1'}
          style={{
            whiteSpace: 'preserve',
          }}
        >
          {selectedBio.dates}
        </Text>
        <Box>
          <Text
            fontSize={'18px'}
            style={{
              maxHeight: '430px',
              margin: '60px 5px 60px 0',
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
            {selectedBio.description}
          </Text>
        </Box>
      </Box>
      <Flex>
        <Button
          p="2"
          fontSize="lg"
          variant="normal"
          leftIcon={<ChevronLeftIcon w={8} h={8} />}
        >
          Anterior
        </Button>
        <Spacer />
        <Button
          p="2"
          fontSize="lg"
          variant="normal"
          rightIcon={<ChevronRightIcon w={8} h={8} />}
        >
          Siguiente
        </Button>
      </Flex>
    </Page>
  ) : (
    <></>
  );
}

export const Component = DetailPage;
