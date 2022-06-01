import styles from "./MissionItemStyle" 
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";

export default function MissionItem({mission}) {

    function Image({ships}) {
        return  ships[0] ? <img style={{width: '50px'}} sx={{with: 20}} src={ships[0].image} /> : null
    }

    Image({ships: mission.ships})
    return (
        <TableRow key={'row' + mission.id} sx={styles.item}>
            <TableCell>{mission.id}</TableCell>
            <TableCell component="th" scope="row">{mission.mission_name} </TableCell>
            <TableCell><Image ships={ mission.ships}></Image></TableCell>
            <TableCell>{mission.rocket.rocket_name}</TableCell>
            <TableCell align="right">
            <Link style={{ display: "block", margin: "1rem 0" }}
                to={`/mission/${mission.rocket.rocket.id}`}
                key={'link' + mission.id}
            >
                View
            </Link>
            </TableCell>
        </TableRow>
        
    )
}