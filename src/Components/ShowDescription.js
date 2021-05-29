import React from 'react'
import '../Styles/ShowDescription.css';
class ShowDescription extends React.Component {
    render(){
        return(
            <div className="pageDescriptionDiv">
                <p className="pageDescriptionPara">{this.props.pageDescription}</p>
            </div>
        );
    }
}

export default ShowDescription;