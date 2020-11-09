import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImageInput from './ImageInput';




export default function ImageInputList({ imageUris = [], onRemoveImage, onAddImage}) {
    
    const scrollView = useRef();
    
    return (
        <View>
            <ScrollView 
                ref={scrollView}
                horizontal
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
            >
                <View style={styles.container}>
                { imageUris.map(uri => (
                    <View style={styles.images} key={uri}>
                        <ImageInput 
                            imageUri={uri}
                            key={uri}
                            onImageChange={() => onRemoveImage(uri)}
                        />
                    </View>
                ))}
                    <ImageInput onImageChange={uri => onAddImage(uri)} />
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
      container: {
        flexDirection: "row"
      },
      images: {
          marginRight: 10
      }
})
