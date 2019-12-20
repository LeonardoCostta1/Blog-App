import React, { Component } from 'react';
import { StyleSheet} from 'react-native'
import { 
    Container,
    TitleContainer,
    Title,
    SubTitle,
    PostsContainer,
    BoxPost,
    Post,
    Type
 } from './style.js';
import Axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
export default class Posts extends Component {
    state={
        posts:[],
        spinner: true
    }

componentDidMount(){
    this.loadPosts();
}

loadPosts = async () =>{
    const response = await Axios.get("https://jsonplaceholder.typicode.com/posts");
    this.setState({ posts:response.data });
    this.setState({spinner:false});
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
            <Title>Posts</Title>
            <SubTitle>{this.state.posts.length} Posts Found</SubTitle>
        </TitleContainer>

        <PostsContainer>
            {this.state.posts.map((post)=>{
                return(
                    <BoxPost key={post.id} onPress={()=> {
                        this.props.navigation.navigate('Details',post.id);
                    }}>
                        <Type>News</Type>
                        <Post>{post.title}</Post>
                    </BoxPost>
                )
            })}
        </PostsContainer>
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