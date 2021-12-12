import React, { Component } from "react";
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import AddIcon from '@material-ui/icons/AddCircle';
import PersonIcon from '@material-ui/icons/Person';
import AccessibilityIcon from '@material-ui/icons/AccessibilityNew';
import group from'./assets/group.png';
import roomIcon from './assets/room.png';
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: 1,
      adult: 1,
      child: 0,
    };
  }
  removeRoomCount = () => {
    let room = this.state.room;
    let totalMember = this.state.child + this.state.adult;
    let prevoiusRoom = 4 * (room - 1);

    if (room > 1 && totalMember <= prevoiusRoom) {
      room -= 1;
      this.setState({ room: room });
    }
  };
  addRoomCount = () => {
    let room = this.state.room;
    let adult = this.state.adult;
    if (room < 5) {
      room += 1;
      adult += 1;
      this.setState({ room: room, adult: adult });
    }
  };
  addAdultCount = () => {
    let adult = this.state.adult;
    let availableCount = 4 * this.state.room;
    let totalMember = this.state.child + this.state.adult;
    if (totalMember < availableCount) {
      adult += 1;
      this.setState({ adult: adult });
    }
  };
  removeAdultCount = () => {
    let adult = this.state.adult;
    let child = this.state.child;
    if (child === 0 && adult > 1) {
      adult -= 1;
      this.setState({ adult: adult });
    }
  };
  addChildCount = () => {
    let child = this.state.child;
    let availableCount = 4 * this.state.room;
    let totalMember = this.state.child + this.state.adult;
    if (totalMember < availableCount) {
      child += 1;
      this.setState({ child: child });
    }
  };
  removeChildCount = () => {
    let child = this.state.child;
    if (child > 0) child -= 1;
    this.setState({ child: child });
  };
  render() {
    return (
      <div>
        <div className="room-detail-label">
          <img src={group} alt="group" />
          <div className="room-label">
            Choose Number of <span className="room-people-label">People</span>
          </div>
        </div>
        <div className="room-container">
          <div className="room-count-detail">
            <div className="left-side-detail">
              <img src={roomIcon} alt="group" />
              <div className="room-name">ROOMS</div>
            </div>
            <div className="right-side-detail">
              <RemoveIcon
                onClick={(e) => this.removeRoomCount(e)}
                className="remove-icon"
              />
              <div className="room-count">{this.state.room}</div>
              <AddIcon
                onClick={(e) => this.addRoomCount(e)}
                className="add-icon"
              />
            </div>
          </div>
          <div className="adults-count-detail">
            <div className="left-side-detail">
              <PersonIcon />

              <span className="room-name">ADULTS</span>
            </div>
            <div className="right-side-detail">
              <RemoveIcon
                onClick={(e) => this.removeAdultCount(e)}
                className="remove-icon"
              />
              <div className="room-count">{this.state.adult}</div>
              <AddIcon
                onClick={(e) => this.addAdultCount(e)}
                className="add-icon"
              />
            </div>
          </div>
          <div className="child-count-detail">
            <div className="left-side-detail">
              <AccessibilityIcon />{" "}
              <span className="child-room-name">CHILDREN</span>
            </div>
            <div className="right-side-detail">
              <RemoveIcon
                onClick={(e) => this.removeChildCount(e)}
                className="remove-icon"
              />
              <span className="room-count">{this.state.child}</span>
              <AddIcon
                onClick={(e) => this.addChildCount(e)}
                className="add-icon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;