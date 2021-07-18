const axios = require('axios');

// Register consts
const nome = 'Ricardo';
const emailr = '9q9o6b3@gmail.com';
const psenha = 'supersecret!!!';
const tipo = 0;

// Login consts
const email = 'ricardofsdomene3ß@icloud.com';
const senha = 'Azd202020';

const RegistrarUsuario = async () => {
    await axios.post('http://localhost:3000/register', {
        nome,
        email,
        psenha,
        tipo
    }).then((res) => {
   console.log(res);
    })
};

const LogarUsuario = async () => {
    await axios.post('http://localhost:3000/login', {
        email,
        senha
    }).then((res) => {
        if (res.data.status === 'ok') {
            console.log('Usuario logando ✅')

            if (!res.data.data) {
                console.log('JWT não está sendo criado')
            } else {
                console.log('Usuario recebendo JWT ✅')
            }

        }
        if (res.data.status === 'error') {
            console.log('Usuario não está logando ❗ | motivo:', res.data.error)
        }
    })
}

const LogarUsuarioGoogle = async () => {
    await axios.post('http://localhost:3000/logingoogle', {
        email,
        senha
    }).then((res) => {
        if (res.data.status === 'ok') {
            console.log('Usuario logando ✅')

            if (!res.data.data) {
                console.log('JWT não está sendo criado')
            } else {
                console.log('Usuario recebendo JWT ✅')
            }

        }
        if (res.data.status === 'error') {
            console.log('Usuario não está logando ❗ | motivo:', res.data.error)
        }
    })
}

// LogarUsuario();
// LogarUsuarioGoogle();
RegistrarUsuario();

const nomedoteste = 'API';

// console.log(nomedoteste, '✅');