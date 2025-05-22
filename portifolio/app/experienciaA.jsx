// app/experiencia.js
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function ExperienciaA() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Link href="../" asChild>
            <Ionicons name="arrow-back" size={24} color="#af216d" style={styles.backButton} />
          </Link>
          <Text style={styles.title}>Experiência Acadêmica</Text>
        </View>

        
        <View style={styles.experienciaItem}>
        <View style={styles.textContainer}>
            <Text style={styles.cargo}>Estudante de Graduação</Text>
            <Text style={styles.empresa}>Universidade Católica de Pernambuco (UNICAP) • 2022 - Presente</Text>
            <Text style={styles.descricao}>
            Cursando o 5º período de Ciência da Computação com ênfase em:
            {"\n\n• "}Desenvolvimento de Software
            {"\n• "}Inteligência Artificial
            {"\n• "}Redes de Computadores
            {"\n\n"}Disciplinas relevantes:
            {"\n• "}Algoritmos e Estrutura de Dados
            {"\n• "}Inteligência Artificial
            {"\n• "}Desenvolvimento Web e Mobile
            {"\n• "}Redes de Computadores
            </Text>
        </View>
        </View>

    
        <View style={styles.teamPhotoContainer}>
          <Image 
            source={require('@/assets/images/grupoIA.jpeg')} 
            style={styles.teamPhoto}
          />
          <Text style={styles.photoCaption}>Seminário IA - 2025</Text>
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
    flexGrow: 1,
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#5d1049',
  },
  experienciaItem: {
    backgroundColor: '#fff9fb',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ffd6e7',
    elevation: 2,
  },

  textContainer: {
    flex: 1,
  },
  cargo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#5d1049',
    marginBottom: 3,
  },
  empresa: {
    fontSize: 14,
    color: '#af216d',
    marginBottom: 8,
    fontWeight: '500',
  },
  descricao: {
    fontSize: 14,
    color: '#4a4a4a',
    lineHeight: 20,
  },
  teamPhotoContainer: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff9fb',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffd6e7',
    marginTop: 10,
  },
  teamPhoto: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  photoCaption: {
    fontSize: 13,
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
});