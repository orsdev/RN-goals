import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Image, StyleSheet, TextInput, View } from 'react-native';
import { Button } from './components/ui';
import { GoalItem } from './components';

export default function App() {
  const [goal, setGoal] = useState('');
  const [list, setList] = useState([]);

  const handleAddGoal = () => {
    if (!goal) return;
    setList(prev => [...prev, {
      text: goal,
      id: Math.random().toString()
    }]);
    setGoal('')
  };

  const handleDeleteGoal = (value) => {
    const filterList = list.filter(item => item.id !== value);
    setList([...filterList])
  }

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.container}>
        <View style={{
          borderColor: 'red',
          flexDirection: 'column',
          justifyContent: 'center',
          borderWidth: 4,
          width: 90,
          height: 90
        }}>
          {/* Local image not showing for some reason */}
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: "cover"
            }}
            source={require('./assets/images/goal.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Your course goal'
            style={styles.input}
            value={goal}
            onChangeText={setGoal}
          />
          <Button
            title="Add goal"
            handlePress={handleAddGoal}
          />
        </View>
        <View style={styles.goalContainer}>
          <FlatList
            data={list}
            renderItem={({ item }) => <GoalItem goal={item.text} handlePress={() => handleDeleteGoal(item.id)} />}
            keyExtractor={item => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    gap: 3,
    flex: 1
  },
  goalContainer: {
    flexDirection: 'column',
    width: '100%',
    padding: 20,
    gap: 10,
    flex: 4
  },
  input: {
    height: 40,
    width: '70%',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 8
  }
});
