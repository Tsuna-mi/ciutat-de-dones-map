/* eslint-disable react/require-default-props */
import {
  Container,
  ContainerProps,
  StackProps,
  VStack,
} from '@chakra-ui/react';

interface IProps {
  children: StackProps['children'];
  spacing?: StackProps['spacing'];
  maxW?: ContainerProps['maxW'];
}

function Page({ children, maxW = 'container.lg', ...props }: IProps) {
  return (
    <VStack
      as={Container}
      display="stretch"
      spacing={10}
      px={{ base: 3, md: 4 }}
      maxW={maxW}
      m="0 auto"
      {...props}
    >
      {children}
    </VStack>
  );
}

export { Page };
