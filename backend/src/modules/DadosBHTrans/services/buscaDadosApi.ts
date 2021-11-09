const axios = require('axios').default;

const url_bhtrans = 'https://temporeal.pbh.gov.br/?param=D'

interface DadosBHTrans {
    NL: string,
    Linha: string,
    Nome: string
}

class BuscaDadosApi {
    async buscaDados() {
        const response = await axios.get(url_bhtrans);
        const data = response.data ?? undefined;
        return <DadosBHTrans[]>data;
    }
}

export default BuscaDadosApi;