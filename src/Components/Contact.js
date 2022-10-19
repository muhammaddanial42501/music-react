import React from "react";
class Contact extends React.Component{
    render(){
        var { name, className } = this.props;
        return(
            <div className="col">
          <i
            className={className}
            style={{ fontSize:   70 }}
          ></i>
          <h6 className="text-white">{name}</h6>
        </div>

        );
    }

}
export default Contact;