import { Link } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SobreApp() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = createStyles(isDarkMode);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Link href="../" asChild>
              <Ionicons name="arrow-back" size={24} color={isDarkMode ? '#e8c4d8' : '#af216d'} style={styles.backButton} />
            </Link>
            <Text style={styles.title}>Sobre o App</Text>
          </View>
          
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              O app foi criado com:
              {"\n\n• "}React Native, utilizando componentes como: View, Text, TextInput, Pressable, StyleSheet, Alert, FlatList, SafeAreaView, useColorScheme e ScrollView.
              {"\n• "}Expo, incluindo também o Expo Router para navegação.
              {"\n• "}Ionicons, para os ícones utilizados na interface.
            </Text>
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
  },
});