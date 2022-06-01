import * as React from 'react';
import '../../../App.css';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem';

import Navbar from '../../organisms/Header/navbar';
import Title from '../../atoms/PageTitle/pageTitle';
import theme from '../../../Styles/theme';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {ROCKET_QUERY} from "../../organisms/MissionsList/queries"

function MissionPage(props) {
    const { id } = useParams();
    const { loading, error, data } = useQuery(ROCKET_QUERY(id));

    if (loading) return <Container>
        <Skeleton variant="text" />
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={118} />
    </Container>;
    if (error) return <p>Error :</p>;

  return (
    <ThemeProvider theme={theme}>
       <Navbar/>
       <Container maxWidth="lg">
          <Title title={data.rocket.name}  />
          <Stack spacing={1}>
            <Item>Type: {data.rocket.type}</Item>
            <Item>Company: {data.rocket.company}</Item>
            <Item>Country: {data.rocket.country}</Item>
            <Item>Height: {data.rocket.height.meters}m</Item>
            <Item>Description: {data.rocket.description}</Item>
          </Stack>
       </Container>
         
    </ThemeProvider>
  );
}

export default MissionPage;
