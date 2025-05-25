import { View, Text, Image, StyleSheet, SafeAreaView, Linking, TouchableOpacity } from 'react-native';import { Link } from 'expo-router';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
 
export default function SobreMim() {
  const handleOpenURL = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir link:", err));
  };
 
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
          source={require('@/assets/images/eu2.0.jpg')}
          style={styles.profileImage}
        />
       
        <Text style={styles.name}>Ana Beatriz Romero</Text>
        <Text style={styles.role}>Estudante de Ciência da Computação</Text>
 
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Me chamo Ana Beatriz Romero e atualmente estudo Ciência da Computação na Universidade Católica de Pernambuco (Unicap). 
            Muitos dos projetos que desenvolvi foram para a faculdade, mas, além disso, também faço parte de um grupo de pesquisa.
          </Text>
        </View>
 
        <View style={styles.contact}>
          <Ionicons name="mail" size={20} color="#af216d" />
          <Text style={styles.contactText}>anabia.romero@gmail.com</Text>
        </View>
 
         <View style={styles.socialLinks}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleOpenURL('https://www.linkedin.com/in/ana-beatriz-romero-a15564274/')}
          >
            <FontAwesome name="linkedin-square" size={28} color="#af216d" />
            <Text style={styles.socialText}>LinkedIn</Text>
          </TouchableOpacity>
 
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleOpenURL('https://github.com/Anabia-05')}
          >
            <FontAwesome name="github-square" size={28} color="#af216d" />
            <Text style={styles.socialText}>GitHub</Text>
          </TouchableOpacity>
 
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
    color: '#5d1049',
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
    width: '90%',             
    alignSelf: 'center',      
    textAlign: 'justify',        
    fontSize: 16,
    lineHeight: 24,           
    letterSpacing: 0.5,       
    color: '#4a4a4a',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    marginTop: 25,
  },
  socialButton: {
    alignItems: 'center',
    gap: 5,
  },
  socialText: {
    color: '#5d1049',
    fontSize: 14,
    fontWeight: '500',
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
    marginBottom: 5, // Reduzi para aproximar dos ícones sociais
  },
 
  contactText: {
    color: '#5d1049',
    fontSize: 16,
  },

  
});