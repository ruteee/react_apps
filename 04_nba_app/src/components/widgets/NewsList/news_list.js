import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../config'
import styles from '../NewsList/news_list.css'

import Button from '../Button/button'
import CardInfo from '../CardInfo/card_info'
class NewsList extends Component {

    state = {
        items:[],
        teams:[],
        start:this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount,
    }

    renderNews = (type) => {
        let template = null;
         switch(type){
             case('card'):
                template = this.state.items.map((item, i) => (
                  <CSSTransition
                    classNames={{
                        enter:styles.news_list_wrapper,
                        enterActive:styles.news_list_wrapper_enter
                    }}
                    timeout={500}
                    key={i}
                  >
                    <div>
                        <div className={styles.news_list_item}>
                            <Link to={`/articles/${item.id}`}>
                                <CardInfo/>
                                <h2>{item.title}</h2>
                            </Link>
                        </div>
                    </div>
                 </CSSTransition>
                ))
                break;
            default:
                template = null;
         }
         return template;
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end)
    }

    request = (start, end) => {

        if (this.state.teams.length < 1){
            axios.get(`${URL}/teams`)
            .then( response => {
                this.setState({
                    teams: response.data
                })
            })
        }
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then( response => {
            this.setState({
                items:[...this.state.items,...response.data]  
            })
        })
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }

    render() {
        console.log(this.state.teams)
        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    {this.renderNews(this.props.type)}
                    <Button
                        type="loadMore"
                        loadMore = {()=> this.loadMore()}
                        cta="Load More News"
                    />
                </TransitionGroup>
                
            </div>
        );
    }
}

export default NewsList;