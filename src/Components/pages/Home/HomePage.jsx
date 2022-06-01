import * as React from 'react';
import '../../../App.css';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

import MissionsList from '../../organisms/MissionsList/missionsList';
import Navbar from '../../organisms/Header/navbar';
import Title from '../../atoms/PageTitle/pageTitle';
import theme from '../../../Styles/theme';

function HomePage() {
    
  return (
    <ThemeProvider theme={theme}>
       <Navbar/>
       <Container maxWidth="lg">
          <Title title='Missions List'  />
          <MissionsList />
       </Container>
         
    </ThemeProvider>
  );
}

export default HomePage;
