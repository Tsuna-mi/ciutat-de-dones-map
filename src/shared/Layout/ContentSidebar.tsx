import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../../pages/Home/index';
import { ResultsPage } from '../../pages/Results/index';
import { DetailPage } from '../../pages/Detail/index';
// import { About } from './about';

export function ContentSidebar() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Box>
  );
}
