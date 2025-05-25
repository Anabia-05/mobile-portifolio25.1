// app/index.js
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Portfólio Digital</Text>
          <Text style={styles.subtitle}>Ana Beatriz Romero</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Bem vindo ao meu Portfólio	digital, clicando nos botões abaixo você pode encontrar mais informações sobre mim, minha experiencia academica/profissional e alguns dos meus projetos e também o jogo da senha.
          </Text>
        </View>  
        
        <View style={styles.buttonGroup}>
          <Link href="./sobre" asChild>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="person" size={20} color="white" />
              <Text style={styles.buttonText}>Sobre Mim</Text>
            </TouchableOpacity>
          </Link>
       
          <Link href="./experienciaP" asChild>
            <TouchableOpacity style={styles.button2}>
              <Ionicons name="briefcase" size={20} color="#af216d" />
              <Text style={styles.button2Text}>Experiência Profissional</Text>
            </TouchableOpacity>
          </Link>
      
          <Link href="./experienciaA" asChild>
            <TouchableOpacity style={styles.button2}>
              <Ionicons name="school" size={20} color="#af216d" />
              <Text style={styles.button2Text}>Experiência Acadêmica</Text>
            </TouchableOpacity>
          </Link>

          <Link href="./projetos" asChild>
            <TouchableOpacity style={styles.button2}>
              <Ionicons name="folder-open" size={20} color="#af216d" />
              <Text style={styles.button2Text}>Projetos</Text>
            </TouchableOpacity>
          </Link>
          <Link href="./bullsAndCows" asChild>
            <TouchableOpacity style={styles.button2}>
              <Ionicons name="game-controller-outline" size={20} color="#af216d" />
              <Text style={styles.button2Text}>Jogo da Senha</Text>
            </TouchableOpacity>
          </Link>

        </View>

        
        
      </View>
      </ScrollView>
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
    padding: 24,
    justifyContent: 'center',
    
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30, // Espaço reduzido abaixo do nome
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#5d1049',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: '#af216d',
    marginBottom: 20, 
    
  },
  buttonGroup: {
    marginTop: 20, // Espaço entre nome e botões
    gap: 15,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#af216d',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    elevation: 2,
  },
  button2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#af216d',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
    button2Text: {
    color: '#af216d',
    fontSize: 16,
    fontWeight: '600',
  },

  infoBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    elevation: 2,
  },
  infoText: {
    width: '90%',             
    alignSelf: 'center',      
    textAlign: 'justify',        
    fontSize: 16,
    lineHeight: 24,           
    letterSpacing: 0.5,       
    color: '#4a4a4a',
  },
  
});