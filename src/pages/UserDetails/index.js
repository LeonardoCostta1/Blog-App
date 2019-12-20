import React, { Component } from 'react';

import { StyleSheet} from 'react-native'

import { Container,
    TitleContainer,
    Title,
    SubTitle,
    BoxUser,
    Type,
    CompanyContainer,
    ComentInfo,
    UserDetailContainer,
    SectionTitle
 } from './style.js';
 import Axios from 'axios';
 import Spinner from 'react-native-loading-spinner-overlay';
export default class UserDetails extends Component {
  state={
      UserDetail:[],
      company:[],
      address:[],
      geo:[],
      spinner: true
    }
    componentDidMount(){
      this.loadUser();
    }

  loadUser = async () =>{
    const params = this.props.navigation.state.params;
    const response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${params}`);
    this.setState({spinner:false});
    this.setState({ UserDetail:response.data });
    this.setState({ company:response.data.company });
    this.setState({ address:response.data.address });
    this.setState({ geo:response.data.address.geo });
  }
  
  render() {
      const {UserDetail, company, address,geo} = this.state;

      console.log(company);
    return (
        <Container>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          overlayColor={'rgba(55, 14, 190, 0.850)'}
        />
            <TitleContainer>
                <Title>User</Title>
                <SubTitle>User Details</SubTitle>
            </TitleContainer>
            <UserDetailContainer>
                <BoxUser>
                <SectionTitle>Address</SectionTitle>
                    <Type>Name</Type>
                    <ComentInfo>{UserDetail.name}</ComentInfo>
                    <Type>Email</Type>
                    <ComentInfo>{UserDetail.email}</ComentInfo>
                    <Type>Phone</Type>
                    <ComentInfo>{UserDetail.phone}</ComentInfo>
                    <Type>Website</Type>
                    <ComentInfo>{UserDetail.website}</ComentInfo>

                    <CompanyContainer>
                    <SectionTitle>Address</SectionTitle>
                    <Type>Street</Type>
                    <ComentInfo>{address.street}</ComentInfo>

                    <Type>Suite</Type>
                    <ComentInfo>{address.suite}</ComentInfo>

                    <Type>City</Type>
                    <ComentInfo>{address.city}</ComentInfo>

                    <Type>Zipcode</Type>
                    <ComentInfo>{address.zipcode}</ComentInfo>

                    <Type>Latitude </Type>
                    <ComentInfo>{geo.lat}</ComentInfo>

                    <Type>longitude</Type>
                    <ComentInfo>{geo.lng}</ComentInfo>

                    </CompanyContainer>

                    <CompanyContainer>
                    <SectionTitle>Company</SectionTitle>
                    <Type>Name Company</Type>
                    <ComentInfo>{company.name}</ComentInfo>

                    <Type>Catch Phrase</Type>
                    <ComentInfo>{company.catchPhrase}</ComentInfo>

                    <Type>Bs</Type>
                    <ComentInfo>{company.bs}</ComentInfo>

                    </CompanyContainer>


                    
                </BoxUser>
            </UserDetailContainer> 
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