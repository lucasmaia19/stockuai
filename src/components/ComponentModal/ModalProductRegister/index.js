import React, { forwardRef, useEffect, useRef } from 'react';
import Modal from '..';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '950px',
        boxShadow: '5px 5px 10px rgb(220, 222, 212)'
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
        padding: '0 1rem 1rem 1remX'
    },
    button: {
        backgroundColor: '#ff7700',
        color: '#FFFFFF',
        marginRight: '20px',
        '&:hover': { backgroundColor: '#ff6200' }
    },
    cardContent: {
        paddingRight: '0.5rem',
        margin: '0'
    },
    titleProduct: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    cardCont: {
        [theme.breakpoints.down('xs')]: { flexWrap: 'wrap', },
        flexWrap: 'nowrap',
    },
    titleAndButton: {
        display: 'flex',
        padding: '2rem 0',
        justifyContent: 'space-between'
    },
    modalClasses: {
        backgroundColor: '#FFFFFF',
        width: '800px',
        borderRadius: '5px'
    },
    btAdicionar: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '2rem'
    },
    inputContent: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    faixaTitle: {
        backgroundColor: '#ff7700'
    },
    typographyTittle: {
        color: '#FFFFFF',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        padding: '0.5rem 0 0.5rem 1rem'
    },
    inputAndButton: {
        padding: '2rem 0'
    },
    buttonCancelar: {
        backgroundColor: '#4D5989',
        color: '#FFFFFF',
        marginRight: '20px',
        '&:hover': { backgroundColor: '#434F7D' }
    }
}));

function ModalProductRegister({ openModal, setOpenModal }, ref) {

    const classes = useStyles();

    return (

        <Modal open={openModal}>
            <div className={classes.modalClasses} ref={ref}>
                <div className={classes.faixaTitle}>
                    <Typography className={classes.typographyTittle}>Inserir Produto</Typography>
                </div>
                <div className={classes.inputAndButton}>
                    <div className={classes.inputContent}>
                        <TextField className={classes.cardContent}
                            variant="outlined"
                            margin="normal"
                            size="small"
                            required
                            id="email"
                            label="Codigo do Produto"
                            name="usuario"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField className={classes.cardContent}
                            variant="outlined"
                            margin="normal"
                            size="small"
                            required
                            id="email"
                            label="Descrição"
                            name="usuario"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField className={classes.cardContent}
                            variant="outlined"
                            margin="normal"
                            size="small"
                            required
                            id="email"
                            label="Empresa"
                            name="usuario"
                            autoComplete="email"
                            autoFocus
                        />
                    </div>
                    <div className={classes.btAdicionar}>
                        <Button className={classes.button}
                            variant="contained"
                        >Adicionar
                        </Button>

                        <Button className={classes.buttonCancelar}
                            variant="contained"
                            onClick={() => setOpenModal(false)}
                        >Cancelar
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>

    )
}

export default forwardRef(ModalProductRegister);