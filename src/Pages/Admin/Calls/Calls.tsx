import { ToastContainer } from "react-toastify"
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress } from '@mui/material';
import uuid from 'react-uuid';
import Call from "./Call";
import { IResponseCallBack } from "../../../models/ICallback";
import { callAPI } from "../../../services/CallService";
import "./Calls.css";


const columns = ['Имя Фамилия', 'Номер телефона', 'Время', 'Коментария', 'Контроль'];

const Calls = () => {
    const { data: calls, isLoading } = callAPI.useFetchCallsQuery()
    return (
        <div className="calls-admin">
            <ToastContainer containerId='call' />
            <Typography variant="h5" component="h1" p={2}>Звонки</Typography>
            <Paper sx={{ width: '100%', overflow: 'hidden' }} className='calls-container'>
                <TableContainer sx={{ maxHeight: 600, minHeight: 450 }}>
                    {
                        isLoading
                            ? <CircularProgress
                                color="inherit"
                                sx={{ position: "absolute", top: "45%", left: "60%" }}
                            />
                            : <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column: string, index: number) => (
                                            <TableCell key={index}>
                                                {column}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        calls?.map((call: IResponseCallBack) =>
                                            <Call call={call} key={uuid()} />)
                                    }
                                </TableBody>
                            </Table>
                    }
                </TableContainer>
            </Paper>
        </div>
    )
}

export default Calls;

