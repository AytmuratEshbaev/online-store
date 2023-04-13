import {TableRow, TableCell, ButtonGroup, Tooltip, IconButton} from '@mui/material'
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import { IResponseCallBack } from "../../../models/ICallback";
import { callAPI } from '../../../services/CallService';
import {toast} from 'react-toastify';

type Props = {
    call: IResponseCallBack;
}


const Call = ({ call }: Props) => {
    const [deleteCall, {}] = callAPI.useRemoveCallMutation();

    const removeCall = async (id: number) => {
        await deleteCall(id)
            .unwrap()
            .then(response => {
                toast.success("Званок удален", { position: toast.POSITION.TOP_RIGHT, toastId: 'call' });
            })
            .catch(error => toast.error(`${error.data.detail}`, {
                position: toast.POSITION.TOP_RIGHT,
                toastId: 'call'
            }))
    }

    return (
        <TableRow hover role="checkbox" tabIndex={-1}>
            <TableCell>
                {call.full_name}
            </TableCell>
            <TableCell>
                {call.phone_number}
            </TableCell>
            <TableCell>
                {`${call.start_time} \t ${call.end_time}`}
            </TableCell>
            <TableCell>
                {call.comment}
            </TableCell>
            <TableCell>
                <ButtonGroup variant="text" aria-label="contained button group">
                    <Tooltip title="Delete">
                        <IconButton
                            style={{ color: "red" }} 
                            onClick = {() => removeCall(call.id)}
                        >
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </ButtonGroup>
            </TableCell>
        </TableRow>
    )
}

export default Call;