import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Shadows from '../helpers/Shadows';
import {colors} from '../utils';
import {appIcons} from '../assets';

const CustomTextInputView = ({
  placeholder,
  label,
  leftIcon,
  rightIcon = false,
  containerStyle,
  type,
  value,
  Onchange,
  editable = true,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View
      style={[
        containerStyle,
        {
          ...Shadows.shadow3,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          marginBottom: 16,
          backgroundColor: colors.white,
        },
      ]}>
      <View
        style={{
          width: '100%',
          height: 55,
          backgroundColor: colors.white,
          flexDirection: 'row',
          borderRadius: 30,
          padding: 4,
        }}>
        <View
          style={{
            flex: label ? 1 : null,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: -50,
          }}>
          <Image
            source={leftIcon}
            style={{
              height: 22,
              width: 22,
              resizeMode: 'contain',
              marginLeft: 8,
              tintColor: colors.primary,
            }}
          />
        </View>
        <View
          style={{
            flex: label ? 6 : 9,
            marginLeft: label ? -8 : 6,
          }}>
          {label && (
            <View
              style={{
                flex: 5,
                justifyContent: 'center',
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  color: colors.primary,
                  fontWeight: '600',
                  paddingLeft: 10,
                }}>
                {label}
              </Text>
            </View>
          )}
          <View
            style={{
              flex: label ? 6 : 9,
              justifyContent: label ? 'center' : 'space-between',
              paddingTop: !label ? 10 : 0,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <TextInput
              value={value}
              onChangeText={Onchange}
              placeholderTextColor={colors.gray}
              style={{
                justifyContent: 'center',
                padding: 5,
                fontSize: 14,
                paddingLeft: 18,
                fontWeight: '400',
                color: colors.black,
                alignSelf: 'flex-start',
                width: '100%'
              }}
              placeholder={placeholder}
              secureTextEntry={rightIcon ? !visible : false}
              keyboardType={type}
              editable={editable}
            />
          </View>
          {rightIcon && (
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginRight: 6,
                bottom:12,
                width:20,
                alignItems:"flex-end",
                alignSelf:"flex-end"
              }}>
              <TouchableOpacity 
              activeOpacity={0.9}
                onPress={() => {
                  setVisible(!visible);
                }}
                style={{
                  alignItems: 'flex-end',
                }}>
                <Image
                  source={!visible ? appIcons.eyeNot : appIcons.eye}
                  style={{
                    height: 22,
                    width: 22,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default CustomTextInputView;

const styles = StyleSheet.create({});
