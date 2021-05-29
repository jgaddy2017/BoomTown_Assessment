
import React from 'react'

class ShowIDs extends React.Component{

    /*
    async componentWillMount() {
        const searchUrl = `https://api.github.com/orgs/BoomTownROI`;
        const res = await fetch(searchUrl);
        let topLevel = await res.json();
        
        //console.log(topLevel);

        this.setState({TopLevel: topLevel});
    }*/

    async getTopLevelApi(){
        const searchUrl = `https://api.github.com/orgs/BoomTownROI`;
        const res = await fetch(searchUrl);
        let topLevel = await res.json();

        return topLevel;
    }

    async findAllUrls(){
        //let topLevel = this.state.TopLevel;
        //let topLevel = this.props.topLevel;
        //let topLevel = this.getTopLevelApi();
        const searchUrl = `https://api.github.com/orgs/BoomTownROI`;
        const res = await fetch(searchUrl);
        let topLevel = await res.json();



        console.log("My Top Level: "+topLevel);
        let baseUrl = `https://api.github.com/orgs/BoomTownROI`;
        let objKeys = Object.keys(topLevel);
        console.log("My Keys: " + objKeys);
        let listOfUrls = objKeys.filter((key) => {
            //console.log("Each checked key: " + JSON.stringify(topLevel[key]));
            if(JSON.stringify(topLevel[key]).includes(baseUrl)){
                console.log("my top level key: " + topLevel[key]);
                return topLevel[key];
            }
            return false;
        });
        console.log("My listOfUrls: " + listOfUrls);
        let listIds = listOfUrls.map((url) => {
            //return baseUrl + "/" + url;
            return topLevel[url];
        });
    
        console.log("My list Ids: " + listIds);
        //let htmlListIds = "";
        /*htmlListIds = listIds.forEach((url) => {
            htmlListIds += this.searchUrl(url);
        }); */

        let htmlListIds = listIds.map((url) => {
            return this.searchUrl(url);
        }).join(",");

        console.log("htmlListIds: " + htmlListIds);
        return htmlListIds;
        //return "hey";
    }

    async searchUrl(url){
        //console.log(url);
        let htmlToReturn = ``;
        htmlToReturn = htmlToReturn + `<h3>${url}</h3>`;
        console.log("my html"+htmlToReturn);
        try{
            let followedUrl = await fetch(url);
            let followedUrlRes = await followedUrl.json();
            //console.log(followedUrlRes);
            //console.log(url);
            htmlToReturn += `<ul>`;
            followedUrlRes.forEach((record, index) => {
                console.log("my record id" + record.id);
                let tempRecord = record.id;
                htmlToReturn = htmlToReturn + `<li key=${index}>${tempRecord}</li>`;
            });
            htmlToReturn = htmlToReturn + `</ul>`;
        }catch(err){
            //console.log("Failed to retreive data from: " + url);
            htmlToReturn = htmlToReturn + `<h5>Failed To receive info</h5>`;

        }
        //console.log(followedUrl);
        return htmlToReturn;
    }
//{displayIDInfo.forEach((item) => {return item;})}
//{displayIDInfo.map((item) => { item;})}
    render() {


        let displayIDInfo = this.findAllUrls();
        console.log("My final display: " + displayIDInfo);
        return (
          <div className="displayIds">
            
          </div>
        );
    }
}

export default ShowIDs;