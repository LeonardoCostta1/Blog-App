import React, { Component } from 'react';
import { Container,
    TitleContainer,
    Title,
    SubTitle,
    ButtonContainer,
    ButtonChoose,
    TextButton
 } from './style.js';

export default class Home extends Component {
  render() {
    return <Container>

        <TitleContainer>
        <Title>Hi, how are you ? select an option! </Title>
        <SubTitle>Posts & Users</SubTitle>
        </TitleContainer>

        <ButtonContainer>
            <ButtonChoose onPress={()=>{this.props.navigation.navigate('Posts')}}>
                <TextButton>
                    Posts
                </TextButton>
            </ButtonChoose>


            <ButtonChoose onPress={()=> {this.props.navigation.navigate('Users')}}>
                <TextButton>
                    Users
                </TextButton>
            </ButtonChoose>

        </ButtonContainer>
    </Container>;
  }
}
