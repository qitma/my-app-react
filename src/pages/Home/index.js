import React from 'react';
import Button from '../../components/Button';
import Status from '../../components/Status';

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keyword:"",
            list:null
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = ()=>{
        return fetch(link)
            .then(res => res.json())
            .then(res =>{
                this.setState({
                    list : res
                })
            })
    }


    handleForm =(event)=>{
        this.setState({
            keyword:event.target.value
        })
    }

    render(){
        const articleStyle = {
            marginBottom:"10px",
        }
        
        const containerStyle = {
            width:"50%",
            marginLeft:"auto",
            marginRight:"auto"
        }
        return(
            <div style={containerStyle}>
                <input onChange={this.handleForm} value={this.state.keyword} style={{marginBottom:"10px",marginTop:"10px"}}/>
                {this.state.list && 
                    this.state.list
                    .filter(article =>{
                        return (
                            article.title.toUpperCase().includes(this.state.keyword.toUpperCase()) || 
                            article.content.toUpperCase().includes(this.state.keyword.toUpperCase())
                        );
                    })
                    .map(article =>{
                        return (
                            <div style={articleStyle} key={article.id}>
                                <span style={{fontWeight:"bold"}}>{article.title}</span> - <em>{article.author}</em>
                                <p>
                                    {article.content}
                                </p>

                            </div>
                        )
                })}
                
            </div>
        )
    }
}

export default Home;