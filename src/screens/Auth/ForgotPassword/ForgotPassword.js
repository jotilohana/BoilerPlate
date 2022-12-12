import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import * as EmailValidator from 'email-validator';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInputView from '../../../components/CustomTextInputView';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import { colors } from '../../../utils';
import { appIcons, appLogos } from '../../../assets/index';
import styles from './styles';
class ForgotPassword extends Component {
  state = {
    email: '',
  };

  onSubmit = () => {
    const { email } = this.state;
    if (!email) {
      Toast.show({
        text1: 'Please enter email address',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!EmailValidator.validate(email)) {
      Toast.show({
        text1: 'Please enter a valid email address',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Toast.show({
        text1: 'OTP verification code has been sent to your email address',
        type: 'success',
        visibilityTime: 3000,
      });
      NavService.navigate('Otp', { screenName: 'forgot' });
    }
  };

  render() {
    const { email } = this.state;
    return (
      <CustomBackground
        showLogo={false}
        titleText={'FORGOT PASSWORD'}
        onBack={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
          <View style={[styles.container, { marginTop: 20 }]}>
            <View style={styles.logoStyle}>
              <Image style={styles.applogo} source={appLogos.appLogo} />
            </View>
            <View style={styles.textNormal}>
              <CustomTextInputView
                placeholder={'Email'}
                label={'Email'}
                leftIcon={appIcons.email}
                value={email}
                Onchange={value => this.setState({ email: value })}
                containerStyle={{
                  marginBottom: 20,
                  width: '90%',
                  color: colors.black,
                }}
              />
              <CustomButton
                title="SUBMIT"
                onPress={this.onSubmit}
                buttonStyle={{ borderRadius: 10 }}
                textStyle={{ fontSize: 22 }}
              />
            </View>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default ForgotPassword;
