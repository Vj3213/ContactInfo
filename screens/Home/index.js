import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import api from '../../api';
import styles from './styles'
import Swipeout from 'react-native-swipeout';

class Home extends Component {

    componentDidMount() {
        this.fetchUserData();
    }

    fetchUserData = () => {
        this.props.dispatch({ type: 'FETCH_USERS_DATA' });
        api('users.json', this.onDataArrived)
    }

    onDataArrived = (resp) => {
        if (resp?.status == 200) {
            this.props.dispatch({ type: 'FETCH_USERS_DATA_SUCCEED', users: resp?.data?.users });
        } else {
            this.props.dispatch({ type: 'FETCH_USERS_DATA_FAILED' });
        }
    }

    renderErrComp = () => {
        return (
            <View style={styles.errContainer}>
                <Text style={styles.errText}>Something Went Wrong at our End</Text>
                <TouchableOpacity style={styles.buttonCont} onPress={this.fetchUserData}>
                    <Text style={{ fontSize: 16 }}>RETRY</Text>
                </TouchableOpacity>
            </View>
        )
    }

    deleteUser = (userId) => {
        this.props.dispatch({ type: 'DELETE_USER', userId })
    }

    renderEachUser = ({ item }) => {
        const { id, image, firstName, lastName, countryCode, phoneNumber } = item;
        const swipeButtonConfig = [{
            text: 'DELETE',
            backgroundColor: '#BF0000',
            onPress: () => this.deleteUser(id)
        }];
        return (
            <Swipeout
                right={swipeButtonConfig}
                backgroundColor='transparent'
            >
                <TouchableOpacity style={styles.userContainer} onPress={() => this.props.navigation.navigate('UserDetails', { user: item })}>
                    <Image
                        source={{ uri: image }}
                        style={styles.photo}
                    />
                    <View style={styles.userDetailsContainer}>
                        <Text>{`>`}</Text>
                        <View style={styles.nameAndNumber}>
                            <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
                            <Text style={styles.number}>{`(${countryCode}) ${phoneNumber}`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeout>
        )
    }

    renderContactList = () => {
        let { data } = this.props;
        data = data ? data : [];
        return (
            <FlatList
                data={data}
                renderItem={this.renderEachUser}
                keyExtractor={item => item.id.toString()}
            />
        )
    }

    renderData = () => {
        const { isErrorOccurred } = this.props;
        if (isErrorOccurred) {
            return this.renderErrComp();
        } else {
            return this.renderContactList();
        }

    }

    renderLoader = () => {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    render() {
        const { isLoading } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                {
                    isLoading
                        ? this.renderLoader()
                        : this.renderData()
                }
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({ ...state })

export default connect(mapStateToProps)(Home);