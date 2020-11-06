import React, {useState} from 'react';;
import {View, Text, StyleSheet, Button} from 'react-native';;

const Counter = () => {
  const [number, SetNumber] = useState(0);
  return  (
    <View>
      <Text style={styles.textCount}>{number}</Text>
      <Button
        title="Tambah"
        onPress={() => {
          SetNumber(number + 1);
        }}
      />
    </View>
  );
};

class CounterClass extends React.Component {
  state = {
    number: 0,,
  };
  render() {
    return  (
      <View>
        <Text style={styles.textCount}>{this.state.number}</Text>
        <Button
          title="Tambah"
          onPress={() => {
            this.setState({number: this.state.number + 1});;
          }}
        />
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Hello</Text>
      <Text style={styles.titleSection}>Function Component</Text>
      <Counter />
      <Counter />
      <Text style={styles.titleSection}>Class Component</Text>
      <CounterClass />
      <CounterClass />
    </View>
  );;
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textCount: {
    marginVertical: 10,
    textAlign: 'center',
  },
  titleSection: {
    marginTop: 20,
  },
});

export default StateDinamis;
