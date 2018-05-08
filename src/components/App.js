import React from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './RecipeList';
import SearchRecipies from './SearchRecipies';
import '../styles/index.css';

class App extends React.Component{
  render(){
    return(
      <div>
      <h1>Recipe Finder</h1>
      <SearchRecipies/>
      <RecipeList/>
      </div>
    );
  }
}
export default App;
