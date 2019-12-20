import React, { Component } from 'react';

import { StyleSheet} from 'react-native'

import { Container,
  TitleContainer,
  Title,
  SubTitle,
  BoxComents,
  Type,
  Coment,
  ComentInfo,
  CommentsContainer
 } from './style.js';
import Axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
export default class Details extends Component {
state={
    postComents:[],
    spinner: true
  }

  componentDidMount(){
    this.loadPosts();
  }

loadPosts = async () =>{
  const params = this.props.navigation.state.params;

  const response = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${params}/comments`);

  this.setState({ postComents:response.data });
  this.setState({spinner:false});
}

  render() {
   
    return( 
    <Container>
          <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          overlayColor={'rgba(55, 14, 190, 0.850)'}
        />
        <TitleContainer>
          <Title>Coments</Title>
          <SubTitle>{this.state.postComents.length} Comments  found</SubTitle>
        </TitleContainer>
<CommentsContainer>


     {this.state.postComents.map((coments)=>{
        return(
          <BoxComents key={coments.id}>
             <Type>Name</Type>
            <ComentInfo>{coments.name}</ComentInfo>
            <Type>Email</Type>
            <ComentInfo>{coments.email}</ComentInfo>

            <Type>Coments</Type>
            <Coment>{coments.body}</Coment>

          </BoxComents>
        
        )
      })}
    
    </CommentsContainer> 
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