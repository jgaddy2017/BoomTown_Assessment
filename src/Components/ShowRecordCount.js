import React from 'react'
import '../Styles/ShowDatesRecords.css';

class ShowRecordCount extends React.Component{

    //
    validateRepoCount(topLevelCount, reposLevelCount){
        let validation;
        if(topLevelCount == reposLevelCount){
            validation = "public_repos count matches repos_url count";
        }else{
            validation = "public_repos count does NOT match repos_url count";
        }
        return validation;
    }

    render(){


        let showRecordCompare = this.validateRepoCount(this.props.topLevelRecords, this.props.foundRecords)
        return(
            <div>
                <div className="InfoDivContainer">
                    <div className="IndividualContainer">
                        <p className="IndividualHeader">Number of Records Displayed at public_repos</p>
                        <p className="IndividualInfo">{this.props.topLevelRecords}</p>
                    </div>
                    <div className="IndividualContainer">
                        <p className="IndividualHeader">Number of Records found counting at repos_url</p>
                        <p className="IndividualInfo">{this.props.foundRecords}</p>
                    </div>
                </div>
                <div className="ResultsContainer">
                    <p className="ResultsHeader">Compare Record Counts</p>
                    <p className="Results">{showRecordCompare}</p>
                </div>
            </div>
        );
    }
}

export default ShowRecordCount;