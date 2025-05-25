// app/index.js
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = createStyles(isDarkMode);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Portfólio Digital</Text>
            <Text style={styles.subtitle}>Ana Beatriz Romero</Text>
          </View>
          
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Bem vindo ao meu Portfólio digital, clicando nos botões abaixo você pode encontrar mais informações sobre mim, minha experiência acadêmica/profissional e alguns dos meus projetos e também o jogo da senha.
            </Text>
          </View>  
          
          <View style={styles.buttonGroup}>
            <Link href="./sobre" asChild>
              <TouchableOpacity style={styles.primaryButton}>
                <Ionicons name="person" size={20} color="white" />
                <Text style={styles.primaryButtonText}>Sobre Mim</Text>
              </TouchableOpacity>
            </Link>
         
            <Link href="./experienciaP" asChild>
              <TouchableOpacity style={styles.secondaryButton}>
                <Ionicons name="briefcase" size={20} color={isDarkMode ? '#e8c4d8' : '#af216d'} />
                <Text style={styles.secondaryButtonText}>Experiência Profissional</Text>
              </TouchableOpacity>
            </Link>
        
            <Link href="./experienciaA" asChild>
              <TouchableOpacity style={styles.secondaryButton}>
                <Ionicons name="school" size={20} color={isDarkMode ? '#e8c4d8' : '#af216d'} />
                <Text style={styles.secondaryButtonText}>Experiência Acadêmica</Text>
              </TouchableOpacity>
            </Link>

            <Link href="./projetos" asChild>
              <TouchableOpacity style={styles.secondaryButton}>
                <Ionicons name="folder-open" size={20} color={isDarkMode ? '#e8c4d8' : '#af216d'} />
                <Text style={styles.secondaryButtonText}>Projetos</Text>
              </TouchableOpacity>
            </Link>

            <Link href="./bullsAndCows" asChild>
              <TouchableOpacity style={styles.secondaryButton}>
                <Ionicons name="game-controller-outline" size={20} color={isDarkMode ? '#e8c4d8' : '#af216d'} />
                <Text style={styles.secondaryButtonText}>Jogo da Senha</Text>
              </TouchableOpacity>
            </Link>
            <Link href="./sobreApp" asChild>
              <TouchableOpacity style={styles.secondaryButton}>
                <Ionicons name="information-outline" size={20} color={isDarkMode ? '#e8c4d8' : '#af216d'} />
                <Text style={styles.secondaryButtonText}>Sobre App</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (isDarkMode) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: isDarkMode ? '#121212' : '#f6e3ea',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: isDarkMode ? '#e8c4d8' : '#5d1049',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: isDarkMode ? '#d8a8c8' : '#af216d',
    marginBottom: 20,
  },
  buttonGroup: {
    marginTop: 20,
    gap: 15,
  },
  primaryButton: {
    flexDirection: 'row',
    backgroundColor: isDarkMode ? '#9c1a5b' : '#af216d',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    elevation: 2,
  },
  secondaryButton: {
    flexDirection: 'row',
    backgroundColor: isDarkMode ? '#2a2a2a' : 'white',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: isDarkMode ? '#9c1a5b' : '#af216d',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: isDarkMode ? '#e8c4d8' : '#af216d',
    fontSize: 16,
    fontWeight: '600',
  },
  infoBox: {
    backgroundColor: isDarkMode ? '#1e1e1e' : 'white',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    elevation: 2,
    borderWidth: isDarkMode ? 1 : 0,
    borderColor: isDarkMode ? '#333' : 'transparent',
  },
  infoText: {
    width: '90%',
    alignSelf: 'center',
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: isDarkMode ? '#e0e0e0' : '#4a4a4a',
  },
});