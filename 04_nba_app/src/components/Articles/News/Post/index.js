import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import styles from '../../../Articles/articles.css'
class NewsArticle extends Component {

    state = {
        article : [],
        team :[]
    }

    componentWillMount(){
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        .then( response =>{
            
            
           let article = response.data[0]
           axios.get(`${URL}/teams?id=${article.team}`)
           .then( response =>{
               this.setState({
                   article,
                   team:response.data
               })
           })

           
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                Article view
            </div>
        );
    }
}

export default NewsArticle;