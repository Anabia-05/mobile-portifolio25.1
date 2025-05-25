import { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, FlatList,SafeAreaView,useColorScheme  } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function BullsAndCowsGame() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState([]);
  const [attemptCount, setAttemptCount] = useState(0);
  const [userInput, setUserInput] = useState('');
 
  const dynamicStyles = createStyles(isDarkMode);

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
    <View style={dynamicStyles.attemptItem}>
      <Text style={dynamicStyles.attemptText}>
        Tentativa {attempts.length - index}: {item.attempt} | 
        Bulls: {item.result.bulls}, Cows: {item.result.cows}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={dynamicStyles.safeArea}>
      <View style={dynamicStyles.container}>
        <View style={dynamicStyles.header}>
          <Link href="../" asChild>
            <Ionicons name="arrow-back" size={24} color={isDarkMode ? '#e8c4d8' : '#af216d'} style={dynamicStyles.backButton} />
          </Link>
          <Text style={dynamicStyles.title}>Bulls and Cows</Text>
        </View>

        <View style={dynamicStyles.gameContainer}>
          <TextInput
            style={dynamicStyles.input}
            value={userInput}
            onChangeText={setUserInput}
            placeholder="Digite 4 dígitos únicos"
            placeholderTextColor={isDarkMode ? '#a0a0a0' : '#7f8c8d'}
            keyboardType="numeric"
            maxLength={4}
          />

          <View style={dynamicStyles.buttonGroup}>
            <Pressable
              style={dynamicStyles.primaryButton}
              onPress={startGame}
            >
              <Text style={dynamicStyles.buttonText}>Enviar Palpite</Text>
            </Pressable>
            
            <Pressable
              style={dynamicStyles.secondaryButton}
              onPress={generatePassword}
            >
              <Text style={dynamicStyles.secondaryButtonText}>Recomeçar</Text>
            </Pressable>
            
            <Pressable
              style={dynamicStyles.secondaryButtonText}
              onPress={showPassword}
            >
              <Text style={dynamicStyles.secondaryButtonText}>Mostrar Senha</Text>
            </Pressable>
          </View>

          <FlatList
            data={[...attempts].reverse()}
            renderItem={renderAttempt}
            keyExtractor={(item, index) => index.toString()}
            style={dynamicStyles.attemptsList}
            contentContainerStyle={dynamicStyles.listContent}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const createStyles = (isDarkMode) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: isDarkMode ? '#121212' : '#f6e3ea',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 10,
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: isDarkMode ? '#e8c4d8' : '#5d1049',
  },
  gameContainer: {
    backgroundColor: isDarkMode ? '#1e1e1e' : '#fff9fb',
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: isDarkMode ? '#333' : '#ffd6e7',
    elevation: 2,
    flex: 1,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: isDarkMode ? '#444' : '#af216d',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: isDarkMode ? '#f0f0f0' : '#5d1049',
    backgroundColor: isDarkMode ? '#2a2a2a' : 'white',
  },
  buttonGroup: {
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: isDarkMode ? '#9c1a5b' : '#af216d',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: isDarkMode ? '#2a2a2a' : 'white',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: isDarkMode ? '#9c1a5b' : '#af216d',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: isDarkMode ? '#e8c4d8' : '#af216d',
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
    backgroundColor: isDarkMode ? '#2a2a2a' : 'white',
    padding: 12,
    marginBottom: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: isDarkMode ? '#333' : '#ffd6e7',
  },
  attemptText: {
    fontSize: 14,
    color: isDarkMode ? '#e0e0e0' : '#4a4a4a',
  },
});