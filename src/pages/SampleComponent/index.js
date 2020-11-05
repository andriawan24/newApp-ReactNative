import React from 'react';
import { View, TextInput, Image, Text, StatusBar } from 'react-native';

const SampleComponent = () => {
    return (
      <View>
        <StatusBar 
          backgroundColor='#bbbfca'
          barStyle="light-content" />
        <View style={{width: 80, height: 80, backgroundColor: 'red', alignSelf: "center", marginVertical: 20}}  />
        <Text>Naufal</Text>
        <Ganteng />
        <Text>Fawwaz</Text>
        <Text>Andriawan</Text>
        <Photo /> 
        <TextInput style={{borderWidth: 1, marginHorizontal: 20, marginVertical: 10}} />
        <Profile />
        <BoxGreen />
      </View>
    );
}
  
const Ganteng = () => {
    return (
        <Text>Gamntenk</Text>
    );
};

const Photo = () => {
    return(
        <Image 
        source={{uri: 'https://placeimg.com/640/480/tech'}} 
        style={{width: 100, height: 100, alignSelf: "center"}} />
    );
};

class BoxGreen extends React.Component {
    render() {
        return (
        <Text>Hello World</Text>
        );
    }
}

class Profile extends React.Component {
    render () {
        return (
        <View>
            <Image 
            source={{uri: "https://placeimg.com/640/480/tech"}} 
            style={{width: 100, height: 100}} />
            <Text style={{fontSize: 50}}>Hello World</Text>
        </View>
        );
    }
}

export default SampleComponent;
  