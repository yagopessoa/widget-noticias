import * as actions from '../Redux/actions'

import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'

describe('actions', () => {
  it('should create an action to request news', () => {
    const expectedAction = {
      type: actions.REQUEST_NEWS
    }
    expect(actions.requestNews()).toEqual(expectedAction)
  })
})

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates RECEIVE_NEWS when fetching news has been done', () => {
    fetchMock.getOnce(`https://newsapi.org/v2/top-headlines?country=br&pageSize=5&page=1&apiKey=${process.env.REACT_APP_API_KEY}`, {
      body: {
        'status':'ok','totalResults':34,'articles':[{'source':{'id':null,'name':'Uol.com.br'},'author':null,
        'title':'Atrevimento de Bolsonaro não tem limites, diz Celso de Mello sobre vídeo das hienas - Folha de S.Paulo',
        'description':'Decano do STF critica postagem em rede social na qual o presidente se compara a um leão',
        'url':'https://www1.folha.uol.com.br/poder/2019/10/atrevimento-de-bolsonaro-nao-tem-limites-diz-celso-de-mello-sobre-video-das-hienas.shtml',
        'urlToImage':'https://f.i.uol.com.br/fotografia/2019/10/28/15722882335db736e91441d_1572288233_3x2_md.jpg','publishedAt':'2019-10-28T23:13:00Z',
        'content':'O decano do STF (Supremo Tribunal Federal), ministro Celso de Mello, afirmou, após ser procurado pela Folha, que o vídeo publicado em uma rede social do presidente Jair Bolsonaro (PSL), comparando o tribunal a uma hiena, evidencia que o atrevimento presidenci… [+3048 chars]'},
        {'source':{'id':'globo','name':'Globo'},'author':null,'title':'Robert Evans, produtor de \'O Poderoso Chefão\' e \'O Bebê de Rosemary\', morre aos 89 anos - G1','description':'Ele tentou carreira de ator, mas foi ao produzir clássicos dos anos 60 e 70 que fez sucesso.',
        'url':'https://g1.globo.com/pop-arte/cinema/noticia/2019/10/28/robert-evans-produtor-de-o-poderoso-chefao-e-o-bebe-de-rosemary-morre-aos-89-anos.ghtml',
        'urlToImage':'https://s2.glbimg.com/OzkJfWAUAi6-BpxAJstlBL6uJHU=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/P/F/N2Ah8aQASXvHTy8xBKtA/robert-evans.jpg',
        'publishedAt':'2019-10-28T22:18:00Z','content':'O lendário magnata de Hollywood Robert Evans, que produziu clássicos dos anos 1970, como \'O Poderoso Chefão\' e \'Chinatown\', morreu aos 89 anos, informou seu agente nesta segunda-feira (28). Não foram dados mais detalhes sobre as causas da morte do produtor, c… [+1171 chars]'},
        {'source':{'id':null,'name':'Editalconcursosbrasil.com.br'},'author':'Amanda França','title':'FGTS atrasado: Últimos dias para entrar na Justiça pedindo correção - Edital Concursos Brasil',
        'description':'Valores não depositados nos últimos 30 anos podem ser cobrados até dia 12 de novembro. Veja como conferir se o empregador está depositando seu FGTS.','url':'https://editalconcursosbrasil.com.br/noticias/2019/10/fgts-atrasado-ultimos-dias-para-entrar-na-justica-pedindo-correcao/',
        'urlToImage':'https://editalconcursosbrasil.com.br/wp-content/uploads/2019/08/FGTS.jpeg','publishedAt':'2019-10-28T22:02:14Z',
        'content':'Os trabalhadores têm até dia 12 de novembro para cobrar na Justiça os depósitos do Fundo de Garantia do Tempo de Serviço (FGTS) que não foram feitos pelos empregadores nos últimos 30 anos.O prazo foi estabelecido pela decisão do Supremo Tribunal Federal (STF)… [+1118 chars]'},
        {'source':{'id':'globo','name':'Globo'},'author':null,'title':'STF confirma para 7 de novembro retomada do julgamento sobre prisão em 2ª instância - G1','description':'Julgamento foi suspenso com 4 votos a favor e 3 contra a execução provisória da pena. Faltam as manifestações de outros quatro ministros.',
        'url':'https://g1.globo.com/politica/noticia/2019/10/28/stf-confirma-para-7-de-novembro-retomada-do-julgamento-sobre-prisao-em-2a-instancia.ghtml','urlToImage':'https://s2.glbimg.com/QGdpV5pJXWswLeIqN1ZltHwTC68=/1200x/smart/filters:cover():strip_icc()/s02.video.glbimg.com/x720/8034401.jpg',
        'publishedAt':'2019-10-28T21:21:00Z','content':'O Supremo Tribunal Federal (STF) confirmou que será retomado na quinta-feira da semana que vem, dia 7 de novembro, o julgamento sobre a validade das prisões após condenação confirmada na segunda instância da Justiça. O julgamento foi interrompido na semana pa… [+3039 chars]'},
        {'source':{'id':null,'name':'Portaldoholanda.com.br'},'author':'Portal do Holanda','title':'Consumir gordura trans aumenta em até 75% o risco de demência - Portal do Holanda','description':'Após o consumo de gordura trans ser associado a uma maior probabilidade de ter doenças cardíacas, AVC e diabetes, um  novo estudo mostra que o consumo de gordura trans também pode...',
        'url':'https://www.portaldoholanda.com.br/brasil/consumir-gordura-trans-aumenta-em-ate-75-o-risco-de-demencia','urlToImage':'https://www.portaldoholanda.com.br/sites/default/files/imagecache/2016_noticia_topo/portaldoholanda-943752-imagem.jpg','publishedAt':'2019-10-28T21:14:00Z',
        'content':'Após o consumo de gordura trans ser associado a uma maior probabilidade de ter doenças cardíacas, AVC e diabetes, um  novo estudo mostra que o consumo de gordura trans também pode aumentar em até 75% o risco de demência.\r\nSegundo a Veja, pesquisadores relatar… [+402 chars]'}]},
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: actions.REQUEST_NEWS },
      { type: actions.RECEIVE_NEWS, news: [
        {'source': 'Uol.com.br', 'title': 'Atrevimento de Bolsonaro não tem limites, diz Celso de Mello sobre vídeo das hienas - Folha de S.Paulo', 'link': 'https://www1.folha.uol.com.br/poder/2019/10/atrevimento-de-bolsonaro-nao-tem-limites-diz-celso-de-mello-sobre-video-das-hienas.shtml', 'date': '28/10/2019'},
        {'source': 'Globo', 'title': 'Robert Evans, produtor de \'O Poderoso Chefão\' e \'O Bebê de Rosemary\', morre aos 89 anos - G1', 'link': 'https://g1.globo.com/pop-arte/cinema/noticia/2019/10/28/robert-evans-produtor-de-o-poderoso-chefao-e-o-bebe-de-rosemary-morre-aos-89-anos.ghtml', 'date': '28/10/2019'},
        {'source': 'Editalconcursosbrasil.com.br', 'title': 'FGTS atrasado: Últimos dias para entrar na Justiça pedindo correção - Edital Concursos Brasil', 'link': 'https://editalconcursosbrasil.com.br/noticias/2019/10/fgts-atrasado-ultimos-dias-para-entrar-na-justica-pedindo-correcao/', 'date': '28/10/2019'},
        {'source': 'Globo', 'title':'STF confirma para 7 de novembro retomada do julgamento sobre prisão em 2ª instância - G1', 'link': 'https://g1.globo.com/politica/noticia/2019/10/28/stf-confirma-para-7-de-novembro-retomada-do-julgamento-sobre-prisao-em-2a-instancia.ghtml', 'date': '28/10/2019'},
        {'source': 'Portaldoholanda.com.br', 'title':'Consumir gordura trans aumenta em até 75% o risco de demência - Portal do Holanda', 'link': 'https://www.portaldoholanda.com.br/brasil/consumir-gordura-trans-aumenta-em-ate-75-o-risco-de-demencia', 'date':'28/10/2019'}
      ]}
    ]

    const store = mockStore({
      isFetching: false,
      hasMoreToFetch: true,
      items: []
    })

    return store.dispatch(actions.fetchNews()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

test('formattedDate', () => {
  expect(actions.formattedDate(new Date(2010, 0, 10))).toEqual('10/01/2010')
  expect(actions.formattedDate(new Date(2015, 5, 1))).toEqual('01/06/2015')
})
