import styled from 'styled-components/native';
import {Animated} from 'react-native';
export const Container = styled.View`
flex:1;
background:#f6f5fa;
`;
export const TitleContainer = styled.View`
width:100%;
height:15%;
justifyContent:center;
paddingLeft:10%;
`;
export const Title = styled.Text`
color:#0A0A0C;
font-weight:bold;
`;
export const SubTitle = styled.Text`
color:#380ebe;
`;
export const UsersContainer = styled(Animated.ScrollView).attrs({
    showsVerticalScrollIndicator:false,
  })`
width:100%;
height:85%;
  `;
export const BoxUser = styled.TouchableOpacity`
height:70;
width:90%
background:#fff;
marginLeft:5%;
justifyContent:center;
marginBottom:10;
borderRadius:7;
paddingLeft:20;
paddingTop:20;
paddingBottom:20;
paddingRight:10;
borderLeftWidth:2;
borderLeftColor:#380ebe;
borderRightWidth:2;
borderRightColor:#380ebe;
`;
export const Name = styled.Text`
fontWeight:bold;
`;
export const UserType = styled.Text`
color:#999;
fontSize:8;
`;
export const UserName = styled.Text`
color:#999;
fontSize:11;
fontWeight:bold;
color:#380ebe;
`;

