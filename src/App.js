import React, { Component } from "react";
import BirthdayCard from "./components/birthdayCard";
import ReasonDeteminer from "./components/reasonDerminer";
import firebase from "firebase";
import firebaseConfig from "./components/firebaseConfig";

firebase.initializeApp(firebaseConfig);

class App extends Component {
  state = {
    reason: "",
    showCard: false,
    isUploading: false,
    progress: 0,
    imgUrl: "",
    avatar: "",
    angle: 0,
    top: 6,
    leftPos: 20,
    rangeValue: 0,
  };

  handleEscape = () => {
    const { avatar } = this.state;
    firebase
      .storage()
      .ref(`images/${avatar}`)
      .delete()
      .then(() => console.log("Image deleted"))
      .catch(console.log("Error occured"));
    this.setState({ showCard: false, imgUrl: "" });
  };

  handleGen = () => {
    this.setState({ showCard: true });
  };

  handleChange = e => {
    const reason = e.target.value;
    this.setState({ reason });
  };

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ imgUrl: url }));
  };

  handleRotateLeft = () => {
    this.setState(prevState => ({ angle: prevState.angle - 90 }));
  };

  handleRotateRight = () => {
    this.setState(prevState => ({ angle: prevState.angle + 90 }));
  };

  handleUp = () => {
    this.setState(prevState => ({ top: prevState.top - 0.5 }));
  };

  handleDown = () => {
    this.setState(prevState => ({ top: prevState.top + 0.5 }));
  };

  handleLeft = () => {
    this.setState(prevState => ({ leftPos: prevState.leftPos - 0.5 }));
  };

  handleRight = () => {
    this.setState(prevState => ({ leftPos: prevState.leftPos + 0.5 }));
  };

  handleReset = () => {
    this.setState({ top: 6 });
  };

  handleRangeChange = e => {
    const { value: rangeValue } = e.target;
    this.setState({ rangeValue })
  }

  render() {
    const {
      reason,
      showCard,
      progress,
      isUploading,
      imgUrl,
      angle,
      top,
      leftPos,
      rangeValue
    } = this.state;
    
    return (
      <div>
        {showCard ? (
          <BirthdayCard
            reason={reason}
            onHandleClick={this.handleEscape}
            imgUrl={imgUrl}
            onHandleRotateLeft={this.handleRotateLeft}
            onHandleRotateRight={this.handleRotateRight}
            angle={angle}
            onHandleDown={this.handleDown}
            onHandleLeft={this.handleLeft}
            onHandleRight={this.handleRight}
            onHandleUp={this.handleUp}
            top={top}
            onHandleReset={this.handleReset}
            leftPos={leftPos}
            onHandleRangeChange={this.handleRangeChange}
            rangeValue={rangeValue}
          />
        ) : (
          <ReasonDeteminer
            onHandleChange={this.handleChange}
            value={reason}
            onHandleGen={this.handleGen}
            onHandleProgress={this.handleProgress}
            onHandleUploadError={this.handleUploadError}
            onHandleUploadStart={this.handleUploadStart}
            onHandleUploadSuccess={this.handleUploadSuccess}
            progress={progress}
            isUploading={isUploading}
            imgUrl={imgUrl}
          />
        )}
      </div>
    );
  }
}

export default App;
