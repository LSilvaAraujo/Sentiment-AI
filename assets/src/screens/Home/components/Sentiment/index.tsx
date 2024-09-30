import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { styles2 } from './styles';

interface SentimentProps {
  score: string;
  image: ImageSourcePropType; // Tipo específico para a imagem
}

export function Sentiment({ score, image }: SentimentProps) {
  return (
    <View style={styles2.sentimentContainer}>
      <Image 
        source={image} 
        style={styles2.sentimentImage} 
        accessibilityLabel={`Sentimento: ${score}`} 
      />
      <Text style={styles2.sentimentText}>{score}</Text>
    </View>
  );
}
