
import './App.css';
import ShowIDs from './Components/ShowIDs';
import ShowDescription from './Components/ShowDescription';
import ShowDates from './Components/ShowDates';
import ShowRecordCount from './Components/ShowRecordCount';
import PageDisplayer from './Components/PageDisplayer';
/*
function App() {
  return (
    <div className="App">
      <ShowIDs />
    </div>
  );
}
*/
import React from 'react'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            TopLevel: [],
            NumberOfRec: "",
            PageDescription: "",
            PageDisplay: 1
        };
        this.setPageDisplay = this.setPageDisplay.bind(this);
    }

    //Runs at the very beginnning and get the top level object of the API
    //then calls updatePageDescription to fill in the PageDescription (assigment) in the state
    //then calls GetReposCount which will be used later to match the number of Repos vs how many actual repos are present
    async componentWillMount() {
      const searchUrl = `https://api.github.com/orgs/BoomTownROI`;
      const res = await fetch(searchUrl);
      let topLevel = await res.json();

      this.setState({TopLevel: topLevel});
      this.updatePageDescription();
      this.GetReposCount();
    }




    async GetReposCount(){
      const searchUrl = `https://api.github.com/orgs/BoomTownROI/repos`;
      const res = await fetch(searchUrl);
      let reposLevel = await res.json();

      const reposLevelCount = reposLevel.length;

      this.setState({NumberOfRec: reposLevelCount});
      
    }

    //this is a function that get passed down to the PageDisplayer component which is in charge or displaying different information
    async setPageDisplay(n){
      let pageDisplay;
      if(n == 1){
        pageDisplay = 1;
      }else if(n == 2){
        pageDisplay = 2;
      }else{
        pageDisplay = 3;
      }
      
     await this.setState({PageDisplay: pageDisplay});
     await this.updatePageDescription();
    }
    
    //based on the state this loads whichever component is selected
    getPageToDisplay(){
      let topLevel = this.state.TopLevel;
      if(this.state.PageDisplay == 1){
        return <ShowIDs topLevel={topLevel}/>;
      }else if(this.state.PageDisplay == 2){
        return <ShowDates createAt={JSON.stringify(topLevel.created_at)} updateAt={JSON.stringify(topLevel.updated_at)}/>;
      }else{
        return <ShowRecordCount foundRecords={this.state.NumberOfRec} topLevelRecords={JSON.stringify(topLevel.public_repos)}/>;
      }
    }

    //loads the state with the current description of what information is being shown
    updatePageDescription(){
      let description;
      if(this.state.PageDisplay == 1){
        description = 'Follow all urls containing "api.github.com/orgs/BoomTownROI" and for responses with a 200 status code,\
        retrieve and display all id keys/values in the reponse objects';
      }else if(this.state.PageDisplay == 2){
        description = 'On the top-level BoomTownROI organization details object, verify the the updated_at value is later than the created_at date.';
      }else{
        description = 'On the top-level details object, compare the public_repos count against the repositories array returned from following the repos_url, verifying that the counts match.';
      }
      this.setState({PageDescription: description});
    }


    render() {
      let pageToDisplay = this.getPageToDisplay();

      return (
        <div>
          <h1 className="header">BoomTown Assessment</h1>
          <PageDisplayer setPageDisplay={this.setPageDisplay}/>
          <ShowDescription pageDescription={this.state.PageDescription} />
          {pageToDisplay}
        </div>
      );
    }
}
export default App;
