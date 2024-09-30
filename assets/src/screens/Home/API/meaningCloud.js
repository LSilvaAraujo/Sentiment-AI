import axios from 'axios';
import 'dotenv/config';
const MEANINGCLOUD_API_URL = 'https://api.meaningcloud.com/sentiment-2.1';

export const getSentiment = async (text, lang = 'pt') => {
  try {
    const response = await axios.post(MEANINGCLOUD_API_URL, null, {
      params: {
        key: API_KEY,
        txt: text,
        lang: lang,
      },
    });

    // Verifica se a resposta contém os dados esperados
    if (response.data.status.code === '0') {
      return response.data; // Retorna a resposta apenas se o status for "0" (sucesso)
    } else {
      throw new Error(`Erro: ${response.data.status.msg}`); // Lança um erro com a mensagem da API
    }
  } catch (error) {
    console.error('Erro ao chamar a API MeaningCloud:', error);
    throw error; // Lança o erro para tratamento posterior
  }
};
