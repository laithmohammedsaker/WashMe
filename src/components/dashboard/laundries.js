import React from 'react';
import Styled from 'styled-components'

let AddIcon    = Styled.img   `width:4em;margin-bottom:1em;`

class Laundries extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <AddIcon src={require('../../assets/icons/ordercustomer.svg')} alt='add icon'/>
    );
  }
}
export default Laundries;
