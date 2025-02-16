// app/App.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo ao aplicativo!</Text>
      
      <Button 
        title="Clique aqui" 
        onPress={() => console.log('Botão pressionado')} 
        style={styles.button} // Adicionando margem ao botão
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    marginTop: 20, // Margem acima do botão
    marginBottom: 10, // Margem abaixo do botão
    marginLeft: 15, // Margem à esquerda
    marginRight: 15, // Margem à direita
  },
});

export default App;
