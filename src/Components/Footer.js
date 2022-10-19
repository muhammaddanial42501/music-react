import React from "react";
class Footer extends React.Component{
    render() {
        var{name,name2,name3,name4,heading}=this.props;
        return (
            <div className="col">
            <ul>
              <h5>{heading}</h5>
              <li>
                <a className="nav-link" href="#">
                  {name}
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  {name2}
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  {name3}
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  {name4}
                </a>
              </li>
            </ul>
          </div>
        );
    }

}
export default Footer;