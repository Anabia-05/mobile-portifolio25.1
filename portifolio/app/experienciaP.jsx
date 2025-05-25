// app/experiencia.js
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ExperienciaP() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Link href="../" asChild>
            <Ionicons name="arrow-back" size={24} color="#af216d" style={styles.backButton} />
          </Link>
          <Text style={styles.title}>Experiência Profissional</Text>
        </View>

        
        <View style={styles.experienciaItem}>
          <View style={styles.textContainer}>
            <Text style={styles.cargo}>Pesquisadora de Graduação</Text>
            <Text style={styles.empresa}>Grupo de Pesquisa em Redes e Telecomunicações (GPRT) • Set 2024 - Presente</Text>
            <Text style={styles.descricao}>
              Participação ativa em projetos de pesquisa envolvendo:
              {"\n\n• "}Machine Learning aplicado a redes
              {"\n• "}Ciência de Dados para otimização
              {"\n• "}Desenvolvimento de soluções para problemas de desempenho
              {"\n\n"}Habilidades técnicas adquiridas: NumPy, Pandas, Scikit-Learn, modelagem preditiva e técnicas de classificação.
            </Text>
          </View>
        </View>

    
        <View style={styles.teamPhotoContainer}>
          <Image 
            source={require('@/assets/images/equipe.jpeg')} 
            style={styles.teamPhoto}
          />
          <Text style={styles.photoCaption}>Equipe do GPRT - 2025</Text>
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
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 15,
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