import React, { useState } from 'react';
import { Text, TextInput, View, ImageBackground, StyleSheet, TouchableOpacity as Button, Switch } from 'react-native';
import { Input } from 'react-native-elements';

const image = { uri: "https://mobimg.b-cdn.net/v3/fetch/67/674d9f64c8a3c0110654ebdd1e037503.jpeg" };
constructor() {
  super();
  this.state = {
    content: true
  }
}
const Calculator = () => {
  const [text, setText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ImageBackground source={image} resizeMode= 'cover' style = {styles.image}>
    
      <View style={{padding: 10, marginTop: 50}}>
        <View style = {{
          backgroundColor: 'rgba(204,255,204,1)',
          borderRadius: 10,}}>
          <TextInput
            style={{height: 40, fontSize: 20,}}
            placeholder="What to calculate?"
            onChangeText={newText => {
              setText(eval(newText));
            }}
            defaultValue={text}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            result
          </Text>
        </View>
      </View>
      <View style ={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        <Button style={{
                            borderWidth:2,
                            borderColor:'white',
                            borderRadius: 5,
                            backgroundColor: 'rgba(64,64,64,64)',
                            marginBottom: 20,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                            }}>
            <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>√x      </Text>
        </Button> 
        <Button style={{
                            borderWidth:2,
                            borderColor:'white',
                            borderRadius: 5,
                            backgroundColor: 'rgba(64,64,64,64)',
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                            }}>
            <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>(x)^2</Text>
        </Button> 
        <Button style={{
                            borderWidth:2,
                            borderColor:'white',
                            borderRadius: 5,
                            backgroundColor: 'rgba(64,64,64,64)',
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                            }}>
            <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>(x)^y</Text>
        </Button> 
        <Button style={{
                            borderWidth:2,
                            borderColor:'white',
                            borderRadius: 5,
                            backgroundColor: 'rgba(64,64,64,64)',
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                            }}>
            <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>log(x)</Text>
        </Button> 
        <Button style={{
                            borderWidth:2,
                            borderColor:'white',
                            borderRadius: 5,
                            backgroundColor: 'rgba(64,64,64,64)',
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                            }}>
            <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>ln(x)</Text>
        </Button> 
        <Button style={{
                            borderWidth:2,
                            borderColor:'white',
                            borderRadius: 5,
                            backgroundColor: 'rgba(64,64,64,64)',
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                            }}>
            <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>log(y)(x)</Text>
        </Button> 
        <Button style={{
                            borderWidth:2,
                            borderColor:'white',
                            borderRadius: 5,
                            backgroundColor: 'rgba(64,64,64,64)',
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                            }}>
            <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>sin(x)</Text>
        </Button> 
        <Button style={{
                            borderWidth:2,
                            borderColor:'white',
                            borderRadius: 5,
                            backgroundColor: 'rgba(64,64,64,64)',
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                            }}>
            <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>cos(x)</Text>
        </Button> 
        <Button style={{
                            borderWidth:2,
                            borderColor:'white',
                            borderRadius: 5,
                            marginBottom: 20,
                            marginRight: 230,
                            backgroundColor: 'rgba(64,64,64,64)',
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                            }}>
            <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>tan(x)</Text>
        </Button> 
        <Button style={{
                            borderWidth:2,
                            borderColor:'white',
                            borderRadius: 5,
                            backgroundColor: 'gray',
                            height: 70,
                            width: 60,
                            alignItems: 'center',
                            justifyContent: 'center'
                            }}>
            <Text style = {{textAlign: 'center', fontSize: 18, color: 'white', fontWeight:'bold'}}>clear</Text>
        </Button> 
      </View>
      <View style={{padding: 10}}>
        <Button style = {{
            borderWidth: 2,
            borderColor:'white',
            borderRadius:5,
            backgroundColor: 'gray',
            height: 70,
            width: 60,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text style = {{textAlign: 'center', fontSize: 18, color: 'white', fontWeight:'bold'}}>Calculate</Text>
        </Button>
      </View>
      <View style = {{marginBottom: 20}}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
      </View>
      <View style = {{
          backgroundColor: 'rgba(204,255,204,1)',
          borderRadius: 15,
          }}>
        <Input label="HISTORY" placeholder='Search' />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default Calculator;