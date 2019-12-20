import React, { Component } from 'react';

import { StyleSheet} from 'react-native'

import { Container,
  TitleContainer,
  Title,
  SubTitle,
  UsersContainer,
  BoxUser,
  Name,
  UserName,
  UserType
 } from './style.js';
 import Axios from 'axios';
 import Spinner from 'react-native-loading-spinner-overlay';
export default class Users extends Component {
    state={
        users:[],
        spinner: true
    }

componentDidMount(){
    this.loadUsers();
}

loadUsers = async () =>{
    const response = await Axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({spinner:false});
    this.setState({ users:response.data });
}
  render() {
    return (    
      <Container>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          overlayColor={'rgba(55, 14, 190, 0.850)'}
        />
        <TitleContainer>
        <Title>Users</Title>
        <SubTitle>{this.state.users.length} Users Found</SubTitle>
        </TitleContainer>

        <UsersContainer>
          {this.state.users.map((user)=>{
            return(

              <BoxUser key={user.id} onPress={()=> {this.props.navigation.navigate('UserDetails',user.id)}}>
                <UserType>Name</UserType>
                <Name>{user.name}</Name>
                <UserType>Usesrname</UserType>
                <UserName>{user.username}</UserName>
              </BoxUser>
     
            )
          })}
   

        </UsersContainer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});