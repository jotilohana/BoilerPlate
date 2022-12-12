import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInputView from '../../../components/CustomTextInputView';
import * as EmailValidator from 'email-validator';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import { schema } from '../../../utils/validation';
import { colors } from '../../../utils';
import styles from './styles';
import { appIcons, appLogos } from '../../../assets/index';
class Signup extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  onSubmit = () => {
    const { email, password, confirmPassword } = this.state;
    if (email && !password && !confirmPassword) {
      Toast.show({
        text1: 'Please enter all fields',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!email) {
      Toast.show({
        text1: 'Please enter email address',
        type: 'error',
        visibilityTime: 3000,
      });
    }
    else if (!EmailValidator.validate(email)) {
      Toast.show({
        text1: 'Please enter a valid email address',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!password) {
      Toast.show({
        text1: 'Password is required',
        type: 'error',
        visibilityTime: 3000,
      });
    }
    else if (!schema.validate(password)) {
      Toast.show({
        text1: 'Password not valid (Use atleast one UpperCase Letter, one number and one special character',
        type: 'error',
        visibilityTime: 3000,
      });
    }
    else if (!confirmPassword) {
      Toast.show({
        text1: 'Confirm password is required',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (password !== confirmPassword) {
      Toast.show({
        text1: 'Password and confirm password must be same',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Toast.show({
        text1: 'OTP verification code has been sent to your email address',
        type: 'success',
        visibilityTime: 3000,
      });
      this.props.navigation.navigate('Otp', { screenName: 'signup' });
    }
  };

  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <CustomBackground
        showLogo={false}
        titleText={'SIGNUP'}
        onBack={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
          <View style={[styles.container, { marginTop: 20 }]}>
            <View style={styles.logoStyle}>
              <Image style={styles.applogo} source={appLogos.appLogo} />
            </View>
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
            <CustomTextInputView
              placeholder={'Password'}
              Onchange={value => this.setState({ password: value })}
              leftIcon={appIcons.lock}
              rightIcon={true}
              label={'Password'}
              lock={'Lock'}
              value={password}
              containerStyle={{
                width: '90%',
              }}
            />
            <CustomTextInputView
              lock={'Lock'}
              placeholder={'Confirm Password'}
              leftIcon={appIcons.lock}
              rightIcon={true}
              Onchange={value => this.setState({ confirmPassword: value })}
              label={'Confirm Password'}
              value={confirmPassword}
              containerStyle={{
                width: '90%',
              }}
            />
            <CustomButton
              title="SIGNUP"
              onPress={this.onSubmit}
              buttonStyle={{ borderRadius: 10 }}
              textStyle={{ fontSize: 22 }}
            />
          </View>

          <View style={styles.bottomView}>
            <Text style={styles.textNormal}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={styles.textNormalWithColor}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default Signup;
