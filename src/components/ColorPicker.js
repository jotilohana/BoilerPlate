import React, {useRef} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import ColorPicker from 'react-native-wheel-color-picker';
import CustomButton from '../components/CustomButton';
import {colors} from '../utils';

const {width} = Dimensions.get('screen');

const RNColorPicker = ({
  isVisible = false,
  togglePopUp = () => {},
  selectedColorFromPaletter = () => {},
}) => {
  let colorRNPicker = useRef();
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={togglePopUp}
      onBackdropPress={togglePopUp}
      backdropOpacity={0.6}>
      <View style={styles.mainContainer}>
        <View style={{height: 200}}>
          <Text style={styles.textStyles}>Select Color</Text>
          <ColorPicker
            ref={r => {
              colorRNPicker = r;
            }}
            // color={this.state.currentColor}
            // swatchesOnly={this.state.swatchesOnly}
            // onColorChange={this.onColorChange}
            onColorChangeComplete={selectedColorFromPaletter}
            sliderHidden={true}
            swatches={false}
            thumbSize={40}
            sliderSize={40}
            noSnap={true}
            row={false}
            // swatchesLast={this.state.swatchesLast}
            // swatches={this.state.swatchesEnabled}
            // discrete={this.state.disc}
          />
        </View>
        <View style={{marginTop: 20}}>
          <CustomButton
            title="SAVE"
            onPress={togglePopUp}
            buttonStyle={{borderRadius: 10, width: width - 100}}
            textStyle={{fontSize: 18}}
          />
        </View>
      </View>
    </Modal>
  );
};

export default RNColorPicker;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textStyles: {
    color: colors.black,
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
  },
});
