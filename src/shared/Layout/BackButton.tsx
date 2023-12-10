import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '@chakra-ui/react';

const BackArrowIcon = () => (
  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" fill="none">
    <path
      fill="currentColor"
      d="M11.71 1.635a2.366 2.366 0 0 1 0 3.346l-1.326 1.327-.663.663-.332.332-.166.165-.083.083a.049.049 0 0 0 .035.083h17.48a2.366 2.366 0 1 1 0 4.732H9.174a.049.049 0 0 0-.035.083l.083.083.166.165.332.332.663.663 1.326 1.327a2.366 2.366 0 0 1-3.345 3.346l-6.692-6.692a2.366 2.366 0 0 1 0-3.346l6.692-6.692a2.366 2.366 0 0 1 3.345 0Z"
    />
  </Icon>
);

export function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      p="3"
      fontSize="lg"
      variant="normal"
      leftIcon={<BackArrowIcon />}
      onClick={() => navigate(-1)}
    >
      Volver
    </Button>
  );
}
