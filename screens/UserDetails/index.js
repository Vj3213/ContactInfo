import React, { Component } from 'react';
import { Image, SafeAreaView, Text, Linking, View } from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

export default class UserDetails extends Component {
    constructor(props) {
        super(props)
        this.user = this.props.route.params.user;
    }

    render() {
        const { image, firstName, lastName, countryCode, phoneNumber, emailId, address, website } = this.user;
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.imageAndNameCont}>
                    <Image
                        source={{ uri: image }}
                        style={styles.photo}
                    />
                    <Text style={styles.name}>
                        {`${firstName} ${lastName}`}
                    </Text>
                </View>
                <View style={styles.detailsCont}>
                    <View style={styles.textAndIconCont}>
                        <MaterialIcons name="call" size={24} />
                        <Text style={styles.detailsTextStyle}>{`(${countryCode}) ${phoneNumber}`}</Text>
                    </View>
                    <View style={styles.textAndIconCont}>
                        <MaterialIcons name="email" size={24} />
                        <Text style={styles.detailsTextStyle}>{emailId}</Text>
                    </View>
                    <View style={styles.textAndIconCont}>
                        <MaterialCommunityIcons name="bank-outline" size={24} />
                        <Text style={styles.detailsTextStyle}>{address}</Text>
                    </View>
                    <View style={styles.textAndIconCont}>
                        <FontAwesome5Icons name="globe" size={24} />
                        <Text
                            style={styles.detailsTextStyle}
                            onPress={() => Linking.openURL(website)} //Linking only works on Actual devices and not on Simulator/emulator
                        >
                            {website}
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
