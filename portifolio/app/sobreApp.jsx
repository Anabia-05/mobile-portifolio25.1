// app/index.js
import { Link } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
        
        <View style={styles.header}>
            <Link href="../" asChild>
            <Ionicons name="arrow-back" size={24} color="#af216d" style={styles.backButton} />
            </Link>
            <Text style={styles.title}>Sobre o App</Text>
        </View>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            O app foi criado com:
            {"\n\n• "}React Native, usando  View, Text, TextInput, Pressable, StyleSheet, Alert, FlatList,SafeAreaView,useColorScheme e ScroolView
            {"\n• "}Expo, usando tambem expo route
            {"\n• "}Ionicons, para os icones usados 
          </Text>
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
  

  infoBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    elevation: 2,
  },
  infoText: {
    fontSize: 17,
    color: '#4a4a4a',
    lineHeight: 20,
  },
  
});