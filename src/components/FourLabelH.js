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

      <div className="d-inline-flex flex-column">
        <div className="p-2 text-right">{this.state.label1}</div>
        <div className="p-2 text-right">{this.state.label2}</div> 
        <div className="p-2 text-right">{this.state.label3}</div>
        <div className="p-2 text-right">{this.state.label4}</div>
      </div>
    );
  }
  
}
 
export default FourLabelH;