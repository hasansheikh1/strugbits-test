import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./AddModal.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function AddModal({ weeks, visible, setVisible, handleAddWeek }) {
    const [open, setOpen] = React.useState(false);
    // const [weeks, setWeeks] = React.useState(['week 1', 'week 2', 'week 3', 'week 4'])
    const [week, setWeek] = React.useState("")

    const handleOpen = () => setOpen(true);
    const handleClose = () => setVisible(false);


    React.useEffect(() => {
        console.log("week button", week)
    }, [week])
    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={visible}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{
                        fontSize: '30px',
                        fontFamily: "Poppins, sans-serif",
                        textAlign: 'center'
                    }} id="modal-modal-title" variant="h6" component="h2">
                        Select Week
                    </Typography>
                    <br />
                    <div className='week-btn-container'>

                        {weeks?.filter(elm => elm.key != 'all_meals').map((elm, idx) => {
                            return (
                                <button key={idx} onClick={(e) => setWeek(elm.key)} className={` ${week == elm?.key ? 'selected' : 'week-btns'}`} > {elm?.label}</button>
                            )
                        })}
                    </div>
                    <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant="contained" sx={{background:'rgba(0, 67, 112, 1)' ,textTransform:'none',padding:'7.87px 28.62px 7.87px 28.62px', fontFamily: "Poppins, sans-serif",fontWeight:'700'}} onClick={() => handleAddWeek(week)}>
                            Save
                        </Button>
                    </div>


                </Box>
            </Modal>
        </div >
    );
}