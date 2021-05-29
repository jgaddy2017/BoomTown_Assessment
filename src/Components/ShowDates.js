import React from 'react'
import '../Styles/ShowDatesRecords.css';

class ShowDates extends React.Component{

    //checking the create_at and update_at in the top level of the api to validate that update date is more recent than creation date
    checkDates(createAt, updateAt){

    
        let dateValidation;
        try{
            if(createAt > updateAt){
                dateValidation = "Creation Date is older than Update Date";
            }else if(createAt < updateAt){
                dateValidation = "Creation Date is NOT older than Update Date";
            }else{
                dateValidation = "No Data";
            }

        }catch(err){
            dateValidation = "Error parsing Data";
        }
        return dateValidation;
    }

    render(){

        let showCheckDates = this.checkDates(this.props.createAt, this.props.updateAt);
        return(
            <div>
                <div className="InfoDivContainer">
                    <div className="IndividualContainer">
                        <p className="IndividualHeader">Created At</p>
                        <p className="IndividualInfo">{this.props.createAt}</p>
                    </div>
                    <div className="IndividualContainer">
                        <p className="IndividualHeader">Updated At</p>
                        <p className="IndividualInfo">{this.props.updateAt}</p>
                    </div>
                </div>
                <div className="ResultsContainer">
                    <p className="ResultsHeader">Validate Time</p>
                    <p className="Results">{showCheckDates}</p>
                </div>
            </div>
        );
    }
}
export default ShowDates;