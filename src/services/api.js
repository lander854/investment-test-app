import axios from 'axios';
const apiBasica = axios.create({
  baseURL: ' http://www.mocky.io/v2/',
});

export const carregarInvestimentos = () => {
  return apiBasica.get('5e76797e2f0000f057986099');
};

// intercepta respostas e trata caso necessário, no caso atual não iremos tratar erros, por ser uma demonstração simples.
apiBasica.interceptors.response.use(
  function (response) {
    console.log('sucesso,', response);
    return response;
  },
  function (error) {
    //qualquer erro pode ser tratado aquii.
    console.log('falha,', error);
    return Promise.reject(error);
  },
);
