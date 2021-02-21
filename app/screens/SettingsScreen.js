import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        color: '#000000',
        padding: 20,
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        color: '#000000',
        fontFamily: 'Lato_black',
    },
});

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <AntDesign name='setting'
                size={25}
                color={tintColor} />
        )
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>At the moment, the settings screen is unavailable.</Text>
            </View>
        )
    }
}