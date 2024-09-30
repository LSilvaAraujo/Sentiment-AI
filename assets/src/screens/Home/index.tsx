import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, ActivityIndicator, Image } from 'react-native';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { getSentiment } from './API/meaningCloud';
import { Sentiment } from './components/Sentiment/index';
import { getSentimentData } from '../../../src/utils/sentiments';
import { styles2 } from './components/Sentiment/styles';

export function Home() {
  const [score, setScore] = useState<string | null>(null);
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sentimentInfo, setSentimentInfo] = useState<any>(null);

  const handleSend = async () => {
    if (!text.trim()) {
      alert('Por favor, digite uma mensagem.');
      return;
    }

    setLoading(true);
    try {
      const result = await getSentiment(text, 'pt');
      if (result && result.score_tag) {
        setScore(result.score_tag);
        setText('');

        const info = getSentimentData(result.score_tag);
        setSentimentInfo(info);
      } else {
        alert('Não foi possível analisar o sentimento. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao obter o sentimento:', error);
      alert('Erro ao analisar o sentimento. Tente novamente.');
      setSentimentInfo(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Feels.</Text>

      <View style={[styles.form, { borderColor: isFocused ? '#01A873' : '#999' }]}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#999"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={setText}
          value={text}
        />
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleSend} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <FontAwesome name="send" size={24} color="#FFF" />
        )}
      </TouchableOpacity>

      {/* Exibição do sentimento analisado */}
      {sentimentInfo && (
        <Sentiment
          score={sentimentInfo.name}
          image={sentimentInfo.image}
        />
      )}
    </View>
  );
}
