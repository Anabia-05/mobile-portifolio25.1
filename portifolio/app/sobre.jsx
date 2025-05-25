import { View, Text, Image, StyleSheet, SafeAreaView, Linking, TouchableOpacity, useColorScheme } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function SobreMim() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = createStyles(isDarkMode);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Link href="../" asChild>
            <Ionicons name="arrow-back" size={24} color={isDarkMode ? '#e8c4d8' : '#af216d'} style={styles.backButton} />
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
            <Ionicons name="mail" size={20} color={isDarkMode ? '#e8c4d8' : '#af216d'} />
            <Text style={styles.contactText}>anabia.romero@gmail.com</Text>
          </View>

          <View style={styles.socialLinks}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/ana-beatriz-romero-a15564274/')}
            >
              <FontAwesome name="linkedin" size={28} color={isDarkMode ? '#e8c4d8' : '#af216d'} />
              <Text style={styles.socialText}>LinkedIn</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => Linking.openURL('https://github.com/Anabia-05')}
            >
              <FontAwesome name="github" size={28} color={isDarkMode ? '#e8c4d8' : '#af216d'} />
              <Text style={styles.socialText}>GitHub</Text>
            </TouchableOpacity>
          </View>
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
    padding: 24,
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
    color: isDarkMode ? '#e8c4d8' : '#5d1049',
  },
  content: {
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: isDarkMode ? '#9c1a5b' : '#af216d',
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: isDarkMode ? '#e8c4d8' : '#5d1049',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: isDarkMode ? '#d8a8c8' : '#af216d',
    marginBottom: 30,
  },
  infoBox: {
    backgroundColor: isDarkMode ? '#1e1e1e' : 'white',
    padding: 20,
    borderRadius: 10,
    borderWidth: isDarkMode ? 1 : 0,
    borderColor: isDarkMode ? '#333' : 'transparent',
    elevation: 2,
  },
  infoText: {
    fontSize: 16,
    color: isDarkMode ? '#e0e0e0' : '#4a4a4a',
    lineHeight: 24,
    textAlign: 'justify',
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
    marginBottom: 5,
  },
  contactText: {
    color: isDarkMode ? '#e0e0e0' : '#5d1049',
    fontSize: 16,
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
    color: isDarkMode ? '#e8c4d8' : '#5d1049',
    fontSize: 14,
    fontWeight: '500',
  },
});