import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Goals = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Goals</Text>

    </SafeAreaView>
  )
}

export default Goals

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#5a2424ff'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
})