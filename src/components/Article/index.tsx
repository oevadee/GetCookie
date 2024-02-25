import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ArticleProps = {
  title: string;
  description: string;
  createdAt: Date;
  likes: number;
};

const Article = ({title, description, createdAt, likes}: ArticleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.metadata}>
        Created At: {createdAt.toDateString()}
      </Text>
      <Text style={styles.metadata}>Likes: {likes}</Text>
    </View>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
  metadata: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
