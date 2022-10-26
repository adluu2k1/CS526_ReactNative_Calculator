import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity as Button, SafeAreaView, VirtualizedList, StatusBar } from 'react-native';
import { Input } from 'react-native-elements';

function log(num, base=10) {
  return Math.log(num) / Math.log(base);
} 

const DATA = [];

const Calculator = () => {

  const image = { uri: "https://mobimg.b-cdn.net/v3/fetch/67/674d9f64c8a3c0110654ebdd1e037503.jpeg" };

  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const [shouldShow, setShouldShow] = useState(false); // hide & show component
  const [displayDATA, setDisplayData] = useState(DATA);
  const [searchInput, setSearchInput] = useState('');

  // Các hàm xử lý khi giá trị các biến thay đổi
  useEffect(() => {
    if (input != '' && text != '') {
      DATA.push([input.replace(/ /g, '').toLowerCase(), text]);
      console.log(DATA);
    }
  }, [text]);
  useEffect(() => {
    if (searchInput.length == 0) {
      setDisplayData(DATA);
    }
    else {
      setDisplayData(DATA.filter(item => item[0].includes(searchInput) || item[1].includes(searchInput)));
    }
  }, [searchInput]);

  // Controls references declaration
  let textInput = null;

  // Content bên trong container history của các phép tính
  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `${data[index][0]}\n${data[index][1]}`, // display các phép tính vào history
  });
  const getItemCount = (data) => data.length; // count số lượng container history

  const Item = ({title}) => {
    const arr_text = title.split(searchInput);
    let last_text = arr_text.pop();
    return (
      <View style={stylesList.item}>
        <Text>{arr_text.map(substr => {
          if (searchInput != '') {
            return (
              <Text style={stylesList.title}>{substr}
                <Text style={stylesList.highlight}>{searchInput}</Text>
              </Text>);
          }
          else {
            return <Text style={stylesList.title}>{substr}</Text>;
          }
          })}<Text style={stylesList.title}>{last_text}</Text>
        </Text>
      </View>
    )
  }

  // render
  return (
    <ImageBackground source={image} resizeMode= 'cover' style = {styles.image}>
    
      {/* màn hình nhập phép tính và hiển thị kết quả */}
      <View style={{padding: 10, marginTop: 50}}>
        <View style = {{
          backgroundColor: 'rgba(204,255,204,1)',
          borderRadius: 10,}}>
          <Input
            ref={(thisObject) => { textInput = thisObject}}
            style={{height: 40, fontSize: 20,}}
            placeholder="What to calculate?"
            onChangeText={(NewText) => {
              setInput(NewText);
            }}
            value={input}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {text}
          </Text>
        </View>
      </View>

      {/* các nút phép tính khoa học */}
      <View style ={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10}}>
        <Button style={{
            borderWidth:2,
            borderColor:'white',
            borderRadius: 5,
            backgroundColor: 'rgba(64,64,64,64)',
            marginBottom: 20,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => {
            setInput(input + "√(");
            textInput.focus();
          }}>
          <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>  √x  </Text>
        </Button> 
        <Button style={{
            borderWidth:2,
            borderColor:'white',
            borderRadius: 5,
            backgroundColor: 'rgba(64,64,64,64)',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => {
            setInput(input + "^2");
            textInput.focus();
          }}>
          <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>  (x)^2  </Text>
        </Button> 
        <Button style={{
            borderWidth:2,
            borderColor:'white',
            borderRadius: 5,
            backgroundColor: 'rgba(64,64,64,64)',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => {
            setInput(input + "^");
            textInput.focus();
          }}>
          <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>  (x)^y  </Text>
        </Button> 
        <Button style={{
            borderWidth:2,
            borderColor:'white',
            borderRadius: 5,
            backgroundColor: 'rgba(64,64,64,64)',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => {
            setInput(input + "log(");
            textInput.focus();
          }}>
          <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>  log(x,b)  </Text>
        </Button> 
        <Button style={{
            borderWidth:2,
            borderColor:'white',
            borderRadius: 5,
            backgroundColor: 'rgba(64,64,64,64)',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => {
            setInput(input + "ln(");
            textInput.focus();
          }}>
          <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>  ln(x)  </Text>
        </Button> 
        <Button style={{
            borderWidth:2,
            borderColor:'white',
            borderRadius: 5,
            backgroundColor: 'rgba(64,64,64,64)',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => {
            setInput(input + "sin(");
            textInput.focus();
          }}>
          <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>  sin(x)  </Text>
        </Button> 
        <Button style={{
            borderWidth:2,
            borderColor:'white',
            borderRadius: 5,
            backgroundColor: 'rgba(64,64,64,64)',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => {
            setInput(input + "cos(");
            textInput.focus();
          }}>
          <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>  cos(x)  </Text>
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
          }}
          onPress={() => {
            setInput(input + "tan(");
            textInput.focus();
          }}>
          <Text style = {{textAlign: 'center', fontSize: 18, color: 'white'}}>  tan(x)  </Text>
        </Button> 
      </View>
      <View style={{justifyContent: 'center', marginTop: 20, display: 'flex', flexDirection:'row', flexWrap: 'wrap'}}>
        <Button style={{
            borderWidth: 2,
            borderColor:'white',
            borderRadius: 5,
            backgroundColor: 'gray',
            height: 50,
            width: 60,
            alignItems: 'center',
            marginHorizontal: 10,
            justifyContent: 'center'
          }}
          onPress={() => {
            setInput("");
            setText("");
            textInput.focus();
          }}>
          <Text style = {{textAlign: 'center', fontSize: 18, color: 'white', fontWeight:'bold'}}>clear</Text>
        </Button> 
        <Button style = {{
            borderWidth: 2,
            borderColor:'white',
            borderRadius:5,
            backgroundColor: 'blue',
            height: 50,
            width: 100,
            alignItems: 'center',
            marginHorizontal: 10,
            justifyContent: 'center'
          }}
          onPress={() => {
            // Transform input into JS syntax string
            let s_calc = input.replace(/ /g, '');
            s_calc = s_calc.replace(/√\(/gi, "Math.sqrt(");
            s_calc = s_calc.replace(/\^/g, "**");
            s_calc = s_calc.replace(/log/gi, "log");
            s_calc = s_calc.replace(/ln\(/gi, "Math.log(");
            s_calc = s_calc.replace(/sin\(/gi, "Math.sin(");
            s_calc = s_calc.replace(/cos\(/gi, "Math.cos(");
            s_calc = s_calc.replace(/tan\(/gi, "Math.tan(");

            // Calculate
            try {
              setText(eval(s_calc).toString());
            }
            catch(error) {
              setText("Error");
              console.log(error);
            }
          }}>
          <Text style = {{textAlign: 'center', fontSize: 18, color: 'white', fontWeight:'bold'}}>Calculate</Text>
        </Button>
      </View>
      
      {/* HISTORY */}
      
      <SafeAreaView style = {{flex: 1}}>
        <Button 
          style = {{
            borderWidth: 2,
            borderColor:'white',
            borderRadius:5,
            backgroundColor: 'rgba(64,64,64,64)',
            marginTop: 30,
            marginBottom: 20,
            height: 50,
            width: 200,
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
            <Input
              label="HISTORY"
              placeholder='Search'
              onChangeText={(SearchText) => {
                setSearchInput(SearchText.replace(/ /g, '').toLowerCase());
              }}
            />
            
            {/* list các container lịch sử các phép tính đã tính */}

            <View>
            { (displayDATA.length != 0) ? (
              <SafeAreaView style = {stylesList.container}>
                <VirtualizedList
                  data={displayDATA}
                  renderItem={({ item }) => <Item title={item.title} />}
                  getItemCount = {getItemCount}
                  getItem = {getItem}
                  // initialNumToRender={4}
                  // keyExtractor={item => item.key}
                />
              </SafeAreaView>) : null
            }
            </View>
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
  highlight: {
    fontSize: 32,
    color: 'red',
  },
});

export default Calculator;