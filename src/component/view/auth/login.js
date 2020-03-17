import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import {
  SignInContainerView,
  LogoContainerView,
  LogoIcon,
  LogoText,
  TextContainerView,
  HeaderText,
  BodyText,
  PhoneInputContainerView,  
  CallingCodeText,
  PhoneInputView,
  PhoneTextInputView,
  SignInWithText,
  SocialContainerView,
  FacebookButton,
  GoogleButton,
  SocialIcon,
  GoogleText,
  FacebookText
} from './styles';

import { LOGO_ICON, FACEBOOK_ICON, GOOGLE_ICON } from "../../../utils/assets"
import CountryPicker from "react-native-country-picker-modal";

const login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState('NG');
  const [callingCode, setCallingCode] = useState("234");  
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(false);  
  const [withCallingCode, setWithCallingCode] = useState(true);

  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCallingCode(country.callingCode)
  }

  return (
    <View>
      <SignInContainerView>
        <LogoContainerView>
          <LogoIcon source={LOGO_ICON} />
          <LogoText>Pickmeup</LogoText>
        </LogoContainerView>
        <TextContainerView>
          <HeaderText>Hey there!</HeaderText>
          <BodyText>Type in your phone number to get started</BodyText>
        </TextContainerView>
        <PhoneInputContainerView>
          <PhoneInputView>
            <CountryPicker
              {...{
                countryCode,                
                withFlag,
                withCallingCode,
                withEmoji,
                onSelect,
              }}              
              containerButtonStyle={{marginTop: 0}}
            />
            <CallingCodeText>{"+ " + callingCode}</CallingCodeText>

            <PhoneTextInputView              
              keyboardType="numeric"
              placeholder="0803 123 4567"
              value={phoneNumber}
              selectTextOnFocus={false}
              onChangeText={value => setPhoneNumber(value)}
            />
          </PhoneInputView>
        </PhoneInputContainerView>
        <SignInWithText>or you can sign in with</SignInWithText>
      </SignInContainerView>
      <SocialContainerView>
        <FacebookButton>
          <SocialIcon source={FACEBOOK_ICON} />
          <FacebookText>Facebook</FacebookText>
        </FacebookButton>
        <GoogleButton>
          <SocialIcon source={GOOGLE_ICON} />
          <GoogleText>Google</GoogleText>
        </GoogleButton>
      </SocialContainerView>
    </View>
  );
};

export default login;
