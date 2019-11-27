import React from 'react';
import styled from 'styled-components';

const CradStyled = styled.div`
    min-width: 285px;
    width: 32%;
    height: 100%;
    background-color: #fff;

    .list-header {
        display:flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        border: 1px solid rgba(132, 146, 175, 0.2);
        border-bottom: 2px solid rgba(132, 146, 175, 0.2);
        box-sizing: border-box;
        padding: 24px;

        .title {
            font-size: 18px;
            font-weight: 600;
            color: #0e1a35;
        }

        .cardData{
            display:flex;
        }
    }

    .list {
        display: flex;
        align-items: center;
        height: 80px;
        border: 1px solid rgba(132, 146, 175, 0.2);
        border-top: none;
        box-sizing: border-box;
        padding: 0 16px;
        position: relative;
        font-size: 10px;
        color: #555555;

        &.greyBG {
            background-color: rgba(218,222,231,0.3);
        }

        &.activity {
            border-top: none;
            border-bottom: none;
            border-left: 1px solid rgba(132, 146, 175, 0.2);
            border-right: 1px solid rgba(132, 146, 175, 0.2);
        }

        &.bottom {
            border-bottom: 1px solid rgba(132, 146, 175, 0.2);
        }

        &.connecting-line {
            position: relative;

            &:before {
                content: '';
                height: 100%;
                width: 1px;
                height: 70%;
                top: 72%;
                left: 34px;
                background-color: #8492af;
                opacity: 0.3;
                position: absolute;
                display: block;
            }
        }

        .list-img {
            width: 34px;
        }

        div {
            display: flex;
            flex-direction: column;
            margin-left: 8px;

            .list-content {
                font-size: 10px;

                &.tasks {
                    font-size: 14px;
                    font-weight: 600;
                    padding-bottom: 4px;
                    letter-spacing: 0.28px;
                }
            }

            div {
                display: flex;
                flex-direction: row;

                .clock-icon {
                    width: 12px;
                    margin-right: 4px;
                }

                .time-left {
                    font-size: 10px;
                    margin-left: 4px;

                    &.red {
                        color: #f83c7b;
                    }

                    &.grey {
                        color: #8492af;
                    }
                }
            }
        }

        .options-img {
            height: 25px;
            margin-left: auto;
            right: 0;
            padding-right: 22px;
            padding-left: 15px;
        }
    }

    .user-data {
        display: flex;
        flex-direction: column;
        padding-bottom: 4px;

        div {
            margin-bottom: 2px;

            .user-name {
                font-weight: 600;
                margin-left: 0;
            }

            .time-ago {
                color: #8492af;
                margin: 0 4px;
            }
        }

        .list-content-img {
            font-size: 10px;
            letter-spacing: 0.2px;
        }

        .icons-img {
            display: flex;
            position: absolute;
            bottom: 9px;

            img {
                width: 12px;
                margin-right: 10px;

                &.icon1 {
                    width: 13px;
                    height: 10px;
                }
            }
        }
    }

    .circle {
        display:block;
        min-width: 24px;
        height: 24px;
        padding:8px 5px 2px 5px;
        border-radius: 50%;
        text-align: center;
        color: white;
        font-size: 17px;
        margin-left: 8px;

        &.blue {
            background-color: #5384ff;
        }
        &.red {
            background-color: #f83c7b;
        }
    }

    @media (max-width: 1200px) {
        width: 49%;
        margin-bottom: 2%;
    }

    @media (max-width: 875px) {
        width: 100%;
        margin-bottom: 2%;
    }

`

class Card extends React.Component {

    // --------LISTS RENDERING--------
    render() {
        return (
            <CradStyled className="card">

                <div className="list-header">
                    <div className="title">{this.props.title}</div>
                    <div className="cardData">
                        {this.props.titleData && this.props.titleData.length > 0 && 
                            this.props.titleData.map((item, index) => <div key={index} className={`circle ${item.color}`}>{item.content}</div>) 
                        }
                    </div>
                </div>

                {this.props.items && this.props.items.length > 0 ? this.props.items.map(item =>
                    item.img ?
                        <div key={item.index} className={`list ${item.greyBG}`}>
                            <img className="list-img" src={item.img} alt="" />
                            <div className="user-data">
                                <div>
                                    <div className="user-name">{item.name}</div>
                                    <div className="time-ago">{item.timeAgo}</div>
                                </div>
                                <div className="list-content-img">{item.content}</div>
                                <div className="icons-img">
                                    <img className="icon1" src={item.icon1} alt=""/>
                                    <img src={item.icon2} alt=""/>
                                </div>
                            </div>
                        </div>
                        :
                        <div key={item.index} className="list">
                            <div className="blue circle">{item.content.charAt(0)}</div>
                            <div>
                                <div className="list-content tasks">{item.content}</div>
                                <div>
                                    <img className="clock-icon" src={item.icon} alt="" />
                                    <div className={`time-left ${item.color}`}>{item.timeLeft}</div>
                                </div>
                            </div>
                            <img className="options-img" src={item.img1} alt="" />
                        </div>
                ) : null}

                {this.props.Activityitems && this.props.Activityitems.length > 0 ? this.props.Activityitems.map(item =>
                    <div key={item.index} className={`list ${item.activity} ${item.bottom} ${item.connectingLine}`}>
                        <img className="list-img" src={item.userImg} alt="" />
                        <div className="user-data">
                            <div>
                                <div className="user-name">{item.name}</div>
                                <div className="time-ago">{item.userStatus}</div>
                                <div className="user-name">{item.platform}</div>
                            </div>
                            <div>
                                <img className="clock-icon" src={item.icon} alt="" />
                                <div className="time-ago">{item.timeAgo}</div>
                            </div>
                        </div>
                    </div>
                ) : null}

            </CradStyled>
        )
    }
}

export default Card;
