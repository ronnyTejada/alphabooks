import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, useWindowDimensions } from 'react-native';
import { Reader, ReaderProvider, useReader } from 'epubjs-react-native';
import { qc } from '../../data/book';

const darkTheme = {
    'body': {
      background: '#333 !important',
    },
    'span': {
      color: '#fff !important',
    },
    'p': {
      color: 'white !important',
    },
    'li': {
      color: '#fff !important',
    },
    'h1': {
      color: '#fff !important',
    },
    'a': {
      'color': '#fff !important',
      'pointer-events': 'auto',
      'cursor': 'pointer',
    },
    '::selection': {
      background: 'lightskyblue',
    },
  };

function ReaderScreen({route}) {
    const { width, height } = useWindowDimensions();
    const { changeFontSize, goToLocation } = useReader();

    

    return (
        <SafeAreaView >
        <ReaderProvider>
          <Reader
           onLocationsReady={() => {
          
            
              goToLocation(0);
            
          }}
          onDisplayError={e => console.log(e)}
            src={{base64:route.params}}
            width={width}
            height={height }
            defaultTheme={darkTheme}
            
          />
        </ReaderProvider>
      </SafeAreaView>
    );
}

export default ReaderScreen