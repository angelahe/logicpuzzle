import React from "react";
import "../styles/index.css";
 
class FourLabelH extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dummy: true,
      label1: 'label A',
      label2: 'label B',
      label3: 'label C',
      label4: 'label D',
    };
  }

  render() {
    return (

      <div className="labels">
        <p>{this.state.label1}</p>
        <p>{this.state.label2}</p> 
        <p>{this.state.label3}</p>
        <p>{this.state.label4}</p>
      </div>
    );
  }
  
}
 
export default FourLabelH;