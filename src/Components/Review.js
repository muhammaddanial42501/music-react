import React from "react";
class Review extends React.Component{
    render(){
        var {name, image, heading}= this.props;
        return(
            <div className=" col">
            <div className="card reviewbox">
              <p>
                {name}
              </p>
            </div>
            <div className="d-flex flex-column align-items-end mr-10">
              <img
                src={require('../Images/' + image)}
                className="img mt-3 mb-3"
                alt=""
              />
              <h3 className="text-white ">
               {heading}
              </h3>
            </div>
          </div>

        );
    }
}
export default Review;