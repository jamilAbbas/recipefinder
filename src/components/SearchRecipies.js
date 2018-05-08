import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {setRecipies} from '../actions';
class SearchRecipies extends Component{
  constructor(props){
    super(props);
    this.state = {
      ingredients: '',
      dish: ''
    }
  }

search(){
  let {ingredients, dish} = this.state;
  const url = `http://www.recipepuppy.com/api?i=${ingredients}&q=${dish}`
  fetch(url,{
    method: 'GET'
  }).then(response => response.json())
    .then(json=>{
      this.props.setRecipies(json.results)
    });
}
  render(){
    return(
      <Form inline>
      <FormGroup>
        <ControlLabel>Ingredients</ControlLabel>
        {' '}
        <FormControl
        type="text"
        placeholder="garlic, chicken"
        onChange={event =>this.setState({
          ingredients:event.target.value
        })}/>
      </FormGroup>
      {" "}
      <FormGroup>
        <ControlLabel>Dish</ControlLabel>
        {' '}
        <FormControl
         type="text"
          placeholder="adobo"
          onChange={event =>this.setState({
            dish:event.target.value
          })}></FormControl>
      </FormGroup>
      {' '}
      <Button onClick={()=>this.search()}> Search</Button>
      </Form>
    )
  }
}
export default connect(null,{setRecipies}) (SearchRecipies);
