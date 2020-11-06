import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import Styling from './pages/Styling';
import FlexBox from './pages/FlexBox';
import PositionReactNative from './pages/PositionReactNative';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import ReactNativeSvg from './pages/ReactNativeSvg';
import BasicJavascript from './pages/BasicJavascript';

const App = () => {
  const [isShow, setIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShow(false);
  //   }, 6000);
  // }, []);
  return (
    <ScrollView>
      {/* <SampleComponent /> */}
      {/* <Styling /> */}
      {/* {isShow && <FlexBox />} */}
      {/* <PositionReactNative /> */}
      {/* <PropsDinamis /> */}
      {/* <StateDinamis /> */}
      {/* <Communication /> */}
      {/* <ReactNativeSvg /> */}
      <BasicJavascript />
    </ScrollView>
  );
};

export default App;
