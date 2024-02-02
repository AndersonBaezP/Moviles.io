import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import { FlexScreens1 } from './src/Screen/FlexScreens1';
import { FlexScreens2 } from './src/Screen/FlexScreens2';
import { FlexScreens3 } from './src/Screen/FlexScreens3';
import { FlexScreens4 } from './src/Screen/FlexScreens4';
import { FileScreens5 } from './src/Screen/FileScreens5';
import { FileScreens6 } from './src/Screen/FileScreens6';
import { FileScreens7 } from './src/Screen/FileScreens7';
import { FileScreens8 } from './src/Screen/FileScreens8';
import { FileScreens9 } from './src/Screen/FileScreens9';
import { Ejercicio } from './src/Screen/Ejercicio';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <FlexScreens1/> */}
      {/* <FlexScreens2/> */}
      {/* <FlexScreens3/> */}
      {/* <FlexScreens4/> */}
      {/* <FileScreens5/> */}
      {/* <FileScreens6/> */}
      {/* <FileScreens7/> */}
      {/* <FileScreens8/> */}
      {/* <FileScreens9/> */}
      <Ejercicio/>

    </SafeAreaView>
  )
}


export default App;
