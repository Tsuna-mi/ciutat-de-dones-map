import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Page } from 'shared/Layout/Page';

export function HomePage() {
  return (
    <Page>
      <Heading
        as="h1"
        size="3xl"
        color="accent"
        textTransform={'uppercase'}
        lineHeight={'.75'}
      >
        Ciutat
        <br />
        de
        <br />
        dones
      </Heading>
      <Text
        margin={'25px 0'}
        width={'90%'}
        fontFamily={'Source Sans Pro'}
        fontSize={'18px'}
        style={{
          whiteSpace: 'preserve',
        }}
      >
        El proyecto <em>‘Barcelona. Ciutat de Dones’</em> pone de relieve la
        contribución extraordinaria de muchas mujeres que, desde diferentes
        ámbitos, han dejado huella en nuestra ciudad y sociedad.
      </Text>
      <Box>
        <Flex justifyContent={'end'}>
          <Link
            fontFamily={'Kanit'}
            fontWeight={'700'}
            fontSize={'24px'}
            textDecoration={'underline'}
            href="https://ajuntament.barcelona.cat/dones/es/ciudad-de-mujeres/biografias"
            isExternal
          >
            biografías
            <ChevronRightIcon w={10} h={10} color="accent" />
          </Link>
        </Flex>
        <Flex justifyContent={'end'}>
          <Link
            fontFamily={'Kanit'}
            fontWeight={'700'}
            fontSize={'24px'}
            textDecoration={'underline'}
            href="https://ajuntament.barcelona.cat/dones/es/ciudad-de-mujeres/el-proyecto"
            isExternal
          >
            el proyecto
            <ChevronRightIcon w={10} h={10} color="accent" />
          </Link>
        </Flex>
      </Box>
      <Divider bg="white" marginTop="20px" />
      <Center>
        <ChevronDownIcon w={14} h={14} color="accent" />
      </Center>
    </Page>
  );
}

export const Component = HomePage;
