import React from 'react'
class Header extends React.Component{
  render(){
    var {name}=this.props;
    return(
      
      <li className="nav-item">
            <a className="nav-link text-white" href="#">
              {name}
            </a>
          </li>
      

    ); 
  }

}
export default Header;