import { ButtonGroup, IconButton, Icon, Image, VStack } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from 'react-zoom-pan-pinch';

const DownloadIcon = () => (
  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="3"
      d="M9.666 28.333h10.667c3.771 0 5.657 0 6.829-1.171 1.171-1.172 1.171-3.057 1.171-6.829V19c0-3.771 0-5.657-1.171-6.828-1.025-1.025-2.595-1.153-5.495-1.17m-13.334 0c-2.9.017-4.47.145-5.495 1.17C1.667 13.343 1.667 15.229 1.667 19v1.333c0 3.772 0 5.657 1.171 6.829.4.4.883.663 1.495.837"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M15 1.667V19m0 0-4-4.667M15 19l4-4.667"
    />
  </Icon>
);

const ResetIcon = () => (
  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
    <path
      fill="currentColor"
      d="M15 1.65c0 .911.672 1.65 1.5 1.65h2.379l-4.44 4.883c-.585.645-.585 1.69 0 2.334a1.405 1.405 0 0 0 2.122 0L21 5.633V8.25c0 .911.672 1.65 1.5 1.65S24 9.161 24 8.25v-6.6C24 .739 23.328 0 22.5 0h-6c-.828 0-1.5.739-1.5 1.65ZM10.517 16.56a1.405 1.405 0 0 0 0-2.12c-.645-.586-1.69-.586-2.334 0L3.3 18.878V16.5c0-.828-.739-1.5-1.65-1.5C.739 15 0 15.672 0 16.5v6c0 .828.739 1.5 1.65 1.5h6.6c.911 0 1.65-.672 1.65-1.5S9.161 21 8.25 21H5.633l4.884-4.44ZM9.9 1.65A1.65 1.65 0 0 1 8.25 3.3H5.633l4.884 4.883a1.65 1.65 0 1 1-2.334 2.334L3.3 5.633V8.25a1.65 1.65 0 0 1-3.3 0v-6.6C0 .739.739 0 1.65 0h6.6C9.161 0 9.9.739 9.9 1.65ZM14.44 16.56a1.5 1.5 0 1 1 2.12-2.12L21 18.878V16.5a1.5 1.5 0 0 1 3 0v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1 0-3h2.379l-4.44-4.44Z"
    />
  </Icon>
);
const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <VStack
      style={{
        position: 'fixed',
        right: '45px',
        bottom: '45px',
        gap: '10px',
      }}
    >
      <ButtonGroup>
        <VStack spacing="0">
          <IconButton
            aria-label="Acercar"
            variant="map"
            onClick={() => zoomIn()}
            style={{
              borderBottomLeftRadius: '0',
              borderBottomRightRadius: '0',
              padding: '0',
            }}
          >
            <AddIcon boxSize={5} />
          </IconButton>
          <IconButton
            aria-label="Alejar"
            variant="map"
            onClick={() => zoomOut()}
            style={{
              borderTopLeftRadius: '0',
              borderTopRightRadius: '0',
              padding: '0',
            }}
          >
            <MinusIcon boxSize={5} />
          </IconButton>
        </VStack>
      </ButtonGroup>
      <IconButton
        aria-label="Centrar y volver a la escala inicial"
        icon={<ResetIcon />}
        variant="map"
        bg="secondary"
        color="yellow"
        onClick={() => resetTransform()}
      />
      <a href="/ciutat_de_dones.pdf" download>
        <IconButton
          aria-label="Descargar el mapa 'ciutat-de-dones' en pdf"
          icon={<DownloadIcon />}
          variant="map"
          bg="secondary"
          color="yellow"
          onClick={() => resetTransform()}
        />
      </a>
    </VStack>
  );
};

export function Map() {
  return (
    <>
      <TransformWrapper>
        <TransformComponent>
          <Image
            src={'/img/map-ciutat-de-dones.svg'}
            alt={"Map 'Barcelona. Ciutat de dones'"}
            objectFit="cover"
            sx={{
              minWidth: '100vw',
              minHeight: '100vh',
              paddingTop: 0,
              paddingBottom: 0,
            }}
          />
        </TransformComponent>
        <Controls />
      </TransformWrapper>
    </>
  );
}
