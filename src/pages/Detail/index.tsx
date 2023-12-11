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
import { Page } from 'shared/Layout/Page';
import { BackButton } from 'shared/Layout/BackButton';

export function DetailPage() {
  return (
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
        <Image
          src={''}
          alt={''}
          style={{
            marginBottom: '40px',
          }}
        />
        <Heading
          as="h2"
          fontFamily={'Source Sans Pro'}
          size="xl"
          lineHeight={2}
          style={{
            whiteSpace: 'preserve',
          }}
        >
          Valerie Powles
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
          Birmingham, 1950 - Barcelona, 2011
        </Text>
        <Box>
          <Text
            fontSize={'18px'}
            style={{
              maxHeight: '430px',
              margin: '60px 0 60px',
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
            Historiadora y activista por la conservación del patrimonio y la
            memoria, cofundó el Centro de Investigación Histórica del Poble-sec,
            el barrio donde vivió. Compaginó la docencia con el trabajo
            reivindicativo, defendiendo la conservación de El Molino cuando el
            inversor que compró el edificio se deshizo de la decoración
            modernista diseñada por M. J. Raspall. Se movilizó con el
            vecindario, consiguieron recuperar parte del patrimonio e iniciaron
            una intensa campaña para salvar la sala. Historiadora y activista
            por la conservación del patrimonio y la memoria, cofundó el Centro
            de Investigación Histórica del Poble-sec, el barrio donde vivió.
            Compaginó la docencia con el trabajo reivindicativo, defendiendo la
            conservación de El Molino cuando el inversor que compró el edificio
            se deshizo de la decoración modernista diseñada por M. J. Raspall.
            Se movilizó con el vecindario, consiguieron recuperar parte del
            patrimonio e iniciaron una intensa campaña para salvar la sala.
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
  );
}

export const Component = DetailPage;
