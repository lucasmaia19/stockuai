import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import ModalMovementEntrad from '../../components/ComponentModal/ModalMovementEntrad';
import ModalMovementTransf from '../../components/ComponentModal/ModalMovementTransf';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '950px',
        boxShadow: '5px 5px 10px rgb(220, 222, 212)',
        padding: '2rem 0'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        width: '100%',
        padding: '1rem 0'
    },
    pos: {
        marginBottom: 12,
    },
    buttonBase: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginButtom: '1rem',

    },
    button: {
        backgroundColor: '#ff7700',
        color: '#FFFFFF',
        marginRight: '20px',
        '&:hover': { backgroundColor: '#ff6200' }
    },
    cardContent: {
        paddingRight: '0.5rem',
    },
    titleProduct: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    cardCont: {
        [theme.breakpoints.down('xs')]: { flexWrap: 'wrap', },
        flexWrap: 'nowrap',
        padding: '0 0 0 1rem',

        '& input': {
            '&::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
            },
        },
    },
    titleAndButton: {
        display: 'flex',
        padding: '2rem 0',
        justifyContent: 'space-between'
    },
    modalClasses: {
        backgroundColor: '#FFFFFF',
        height: '250px',
        width: '800px',
        borderRadius: '5px'
    },
    btAdicionar: {
        display: 'flex',
        justifyContent: 'flex-end',
        //padding: '0 1rem 1rem 1remX'
    },
    inputContent: {
        display: 'flex',
        justifyContent: 'space-around'
    },
}));

function MovementStock() {

    const [openModalTransf, setOpenModalTransf] = useState(false)
    const [openModalEntrad, setOpenModalEntrad] = useState(false)

    const classes = useStyles();

    return (
        <>
            <div>
                <div className={classes.titleAndButton}>
                    <Typography className={classes.titleProduct}>
                        Movimento de Estoque
                    </Typography>

                    <Button className={classes.button}
                        variant="contained"
                        onClick={() => setOpenModalTransf(true)}
                    >Transferência
                    </Button>

                    <Button className={classes.button}
                        variant="contained"
                        onClick={() => setOpenModalEntrad(true)}
                    >Entrada de Estoque
                    </Button>
                </div>

                <Card className={classes.root} variant="outlined">
                    <CardContent className={classes.cardCont}>
                        <TextField className={classes.cardContent}
                            type="number"
                            variant="outlined"
                            margin="normal"
                            size="small"
                            required
                            id="email"
                            label="Codigo do Usuario"
                            name="usuario"
                            autoComplete="email"
                            autoFocus
                        />
                    </CardContent>
                    <div className={classes.buttonBase}>
                        <Button className={classes.button}
                            variant="contained"
                        >Buscar
                        </Button>
                    </div>
                </Card>
                <ModalMovementTransf openModal={openModalTransf} setOpenModal={setOpenModalTransf} />
                <ModalMovementEntrad openModal={openModalEntrad} setOpenModal={setOpenModalEntrad}/>
            </div>
        </>
    );
}

export default MovementStock