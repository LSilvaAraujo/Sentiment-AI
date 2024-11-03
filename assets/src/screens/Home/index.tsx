import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { Sentiment } from './components/Sentiment/index';

export function Home() {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sentimentInfo, setSentimentInfo] = useState<any>(null);
  const [comments, setComments] = useState<string[]>([]);

  const handleSend = async () => {
    if (!text.trim()) {
      alert('Por favor, digite uma mensagem.');
      return;
    }

    setLoading(true);
    try {
      // Buscar comentários do YouTube
      const commentResponse = await fetch(`http://localhost:8080/search_comments?query=${text}`); // Altere para o seu URL
      const result = await commentResponse.json();
      setComments(result.comments);

      // Analisar sentimento
      const sentimentResponse = await fetch(`http://localhost:8080/analyze_sentiment?text=${text}`); // Altere para o seu URL
      const sentimentResult = await sentimentResponse.json();
      setSentimentInfo(sentimentResult);
      
    } catch (error) {
      console.error('Erro ao obter comentários:', error);
      alert('Erro ao buscar comentários. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };
  //front-end analisador
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Feels.</Text>
      <View style={[styles.form, { borderColor: isFocused ? '#01A873' : '#999' }]}>
        <TextInput 
          style={styles.input}
          placeholder="Digite o termo de pesquisa para o YouTube..."
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
      {comments.length > 0 && (
        <View>
          {comments.map((comment, index) => (
            <Text key={index}>{comment}</Text>
          ))}
        </View>
      )}
      {sentimentInfo && (
        <Sentiment
          score={sentimentInfo.sentiment}
          image={sentimentInfo.image} // Adicione a lógica para manipular a imagem se necessário
        />
      )}
    </View>
  );
}
