import React from 'react';
import styled from 'styled-components';
import Card from './Card/Card';

import user1 from '../../img/user1-img.png';
import user2 from '../../img/user2-img.png';
import user3 from '../../img/user3-img.png';
import user4 from '../../img/user4-img.png';
import options from '../../img/options-img.png';
import redClock from '../../img/red-clock-icon.png';
import greyClock from '../../img/grey-clock-icon.png';
import messageArrow from '../../img/arrow-message-icon.png';
import messageSettings from '../../img/edit-message-icon.png';



const HomeStyled = styled.div`
  background-color: rgba(218,222,231,0.3);
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 30px 20px;

  .h1 {
    font-size: 36px;
    margin: 20px 0;
  }

  .top-cards {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.5%;
    text-align: center;

    .sales-card {
      background-color: #fff;
      width: 40%;
      height: 350px;
      border: 1px solid rgba(132, 146, 175, 0.3);
    }

    .report-card {
      background-color: #fff;
      width: 58%;
      height: 350px;
      border: 1px solid rgba(132, 146, 175, 0.3);
    }

  }

  .list-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 875px) {
    .top-cards {
      display: flex;
      flex-direction: column;
      padding-bottom: 2%;

      .sales-card {
        width: 100%;
        margin-bottom: 2%;
      }
      .report-card {
        width: 100%;
      }
    }
  }
`

class Home extends React.Component {

  state = {
    tasksTitleData: [
      { color: "blue", content: 5 },
      { color: "red",  content: 2 }
    ],
    tasks: [
      { index: 1, content: "New website for Symu.co", img1: options, timeLeft: "5 days delays", color: "red", icon: redClock },
      { index: 2, content: "Free business PSD Template", img1: options, timeLeft: "2 days delays", color: "red", icon: redClock },
      { index: 3, content: "New logo for JCD.pl", img1: options, timeLeft: "5 days left", color: "grey", icon: greyClock },
      { index: 4, content: "Free Icons Set vol. 3", img1: options, timeLeft: "10 days left", color: "grey", icon: greyClock }
    ],
    messagesTitleData: [
      { color: "blue", content: 2 }
    ],
    messages: [
      { index: 1, content: "Hey You! It’s me again :-) I attached new (...)", img: user1, name: "Nina Jones", timeAgo: "5 minuts ago", icon1: messageArrow, icon2: messageSettings, greyBG: "greyBG" },
      { index: 2, content: "Hey! I attached some new PSD files for (...)", img: user1, name: "Nina Jones", timeAgo: "About 20 hours ago", icon1: messageArrow, icon2: messageSettings, greyBG: "greyBG" },
      { index: 3, content: "Good morning, you are fired!", img: user2, name: "James Smith", timeAgo: "2 days ago", icon1: messageArrow, icon2: messageSettings },
      { index: 4, content: "Hello! Could You bring me coffee please?", img: user1, name: "Nina Jones", timeAgo: "About 2 weeks ago", icon1: messageArrow, icon2: messageSettings }
    ],
    activityTitleData: [
      { color: "blue", content: 10 }
    ],
    activity: [
      { index: 1, userImg: user1, name: "Nina Jones", activity: "activity", connectingLine: "connecting-line", userStatus: "added a new project", platform: "Free UI Kit", icon: greyClock, timeAgo: "Just now" },
      { index: 2, userImg: user2, name: "James Smith", activity: "activity", connectingLine: "connecting-line", userStatus: "commented project", platform: "Free PSD Template", icon: greyClock, timeAgo: "40 minutes ago" },
      { index: 3, userImg: user3, name: "Alex Clooney", activity: "activity", connectingLine: "connecting-line", userStatus: "completed task", platform: "Symu Website", icon: greyClock, timeAgo: "1 hour ago" },
      { index: 4, userImg: user4, name: "Alexandra Spears", activity: "activity", bottom: " bottom", userStatus: "added a new project", platform: "Free PSD (...)", icon: greyClock, timeAgo: "3 hours ago" }
    ]
    
  }

  render() {
    return (
      <HomeStyled className="homepage">
        <h1 className="h1">Hello John!</h1>
        <div className="top-cards">
          <div className="sales-card">Your Sales</div>
          <div className="report-card">Report</div>
        </div>
        <div className="list-cards">
          <Card
            title="Tasks"
            titleData={this.state.tasksTitleData}
            items={this.state.tasks}
          />
          <Card
            title="Messages"
            titleData={this.state.messagesTitleData}
            items={this.state.messages}
          />
          <Card 
            title="Activity" 
            titleData={this.state.activityTitleData}
            Activityitems={this.state.activity}
          /> 
        </div>
      </HomeStyled>
    )
  }
}

export default Home;