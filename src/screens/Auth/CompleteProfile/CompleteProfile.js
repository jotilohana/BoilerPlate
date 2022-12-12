import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInputView from '../../../components/CustomTextInputView';
import ImagePicker from '../../../components/ImagePicker';
import ProfileImage from '../../../components/ProfileImage';
import NavService from '../../../helpers/NavService';
import {colors} from '../../../utils';
import {appLogos, appImages, appIcons} from '../../../assets/index';
import {loginUser} from '../../../redux/actions/authAction';
import styles from './styles';

class CompleteProfile extends Component {
  state = {
    name: '',
    phoneNumber: '',
    address: '',
    profileImage: null,
  };

  onSubmit = () => {
    const {name, phoneNumber, address} = this.state;
    if (!name && !phoneNumber && !address) {
      Toast.show({
        text1: 'Please enter a feilds',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (name == '') {
      Toast.show({
        text1: 'Please enter Name',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (phoneNumber == '') {
      Toast.show({
        text1: 'Please enter phone number',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (address == '') {
      Toast.show({
        text1: 'Please enter address',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      let payload = {
        role: 'user',
        email: 'abc@gmail.com',
        password: '123456',
      };
      Toast.show({
        text1: 'Sign up successful',
        type: 'success',
        visibilityTime: 3000,
      });
      this.props.loginUser(payload);
    }
  };

  render() {
    const {name, phoneNumber, address, profileImage} = this.state;
    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    return (
      <CustomBackground
        showLogo={false}
        titleText={'COMPLETE PROFILE'}
        onBack={() => this.props.navigation.goBack()}>
        <View
          style={{alignItems: 'center', alignSelf: 'center', marginTop: 50}}>
          <View style={{marginTop: 20}}>
            <ImagePicker
              onImageChange={(path, mime, type) => {
                updateImageInGallery(path, mime, type);
              }}>
              <ProfileImage
                name={'UserName'}
                innerAsset={profileImage == null ? true : false}
                imageUri={
                  profileImage !== null
                    ? profileImage?.path
                    : appIcons.userPlaceholder
                }
              />
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 35 / 2,
                  backgroundColor: colors.primary,
                  position: 'absolute',
                  bottom: 5,
                  right: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={appIcons.upload}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
            </ImagePicker>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <CustomTextInputView
              leftIcon={appIcons.user}
              placeholder={'Name'}
              label={'Name'}
              value={name}
              Onchange={value => this.setState({name: value})}
              containerStyle={{
                marginBottom: 20,
                width: '90%',
                color: colors.black,
              }}
            />
            <CustomTextInputView
              leftIcon={appIcons.phone}
              placeholder={'Phone Number'}
              label={'Phone Number'}
              value={phoneNumber}
              Onchange={value => this.setState({phoneNumber: value})}
              containerStyle={{
                marginBottom: 20,
                width: '90%',
                color: colors.black,
              }}
            />
            <CustomTextInputView
              leftIcon={appIcons.address}
              placeholder={'Address'}
              label={'Address'}
              value={address}
              Onchange={value => this.setState({address: value})}
              containerStyle={{
                marginBottom: 20,
                width: '90%',
                color: colors.black,
              }}
            />
            <View style={{marginTop: 30}}>
              <CustomButton
                title="DONE"
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

const actions = {loginUser};
export default connect(null, actions)(CompleteProfile);
