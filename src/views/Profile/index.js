import { Avatar, Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import perfil from '../../assests/perfil.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    titleAndButton: {
        display: 'flex',
        padding: '2rem 0',
        justifyContent: 'space-between'
    },
    titleProduct: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    avatar:
    {
        cursor: 'pointer',
        width: '100px',
        height: '100px',
    },
    root: {
        minWidth: '1000px',
        boxShadow: '5px 5px 10px rgb(220, 222, 212)',
        padding: '2rem 0'
    },
    cardContent: {
        paddingRight: '0.5rem',
        'input': {
            ':first-child': {
                display: 'none'
            }
        }
    },
    textField: {
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        paddingTop: '2rem'
    },
    buttonSalvar: {
        backgroundColor: '#4D5989',
        color: '#FFFFFF',
        marginRight: '20px',
        '&:hover': { backgroundColor: '#434F7D' }
    },
    divButtonSalvar: {
        paddingTop: '1rem'
    },
    upload: {
        width: "125px",
        '& label': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontWeight: 'bold',
            color: '#4D5989',
            cursor: "pointer",
            '&:hover': { textDecoration: 'underline' }
        },
    }
}));

function Profile() {

    const [avatarUrl, setAvatarUrl] = useState(perfil);

    const classes = useStyles();

    function handleFile(e) {

        if (e.target.files[0]) {
            const image = e.target.files[0];

            if (image.type === 'image/jpeg' || image.type === 'image/png') {

                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
            }
        }
    }

    return (

        <div>
            <div className={classes.titleAndButton}>
                <Typography className={classes.titleProduct}>
                    Meu Perfil
                </Typography>
            </div>

            <Card className={classes.root} variant="outlined">
                <CardContent className={classes.cardCont}>

                    <div className={classes.upload}>
                        <label for="file">
                            <Avatar alt="Remy Sharp" src={avatarUrl} className={classes.avatar} />
                            Alterar foto
                            <input onChange={handleFile} accept="image/*" id="file"
                                style={{ display: 'none' }} type="file" />
                        </label>
                    </div>


                    <div className={classes.textField}>
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
                    </div>

                    <div className={classes.divButtonSalvar}>
                        <Button className={classes.buttonSalvar}
                            variant="contained"
                        >Salvar
                        </Button>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Profile
