import React from "react";
class Serivces extends React.Component{
    render(){
        var {name, image}=this.props;
        return(
            <div className=" col">
            <div className="card">
              <img src={require('../Images/' + image)} className="w-full round" alt="" />
              <div className="card-body">
                <button className="button button4 text-white">{name}</button>
              </div>
            </div>
            </div>

        );
    }

}
export default Serivces;
