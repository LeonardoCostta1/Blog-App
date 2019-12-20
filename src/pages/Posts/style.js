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
export const PostsContainer = styled(Animated.ScrollView).attrs({
    showsVerticalScrollIndicator:false,
  })`
width:100%;
height:85%;

  `;
export const BoxPost = styled.TouchableOpacity`
height:70;
width:90%
background:#fff;
marginLeft:5%;
paddingLeft:20;
justifyContent:center;
marginBottom:10;
borderRadius:7;
borderLeftWidth:2;
borderLeftColor:#380ebe;
borderRightWidth:2;
borderRightColor:#380ebe;
`;
export const Type = styled.Text`
color:#999;
fontSize:8;
`;
export const Post = styled.Text`
color:#0A0A0C;
font-weight:bold;
`;
