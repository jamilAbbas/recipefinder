import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import RecipeItem from './RecipeItem';
import {Link} from 'react-router-dom';

class RecipeList extends Component{
  render(){
    console.log("this.props", this.props);
    return(

      <div>
      <h4><Link to='/favorites'>FAvorites</Link> </h4>
          {
            this.props.recipies.map((recipe,index)=>{
              return(
                <RecipeItem key={index} recipe={recipe} favoriteButton={true} />
              )
            })
          }

      </div>
    )
  }
}
function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps,null)(RecipeList);
