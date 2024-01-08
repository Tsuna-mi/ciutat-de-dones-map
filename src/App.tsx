import { RouterProvider } from 'react-router-dom';

import '@fontsource/source-sans-pro';
import '@fontsource/kanit';

import { router } from './pages/router';

function App(): JSX.Element {
  // const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
