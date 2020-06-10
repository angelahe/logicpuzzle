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

      <div>
        <div className="label-1">{this.state.label1}</div>
        <div className="label-2">{this.state.label2}</div> 
        <div className="label-3">{this.state.label3}</div>
        <div className="label-4">{this.state.label4}</div>
      </div>
    );
  }
  
}
 
export default FourLabelH;