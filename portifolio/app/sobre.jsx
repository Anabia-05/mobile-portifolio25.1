// app/sobre.js
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';import { Link } from 'expo-router';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function SobreMim() {
  
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="../" asChild>
          <Ionicons name="arrow-back" size={24} color="#af216d" style={styles.backButton} />
        </Link>
        <Text style={styles.title}>Sobre Mim</Text>
      </View>

      <View style={styles.content}>
        <Image 
          source={require('@/assets/eu2.0.jpg')} 
          style={styles.profileImage}
        />
        
        <Text style={styles.name}>Ana Beatriz Romero</Text>
        <Text style={styles.role}>Estudante de Ciência da Computação</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Atualmente estudo na Universidade Católica de Pernambuco (Unicap). 
            Além dos projetos acadêmicos, participo ativamente de um grupo de 
            pesquisa na área de tecnologia.
          </Text>
        </View>

        

         
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
    backgroundColor: '#f6e3ea',
    padding: 24,
    paddingTop: 20, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2d3436',
  },
  content: {
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#af216d',
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: '#af216d',
    marginBottom: 30,
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
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'center',
  },
  
});