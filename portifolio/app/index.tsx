// app/index.js
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Portfólio Digital</Text>
          <Text style={styles.subtitle}>Ana Beatriz Romero</Text>
        </View>

        
        <View style={styles.buttonGroup}>
          <Link href="./sobre" asChild>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="person" size={20} color="white" />
              <Text style={styles.buttonText}>Sobre Mim</Text>
            </TouchableOpacity>
          </Link>

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
    color: '#2d3436',
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
  
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  
});