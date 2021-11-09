import { Router, Request, Response } from 'express';
import BuscaDadosApi from '../services/buscaDadosApi'
import BuscaDicionarioDados from '../services/buscaDicionarioDados'

const homePage = Router();

homePage.get('/', async (req: Request, res: Response): Promise<void> => {
    const buscaDadosApi = new BuscaDadosApi();
    const dados = await buscaDadosApi.buscaDados();

    const buscaDicionarioDados = new BuscaDicionarioDados()
    const dict_dados = await buscaDicionarioDados.buscaDados()

    res.send(
        dados.map(dado => dict_dados[dado.NL]?.NomeLongo || dado.NL)
    )
})

export default homePage;