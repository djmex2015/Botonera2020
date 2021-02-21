import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        color: '#000000',
        paddingTop: 20,
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        color: '#000000',
        fontFamily: 'Lato_black',
    },
});

export default class LoginScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                    <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}