import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

class App extends Component {
  state = {  }
    
  componentWillMount(){
      console.log('will mount')
  }
    
  componentDidMount(){
      console.log('did mount')
      setTimeout(()=>{
          this.setState({
               movies: [
                    {
                        title: "Inception",
                        poster: "https://www.warnerbros.com/sites/default/files/styles/key_art_270x400/public/inception_keyart.jpg?itok=7jXiglyb"
                    },
                    {
                        title: "Oldboy",
                        poster:  "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
                    },
                    {
                        title: "Star Wars",
                        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZxCb1WZvr5METFStRSuK8_BOyBEvqMdlc5wGtJqVtB6zD3oZ"
                    },
                    {
                        title: "Mother",
                        poster:   "https://upload.wikimedia.org/wikipedia/en/9/94/Mother%212017.jpg" 
                    },
                    {
                      title: "Monsters, INC.",
                      poster: "https://upload.wikimedia.org/wikipedia/en/6/63/Monsters_Inc.JPG"
                  }
              ]
          })
      }, 2000)
  }

  _renderMovies = () =>{
      const movies = this.state.movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })
      return movies
  }
    
  render() {
    console.log('did render')
    return (
     <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
     </div>
    );
  }
}

export default App;
