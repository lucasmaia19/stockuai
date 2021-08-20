import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import Modal from '../../components/ComponentModal';

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
        '&:hover': {backgroundColor: '#ff6200'}
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
    },
    titleAndButton: {
        display: 'flex',
        padding: '2rem 0',
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
    }
}));

function RegisterProduct() {


    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <div>
                <div className={classes.titleAndButton}>
                    <Typography className={classes.titleProduct}>
                        Cadastro de Produto
                    </Typography>


                    <Button className={classes.button}
                        variant="contained"
                        onClick={() => setOpenModal(true)}
                    >Criar
                    </Button>
                </div>

                <Card className={classes.root} variant="outlined">
                    <CardContent className={classes.cardCont}>
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
                        <TextField
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
                    </CardContent>
                    <div className={classes.buttonBase}>
                        <Button className={classes.button}
                            variant="contained"
                        >Buscar
                        </Button>
                    </div>
                </Card>
            </div>
            <Modal open={openModal}>
                <div className={classes.modalClasses}>
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
                        <TextField
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

                    </div>
                </div>
            </Modal>
        </>
    );
}

export default RegisterProduct