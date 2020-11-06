import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginHorizontal: 10}}>
      <Image
        source={{uri: 'https://placeimg.com/640/480/tech'}}
        style={{width: 70, height: 70, borderRadius: 35}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.title}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis</Text>
      <ScrollView horizontal style={{marginTop: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Story title="Naufal Fawwaz" />
          <Story title="Kelas Online" />
          <Story title="Hello Wolrld" />
          <Story title="Hello Wolrld" />
          <Story title="Hello Wolrld" />
          <Story title="Hello Wolrld" />
          <Story title="Hello Wolrld" />
          <Story title="Hello Wolrld" />
          <Story title="Hello Wolrld" />
          <Story title="Hello Wolrld" />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;
