import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { ToggleSidebarContentButton } from './ToggleSidebarContentButton';

export function ProjectHeader({
  getButtonProps,
  onToggle,
  isOpen,
  asideHeight,
  getDisclosureProps,
  hidden,
  setHidden,
}: {
  getButtonProps: any;
  onToggle: any;
  isOpen: boolean;
  asideHeight: number;
  getDisclosureProps: any;
  hidden: boolean;
  setHidden: any;
}) {
  return (
    <>
      <Heading
        as="h1"
        size="3xl"
        color="accent"
        textTransform={'uppercase'}
        lineHeight={'.75'}
        mt="5"
      >
        <Link href="/">
          Ciutat
          <br />
          de
          <br />
          dones
        </Link>
      </Heading>
      <motion.section
        {...getDisclosureProps()}
        hidden={hidden}
        initial={false}
        onAnimationStart={() => setHidden(false)}
        onAnimationComplete={() => setHidden(!isOpen)}
        animate={{
          height: isOpen ? asideHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
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
      </motion.section>
      <ToggleSidebarContentButton onToggle={onToggle} isOpen={isOpen} />
    </>
  );
}
