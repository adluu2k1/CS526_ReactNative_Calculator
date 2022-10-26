import React, { useState } from 'react';
import { Text, TextInput, View, ImageBackground, StyleSheet, TouchableOpacity as Button, SafeAreaView, VirtualizedList, StatusBar } from 'react-native';
import { Input } from 'react-native-elements';


const image = { uri: "https://mobimg.b-cdn.net/v3/fetch/67/674d9f64c8a3c0110654ebdd1e037503.jpeg" };
// Content bên trong container history của các phép tính
const DATA = [];
const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Math ${index+1}\nResult: ${index+1}`, // display các phép tính vào history
});
const getItemCount = (data) => 3; // count số lượng container history
const Item = ({title}) => (
  <View style={stylesList.item}>
    <Text style={stylesList.title}>{title}</Text>
  </View>
);
// Content bên trong container history của các phép tính


const Calculator = () => {
  const [text, setText] = useState('');
  const [shouldShow, setShouldShow] = useState(true); // hide & show component
  return (
    <ImageBackground source={image} resizeMode= 'cover' style = {styles.image}>
      
{/* màn hình nhập phép tính và hiển thị kết quả */}
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
{/* màn hình nhập phép tính và hiển thị kết quả */}
{/* các nút phép tính khoa học */}
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
            width: 80,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text style = {{textAlign: 'center', fontSize: 18, color: 'white', fontWeight:'bold'}}>Calculate</Text>
        </Button>
      </View>
      {/* các nút phép tính khoa học */}
      
      {/* HISTORY */}

      <SafeAreaView style = {{flex: 1}}>
        <Button 
          style = {{
            borderWidth: 2,
            borderColor:'white',
            borderRadius:5,
            backgroundColor: 'gray',
            marginBottom: 20,
            height: 50,
            width: 120,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => setShouldShow(!shouldShow)}>
          <Text style = {{textAlign: 'center', fontSize: 18, color: 'white', fontWeight:'bold'}}>Hide & Show History</Text>
        </Button>
        <View>
          { shouldShow ? (
            <View style = {{
              backgroundColor: 'rgba(204,255,204,1)',
              borderRadius: 15,
              }}>
              <Input label="HISTORY" placeholder='Search' />

{/* list các container lịch sử các phép tính đã tính */}

              <SafeAreaView style = {stylesList.container}>
                <VirtualizedList
                  data={DATA}
                  initialNumToRender={4}
                  renderItem={({ item }) => <Item title={item.title} />}
                  keyExtractor={item => item.key}
                  getItemCount = {getItemCount}
                  getItem = {getItem}
                />
              </SafeAreaView>
            </View>) : null
          }
        </View>
      </SafeAreaView>
        
    </ImageBackground>
  );
};
// Các thuộc tính của background
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
// Các thuộc tính của box history
const stylesList = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: 'black',
    borderRadius: 20,
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
});


export default Calculator;