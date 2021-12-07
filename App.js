import React, {useEffect} from 'react';
import Sound from 'react-native-sound';
import { ImageBackground, TouchableOpacity, StyleSheet, Image, Text, View, TouchableOpacityBase, Button } from 'react-native';

const styles = StyleSheet.create({
container: {
flex: 1,
// below line not working?
//justifyContent: 'space-between',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#000',
borderRadius: 15,
borderColor: 'orange',
borderStyle: 'solid',
borderWidth: 20,
margin: 20,
},
playBtn: {
  padding: 0,
  margin: 20,
  height: 0,
  width: 0,
  borderLeftWidth: 30,
  borderLeftColor: 'transparent',
  borderRightWidth: 30,
  borderRightColor: 'transparent',
  borderBottomWidth: 40,
  borderBottomColor: 'red',
  //backgroundColor: 'red',
},
  playBtn2: {
    padding: 0,
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'green',
},
picture: {
  flex: 1,
  justifyContent: "center",
},
button: {
  borderRadius: 25,
},
});

const coverPic = {
uri: 'https://img.xcitefun.net/users/2015/01/382650,xcitefun-philippines-tour-1.jpg',
width: 190,
height: 190,
}

//var Sound = require('react-native-sound');

Sound.setCategory('Playback');

var testSound = new Sound('aceofspadesaudio.mp3', Sound.MAIN_BUNDLE, () => {
});

var testSound2 = new Sound('sample3s.mp3', Sound.MAIN_BUNDLE, () => {
});

var testSound3 = new Sound('kickbass.mp3', Sound.MAIN_BUNDLE, () => {
});

const App = () => {
  // useEffect(() => {
  // //   testSound.setVolume(1);
  //   return () => {
  //     testSound.release();
  //   };
  // }, []);
  const playPause = () => {
    testSound.play(success => {
      // if (success) {
      //   console.log('sucessfully played');
      // } else {
      //   console.log('playback failed due to audio decoding errors');
      // }
    });
  };
  const play2 = () => {
    testSound2.play(success => {
    });
  };
  const play3 = () => {
    testSound3.play(success => {
    });
  };
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.playBtn} onPress={playPause}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playBtn2} color="yellow" onPress={play2}>
        </TouchableOpacity>
        <Button title="Press" color="purple" onPress={play3} />
    </View>
  )
};


export default App;