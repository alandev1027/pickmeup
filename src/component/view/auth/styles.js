import styled from 'styled-components/native';
import Text from '../../widget/text';

export const TextView = styled(Text)`

`;

export const SignInContainerView = styled.View`
    height: 85%;
    backgroundColor: #4449CC;
    paddingVertical: 10px;
    paddingHorizontal: 30px;
    borderBottomRightRadius: 30px; 
    borderBottomLeftRadius: 30px;
    display: flex;
    flexDirection: column;
    justifyContent: space-between;
`;

export const LogoContainerView = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
`;

export const Icon = styled.Image`    
    resizeMode: contain;
    alignSelf: center;
`
export const LogoIcon = styled(Icon)`    
    width: 50px;
`;

export const LogoText = styled.Text`
    color: white;
    fontSize: 50px;
`;

export const TextContainerView = styled.View`
    display: flex;
    flexDirection: column;
`;

export const HeaderText = styled.Text`
    color: white;
    fontSize: 30px;    
    lineHeight: 50px;
`;

export const BodyText = styled.Text`
    color: white;
    fontSize: 25px;
    lineHeight: 35px;
`;

export const PhoneInputContainerView = styled.View`
    flex: 1;
    display: flex;
    flexDirection: row;
    marginVertical: 20px;
    paddingTop: 50px;        
`;

export const PhoneInputView = styled.View`    
    display: flex;
    flexDirection: row;
    alignItems: center;
    paddingHorizontal: 10px;
    height: 40px;
    width: 100%;
    borderRadius: 10px;
    backgroundColor: white;    
`;

export const CallingCodeText = styled.Text`            
    color: black;
    fontSize: 15px;    
    marginRight: 10px;    
`;

export const PhoneTextInputView = styled.TextInput`            
    color: black;
    fontSize: 15px;        
    padding: 10px;
    borderLeftWidth: 1px;
    borderColor: lightgray;
`;

export const SignInWithText = styled.Text`
    color: white;
    fontSize: 15px;
    alignSelf: center;
`;

export const SocialContainerView = styled.View`
    height: 15%;
    display: flex;
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
`;

export const FacebookButton = styled.TouchableOpacity`
    display: flex;
    flexDirection: row;
    height: 40px;
    width: 140px;
    margin: 10px;
    alignItems: center;
    borderRadius: 10px;
    borderWidth: 1px;
    borderColor: #4449CC;
    overflow: hidden;
`;

export const GoogleButton = styled(FacebookButton)`    
    borderColor: gray;
`;

export const SocialIcon = styled(Icon)`        
    width: 20px;
    marginHorizontal: 10px;
`;

export const FacebookText = styled.Text`
    color: white;
    fontSize: 15px;
    color: black;
    height: 100%;   
    flex: 1;
    textAlign: center;    
    paddingTop: 10px;
    borderRadius: 10px;
`;

export const GoogleText = styled(FacebookText)`       
    borderRadius: 10px;
    backgroundColor: #4449CC;
    color: white;
`;