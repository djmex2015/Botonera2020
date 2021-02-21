import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button as RNButton } from 'react-native';
import { StackActions } from 'react-navigation'
import server from '../../dummy';
import AntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    container: {
        flex: 10,
        flexDirection: 'column',
        alignItems: 'center',
        color: '#000000',
        paddingTop: 20,
        justifyContent: 'space-between',
    },
    text: {
        flex: 1,
        fontSize: 32,
        color: '#000000',
        fontFamily: 'Lato_black',
    },
    buttons: {
        alignItems: 'center',
        padding: 20,
    },
    buttonsContainer: {
        flex: 6,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    textContainer: {
        paddingTop: 10,
        fontFamily: 'Lato',
    },
});

export default class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>SELECT AN OPTION:</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.buttons} onPress={() => navigate('PlayButtons')}>
                        <Image source={require('../../resources/button_img_home.png')} />
                        <Text style={styles.textContainer}>PLAY BUTTONS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Image source={require('../../resources/button_img_home.png')} />
                        <Text style={styles.textContainer}>CREATE BUTTONS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => navigate('EditButtons')}>
                        <Image source={require('../../resources/button_img_home.png')} />
                        <Text style={styles.textContainer}>EDIT BUTTONS</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'flex-end', marginBottom: 20 }}><Text>@Created By Marcos Cerizola</Text></View>
            </View>

        );
    }
}