
import {Component} from 'react';
import './App.css';

// export default function App(props){
//     return (
//         <div className="app">
//             <h1>Random Quote Machine</h1>
//             <div id="quote-box">
//                 <div className='center-text' id="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit ratione dolore sunt sequi, velit earum est ipsum nobis hic deleniti ad quam atque, molestiae ex, inventore odio nulla dicta.</div>
//                 <div className='center-text' id="author">~ Lorem Ipsum</div>
//                 <div className="clickables">
//                     <a className='clickable' id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet Quote</a>
//                     <button className='clickable' id="new-quote">New Quote</button>
//                 </div>
//             </div>
//         </div>
//     )
// }







export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            quote: 'Loading...',
            author: 'Loading...'
        }
        
    }

    newQuote(){
        const rand = Math.floor(Math.random()*10).toString();
        const quote = this.props.quotes[rand]
        
        this.setState(state => ({
            author: quote.author,
            quote: quote.quote
        }))
    }

    componentDidMount(){
        const rand = Math.floor(Math.random()*10).toString();
        const quote = this.props.quotes[rand]

        this.setState(state => ({
            author: quote.author,
            quote: quote.quote
        }))
    }

    render() {
        return(
            <div className="app">
            <h1>Random Quote Machine</h1>
            <div id="quote-box">
                <div className='center-text' id="text">{this.state.quote}</div>
                <div className='center-text' id="author">~ {this.state.author}</div>
                <div className="clickables">
                    <a className='clickable' id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet Quote</a>
                    <button onClick={this.newQuote.bind(this)} className='clickable' id="new-quote">New Quote</button>
                </div>
            </div>
        </div>
        )
    }
}