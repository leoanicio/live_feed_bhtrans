const axios = require('axios').default;

const base_url = 'https://ckan.pbh.gov.br'
const first_query = '/api/3/action/datastore_search?resource_id=150bddd0-9a2c-4731-ade9-54aa56717fb6&limit=32000'

interface DadosBHTrans {
    NumeroLinha: string,
    Linha: string,
    Nome: string
}

interface DicionarioBHTrans {
    [key: string]: {
        NumeroLinha: string,
        Linha: string,
        Nome: string,
        NomeLongo: string
    }
}

class BuscaDicionarioDados {
    async buscaDados() {
        let dict_bhtrans = []

        let response = await axios.get(base_url + first_query);
        dict_bhtrans = response.data.result.records


        return await this.formata_dados(dict_bhtrans)
    }

    async formata_dados(dados: Array<DadosBHTrans>) {

        let dict_bhtrans = dados.reduce<DicionarioBHTrans>((acc: DicionarioBHTrans, cur: DadosBHTrans) => {
            return { ...acc, [cur.NumeroLinha]: { ...cur, NomeLongo: `${cur.Linha} | ${cur.Nome}` } }
        }, <DicionarioBHTrans>{})

        return dict_bhtrans
    }
}

export default BuscaDicionarioDados;