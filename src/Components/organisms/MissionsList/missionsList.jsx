import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from "@apollo/client";
import { MISSIONS_QUERY } from './queries'
import MissionItem from '../../molecules/MissionItem/MissionItem';

export default function MissionsList() {
    const { loading, error, data } = useQuery(MISSIONS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Rocket</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.launchesPast.map((row) => (
                        <MissionItem mission={row}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}