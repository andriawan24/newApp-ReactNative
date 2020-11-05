import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import SampleComponent from './pages/SampleComponent';
import Styling from './pages/Styling';
import FlexBox from './pages/FlexBox';
import PositionReactNative from './pages/PositionReactNative';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';

const App = () => {
  const [isShow, setIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShow(false);
  //   }, 6000);
  // }, []);
  return (
    <ScrollView>
      {/* <SampleComponent />
      <Styling /> */}
      {/* {isShow && <FlexBox />} */}
      {/* <PositionReactNative /> */}
      {/* <PropsDinamis /> */}
      <StateDinamis />
    </ScrollView>
  );
};

export default App;