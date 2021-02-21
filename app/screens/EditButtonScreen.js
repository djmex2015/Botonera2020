import React from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Button from '../components/Button';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

const styles = StyleSheet.create({
    container: {
        flex: 10,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        // color: '#000000',
        paddingTop: 20,
        flexDirection: 'column',

    },
    text: {
        flex: 1,
        fontSize: 32,
        color: '#000000',
        fontFamily: 'Lato_black',
    },
    textFields: {
        fontSize: 22,
        color: '#000000',
        fontFamily: 'Lato_black',
    },

    input: {
        paddingLeft: 15,
        paddingRight: 15,
        height: 40,
        color: '#ffffffff',
        fontSize: 18,
        fontFamily: 'Lato_black',
        backgroundColor: '#000000',
        borderRadius: 10,
        borderLeftWidth: 4,
        borderRightWidth: 4,

    }
});




export default class EditButtonScreen extends React.Component {

    // DocumentPicker.show({
    //     filetype: [DocumentPickerUtil.images()],
    //   },(error,res) => {
    //     // Android
    //     console.log(
    //        res.uri,
    //        res.type, // mime type
    //        res.fileName,
    //        res.fileSize
    //     );
    //   });

    render() {
        this.state = { ...this.props.navigation.state.params };
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.text}>BUTTON:</Text>
                    <Button style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', alignContent: 'center' }} audio={this.state.audio} isBig></Button>
                    <View style={{ padding: 10, flex: 2, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row' }}>
                        <View style={{ flex: 2, padding: 10 }}>
                            <Text style={styles.textFields}>NAME</Text>
                            <TextInput placeholder="Type name"
                                onChangeText={(name) => this.setState({ name })} style={styles.input} placeholderTextColor='white' maxLength={20} />
                        </View>
                        <View style={{ flex: 2, padding: 10 }}>
                            <Text style={styles.textFields}>IMAGE</Text>
                            <TextInput placeholder="Type image"
                                onChangeText={(image) => this.setState({ image })} style={styles.input} placeholderTextColor='white' maxLength={20} />
                        </View>
                    </View>
                    <View style={{ padding: 10, flex: 2, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row' }}>
                        <View style={{ flex: 2, padding: 10 }}>
                            <Text style={styles.textFields}>AUDIO UPLOAD</Text>
                            <TextInput style={styles.input} value={this.state.audio} placeholderTextColor='white' maxLength={20} />
                        </View>
                        <View style={{ flex: 2, padding: 10 }}>
                            <Text style={styles.textFields}>AUDIO RECORD</Text>
                            <TextInput style={styles.input} value={this.state.audio} placeholderTextColor='white' maxLength={20} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}