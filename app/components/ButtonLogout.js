import React from 'react';
import { View,  StyleSheet, Button as RNButton } from 'react-native';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
});

class ButtonLogout extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <RNButton title='LOGOUT' onPress={() => this.props.navigation.navigate('Login')} />
            </View>
        )
    }
}

export default withNavigation(ButtonLogout);