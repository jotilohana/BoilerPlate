import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInputView from '../../../components/CustomTextInputView';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import {colors} from '../../../utils';
import {appIcons, appLogos} from '../../../assets/index';
import { schema } from '../../../utils/validation';
import styles from './styles';
class ChangePassword extends Component {
  state = {
    password: '',
    ConfirmPassword: '',
  };

  onSubmit = () => {
    const {password, ConfirmPassword} = this.state;
    if (password == '' || ConfirmPassword == '') {
      Toast.show({
        text1: 'Please enter all fields',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!schema.validate(password)) {
      Toast.show({
        text1:
          'Password not valid (Use atleast one UpperCase Letter, one number and one special character',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (password != ConfirmPassword) {
      Toast.show({
        text1: 'Confrim password does not match',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Toast.show({
        text1: 'Password updated successfully',
        type: 'success',
        visibilityTime: 3000,
      });
      NavService.navigate('Login');
    }
  };

  render() {
    const {password, ConfirmPassword} = this.state;
    return (
      <CustomBackground
        showLogo={false}
        titleText={'CHANGE PASSWORD'}
        onBack={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
          <View style={[styles.container, {marginTop: 20}]}>
            <View style={styles.logoStyle}>
              <Image style={styles.applogo} source={appLogos.appLogo} />
            </View>
            <View style={styles.textNormal}>
              <CustomTextInputView
                placeholder={'New Password'}
                Onchange={value => this.setState({password: value})}
                label={'Password'}
                lock={'Lock'}
                leftIcon={appIcons.lock}
                rightIcon={true}
                value={password}
                containerStyle={{
                  width: '90%',
                }}
              />
              <CustomTextInputView
                placeholder={'Confirm Password'}
                Onchange={value => this.setState({ConfirmPassword: value})}
                label={'Password'}
                leftIcon={appIcons.lock}
                rightIcon={true}
                lock={'Lock'}
                value={ConfirmPassword}
                containerStyle={{
                  width: '90%',
                }}
              />
              <CustomButton
                title="SUBMIT"
                onPress={this.onSubmit}
                buttonStyle={{borderRadius: 10}}
                textStyle={{fontSize: 22}}
              />
            </View>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default ChangePassword;
