import React, {useState} from 'react';
import {TouchableOpacity, View, Image, TextInput, Text} from 'react-native';
import {Colors, Icons, Shadows} from '../config';
import { colors } from '../utils';
import {Fumi} from './AnimatedTextInput';

export default function CustomTextInput(props) {
  const [hidden, setHidden] = useState(props?.isPassword);
  const {containerStyle, types, placeholder} = props;
  return (
    <View style={{width: '100%', marginTop: 20}}>
      {/* <Text style={{color: 'black', fontWeight: '600', fontSize: 14}}>
        {placeholder}
      </Text> */}
      <View
        style={[
          {
            alignSelf: 'center',
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
          },
          containerStyle,
        ]}>
        {props?.icon ? (
          <Image
            source={props?.icon}
            style={{
              width: 25,
              height: 25,
              resizeMode: 'contain',
              tintColor: Colors.text,
              marginTop: 5,
            }}
          />
        ) : null}
        <View
          style={{
            flex: 1,
            paddingBottom: 6,
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: 'red',
            // ...Shadows.shadow5,
          }}>
          <TextInput
            types={types}
            label={props.label}
            inputPadding={10}
            style={{
              flex: 1,
              color:colors.black,
              ...Shadows.shadow3
            }}
            inputStyle={{color: Colors.white, fontSize: 16}}
            labelStyle={{color: Colors.grey}}
            secureTextEntry={hidden}
            {...props}
          />
          {props.isPassword && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setHidden(!hidden)}></TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
export function ProfileTextInput(props) {
  const {icon} = props;
  return (
    <View
      style={{
        width: '100%',
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.cardBackground,
      }}>
      <Image
        source={icon}
        style={{width: 15, height: 15, resizeMode: 'contain'}}
      />
      <TextInput
        style={{
          width: '100%',
          height: 50,
          color: Colors.primary,
          marginLeft: 10,
          fontWeight: '600',
        }}
        placeholderTextColor={'#7E7E7E'}
        {...props}
      />
    </View>
  );
}
