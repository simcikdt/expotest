import { ScrollView, StyleSheet, View } from 'react-native'
import { Video } from 'expo-av'
import React from 'react'
import VideoPlayer from 'expo-video-player'

const App = () => (
    <View style={[styles.container, {
                    transform: [{
                        rotate: '90deg'
                    }]
    }]}>
      <VideoPlayer
          videoProps={{
            shouldPlay: true,
            resizeMode: Video.RESIZE_MODE_CONTAIN,
            source: {
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            },
          }}
          ref={this._handleVideoRef}
          inFullscreen={true}
          showControlsOnLoad={false}
          showFullscreenButton={true}
          width={1920}
          height={1200}
      />
    </View>
)

const styles = StyleSheet.create({
  container: {
      borderColor: 'red',
      borderWidth: 3,
      position: 'absolute',
      top: 0,
      left: -475,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
