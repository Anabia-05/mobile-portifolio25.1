// app/projetos.js
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Linking, FlatList, useColorScheme } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Projetos() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = createStyles(isDarkMode);
  const projetos = [
    {
      id: '1',
      titulo: 'Projeto em Banco de Dados',
      descricao: 'Sistema com banco de dados para uma plataforma de gerenciamento de arquivos. O sistema oferece uma interface para upload e gerenciamento de arquivos, com funcionalidades como criação, atualização, remoção e visualização de arquivos. Além disso, há controle de acesso, versionamento e suporte ao histórico de operações, com suporte para diferentes papéis e permissões.',
      link: 'https://github.com/Anabia-05/ProjetoBD',
      
    },
    {
      id: '2',
      titulo: 'Desenvolvimento de Árvore Red-Black',
      descricao: 'Implementação de uma Árvore Red-Black desenvolvida em Java. Consiste em uma estrutura de dados auto-balanceada baseada em árvore binária de busca. Ela garante eficiência em operações de busca, inserção e remoção, mantendo o tempo de execução em O(log n).',
      link: 'https://github.com/Anabia-05/Red-Black-Tree',
      
    },
    {
      id: '3',
      titulo: 'Projeto de Árvore-B',
      descricao: 'Implementação de uma Árvore B desenvolvida em Java. Uma estrutura de dados auto-balanceada amplamente utilizada para organizar e gerenciar grandes volumes de dados. Ela é especialmente eficiente em sistemas de banco de dados e sistemas de arquivos devido à sua capacidade de minimizar o número de acessos ao disco.',
      link: 'https://github.com/Anabia-05/Arvore-B',
      
    }
  ];

  const abrirLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir link:", err));
  };

  const renderItem = ({ item }) => (
    <View style={styles.projetoCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.projetoTitulo}>{item.titulo}</Text>
      </View>
      
      <Text style={styles.projetoDescricao}>{item.descricao}</Text>
      
      <TouchableOpacity 
        style={styles.linkButton}
        onPress={() => abrirLink(item.link)}
      >
        <Ionicons name="logo-github" size={18} color="white" />
        <Text style={styles.linkText}>Acessar no GitHub</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Link href="../" asChild>
            <Ionicons name="arrow-back" size={24} color={isDarkMode ? '#e8c4d8' : '#af216d'} style={styles.backButton} />
          </Link>
          <Text style={styles.title}>Meus Projetos</Text>
        </View>

        <FlatList
          data={projetos}
          renderItem={({ item }) => (
            <View style={styles.projetoCard}>
              <Text style={styles.projetoTitulo}>{item.titulo}</Text>
              <Text style={styles.projetoDescricao}>{item.descricao}</Text>
              <TouchableOpacity 
                style={styles.linkButton}
                onPress={() => Linking.openURL(item.link)}
              >
                <Ionicons name="logo-github" size={18} color="white" />
                <Text style={styles.linkText}>Acessar no GitHub</Text>
              </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={styles.listContainer}
        />
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
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: isDarkMode ? '#e8c4d8' : '#5d1049',
  },
  listContainer: {
    paddingBottom: 20,
  },
  projetoCard: {
    backgroundColor: isDarkMode ? '#1e1e1e' : '#fff9fb',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: isDarkMode ? '#333' : '#ffd6e7',
  },
  projetoTitulo: {
    fontSize: 18,
    fontWeight: '600',
    color: isDarkMode ? '#e8c4d8' : '#5d1049',
    marginBottom: 8,
  },
  projetoDescricao: {
    fontSize: 14,
    color: isDarkMode ? '#e0e0e0' : '#4a4a4a',
    lineHeight: 20,
    marginBottom: 15,
  },
  linkButton: {
    flexDirection: 'row',
    backgroundColor: isDarkMode ? '#9c1a5b' : '#af216d',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  linkText: {
    color: 'white',
    fontWeight: '500',
  },
});