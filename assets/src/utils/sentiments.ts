type SentimentScore = 'P+' | 'P' | 'NEU' | 'N' | 'N+' | 'NONE';

export const sentiments: Record<SentimentScore, { name: string; image: any }> = {
  'P+': {
    name: 'Muito Positivo',
    image: require('../../../assets/images/sentiments/muito_positivo.png'),
  },
  'P': {
    name: 'Positivo',
    image: require('../../../assets/images/sentiments/positivo.png'),
  },
  'NEU': {
    name: 'Neutro',
    image: require('../../../assets/images/sentiments/neutro.png'),
  },
  'N': {
    name: 'Negativo',
    image: require('../../../assets/images/sentiments/negativo.png'),
  },
  'N+': {
    name: 'Muito Negativo',
    image: require('../../../assets/images/sentiments/muito_negativo.png'),
  },
  'NONE': {
    name: 'Sem Sentimento',
    image: require('../../../assets/images/sentiments/sem_sentimento.png'),
  },
};

// Função para obter o sentimento baseado no score
export const getSentimentData = (score: SentimentScore): { name: string; image: any } => {
  return sentiments[score] || sentiments['NONE'];
};
