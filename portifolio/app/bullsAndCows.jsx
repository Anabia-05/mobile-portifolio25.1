import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, FlatList,SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function BullsAndCowsGame() {
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState([]);
  const [attemptCount, setAttemptCount] = useState(0);
  const [userInput, setUserInput] = useState('');
 

  useEffect(() => {
    generatePassword();
  }, []);

  const generatePassword = () => {
    let digits = [];
    while (digits.length < 4) {
      let randomNumber = Math.floor(Math.random() * 10);
      if (!digits.includes(randomNumber)) {
        digits.push(randomNumber);
      }
    }
    setPassword(digits.join(''));
    setAttempts([]);
    setAttemptCount(0);
    setUserInput('');
  };

  const countBullsAndCows = (password, userAttempt) => {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (userAttempt[i] === password[i]) {
        bulls++;
      } else if (password.includes(userAttempt[i])) {
        cows++;
      }
    }

    return { bulls, cows };
  };

  const startGame = () => {
    if (userInput.length !== 4 || new Set(userInput).size !== 4) {
      Alert.alert('Erro', 'Digite um número de 4 dígitos únicos.');
      return;
    }

    const result = countBullsAndCows(password, userInput);
    const newAttempt = { attempt: userInput, result };
    
    setAttempts([...attempts, newAttempt]);
    setAttemptCount(attemptCount + 1);
    setUserInput('');

    if (result.bulls === 4) {
      Alert.alert('Parabéns!', 'Você acertou a senha!');
      generatePassword();
      return;
    }

    if (attemptCount >= 9) {
      Alert.alert('Fim de jogo', `Você não conseguiu acertar a senha! A senha secreta era: ${password}`);
      generatePassword();
    }
  };

  const showPassword = () => {
    Alert.alert('Senha Secreta', `A senha secreta é: ${password}`);
  };

  const renderAttempt = ({ item, index }) => (
    <View style={styles.attemptItem}>
      <Text style={styles.attemptText}>
        Tentativa {attempts.length - index}: {item.attempt} | 
        Bulls: {item.result.bulls}, Cows: {item.result.cows}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Link href="../" asChild>
            <Ionicons name="arrow-back" size={24} color="#af216d" style={styles.backButton} />
          </Link>
          <Text style={styles.title}>Bulls and Cows</Text>
        </View>

        <View style={styles.gameContainer}>
          <TextInput
            style={styles.input}
            value={userInput}
            onChangeText={setUserInput}
            placeholder="Digite 4 dígitos únicos"
            placeholderTextColor="#7f8c8d"
            keyboardType="numeric"
            maxLength={4}
          />

          <View style={styles.buttonGroup}>
            <Pressable
              style={styles.primaryButton}
              onPress={startGame}
            >
              <Text style={styles.buttonText}>Enviar Palpite</Text>
            </Pressable>
            
            <Pressable
              style={styles.secondaryButton}
              onPress={generatePassword}
            >
              <Text style={styles.secondaryButtonText}>Recomeçar</Text>
            </Pressable>
            
            <Pressable
              style={styles.secondaryButton}
              onPress={showPassword}
            >
              <Text style={styles.secondaryButtonText}>Mostrar Senha</Text>
            </Pressable>
          </View>

          <FlatList
            data={[...attempts].reverse()}
            renderItem={renderAttempt}
            keyExtractor={(item, index) => index.toString()}
            style={styles.attemptsList}
            contentContainerStyle={styles.listContent}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6e3ea',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 25,
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#5d1049',
  },
  gameContainer: {
    backgroundColor: '#fff9fb',
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ffd6e7',
    elevation: 2,
    flex: 1,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#af216d',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#5d1049', // Texto escuro
    backgroundColor: 'white',
  },
  buttonGroup: {
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#af216d',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#af216d',
    alignItems: 'center',
    marginBottom: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#af216d',
    fontSize: 16,
    fontWeight: '600',
  },

  attemptsList: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  attemptItem: {
    backgroundColor: 'white',
    padding: 12,
    marginBottom: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ffd6e7',
  },
  attemptText: {
    fontSize: 14,
    color: '#4a4a4a',
  },
});