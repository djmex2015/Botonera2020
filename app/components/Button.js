/* eslint-disable prettier/prettier */
import React from 'react';
import {
    TouchableOpacity,
    Image,
    StyleSheet,
    Text,
    Button as RNButton,
} from 'react-native';
import Sound from 'react-native-sound';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    button: {
        width: 80,
        height: 80,
    },
    bigButton: {
        width: 150,
        height: 150,
    },
    text: {
        paddingVertical: 5,
        fontFamily: 'Lato',
        width: 80,
        textAlign: 'center',
    },
});

function playAudio(audio) {
    if (audio) {
        Sound.setCategory('Playback', true);
        var sound = new Sound(audio, Sound.MAIN_BUNDLE, (e) => {
            if (e) {
                console.log('error', e);
            } else {
                sound.play(() => sound.release()); // Release when it's done so we're not using up resources
            }
        });
    }
}

class Button extends React.Component {
    render() {
        const { name, audio, edit, isBig } = this.props;
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => playAudio(audio)}>
                <Image
                    style={isBig ? styles.bigButton : styles.button}
                    source={require('../../resources/button_img.png')}
                />
                {name && <Text style={styles.text}>{name}</Text>}
                {edit && (
                    <RNButton
                        title="EDIT"
                        onPress={() =>
                            this.props.navigation.navigate('EditButton', {
                                name: name,
                                audio: audio,
                            })
                        }
                    />
                )}
            </TouchableOpacity>
        );
    }
}

export default withNavigation(Button);
