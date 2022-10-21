import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Calculator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="What to calculate?"
        onChangeText={newText => {
          setText(eval(newText));
        }}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text}
      </Text>
    </View>
  );
}

export default Calculator;