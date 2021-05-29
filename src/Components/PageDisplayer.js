import React from 'react'
import '../Styles/PageDisplayer.css';

class PageDisplayer extends React.Component{


    render(){

        return(
            <div className="pageDisplayerContainer">
                <div className="buttonContainer">
                    <button className="buttonStyle" onClick={()=>this.props.setPageDisplay('1')}>Show IDs Page</button>
                </div>
                <div className="buttonContainer">
                    <button className="buttonStyle" onClick={()=>this.props.setPageDisplay('2')}>Show Dates Page</button>
                </div>
                <div className="buttonContainer">
                    <button className="buttonStyle" onClick={()=>this.props.setPageDisplay('3')}>Show Records Page</button>
                </div>
            </div>
        );
    }
}

export default PageDisplayer;