import React, { forwardRef } from 'react';
import Modal from '..';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Accordion, AccordionDetails, AccordionSummary, TextareaAutosize, TextField } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        justifyContent: 'space-around',
        flexWrap: 'wrap',

        '& input': {
            '&::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
            },
        },
        '& textarea' : {
            width: '195px'
        }

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
    accordion: {
        minHeight: '25px',
        width: '100%',
        marginTop: '1rem',
        border: 'none'
    },
    heading: {
        paddingTop: '1rem',
        fontSize: '0.9rem',
        fontWeight: 'bold',
    },
    accordionDetails: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0.1rem 0 '

    }
}));

function ModalProviderRegister({ openModal }, ref) {

    const classes = useStyles();

    return (

        <Modal open={openModal}>
            <div className={classes.modalClasses} ref={ref}>
                <div className={classes.faixaTitle}>
                    <Typography className={classes.typographyTittle}>Inserir Fornecedor</Typography>
                </div>
                <div className={classes.inputAndButton}>
                    <div className={classes.inputContent}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            size="small"
                            required
                            id="email"
                            label="Nome Fantasia"
                            name="usuario"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            size="small"
                            required
                            id="email"
                            label="Razão Social"
                            name="usuario"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            type="number"
                            variant="outlined"
                            margin="normal"
                            size="small"
                            required
                            id="email"
                            label="CNPJ"
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
                            label="Endereço"
                            name="usuario"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            type="number"
                            variant="outlined"
                            margin="normal"
                            size="small"
                            required
                            id="email"
                            label="Telefone"
                            name="usuario"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            type="email"
                            variant="outlined"
                            margin="normal"
                            size="small"
                            required
                            id="email"
                            label="E-mail"
                            name="usuario"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            type="email"
                            variant="outlined"
                            margin="normal"
                            size="small"
                            required
                            id="email"
                            label="Setor"
                            name="usuario"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            type="email"
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
                        <TextField
                            multiline
                            rows={2}
                            rowsMax={4}
                            type="textarea"
                            variant="outlined"
                            margin="normal"
                            size="small"
                            required
                            id="email"
                            label="Observações"
                            name="usuario"
                            autoComplete="email"
                            autoFocus
                        />

                    </div>

                    <Accordion className={classes.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Contatos da Empresa</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordionDetails}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                size="small"
                                required
                                id="email"
                                label="Nome"
                                name="usuario"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                type="number"
                                variant="outlined"
                                margin="normal"
                                size="small"
                                required
                                id="email"
                                label="Email do contato"
                                name="usuario"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                type="email"
                                variant="outlined"
                                margin="normal"
                                size="small"
                                required
                                id="email"
                                label="Telefone de contato"
                                name="usuario"
                                autoComplete="email"
                                autoFocus
                            />

                        </AccordionDetails>
                    </Accordion>

                    <div className={classes.btAdicionar}>
                        <Button className={classes.button}
                            variant="contained"
                        >Adicionar
                        </Button>

                    </div>
                </div>
            </div>
        </Modal>

    )
}

export default forwardRef(ModalProviderRegister);