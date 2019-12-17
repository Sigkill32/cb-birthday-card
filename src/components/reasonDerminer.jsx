import React from "react";
import firebase from "firebase";
import CustomUploadButton from "react-firebase-file-uploader/lib/CustomUploadButton";

const ReasonDeteminer = ({
  onHandleChange,
  onHandleGen,
  value,
  onHandleUploadStart,
  onHandleUploadError,
  onHandleUploadSuccess,
  onHandleProgress,
  isUploading,
  progress,
  imgUrl
}) => {
  return (
    <div className="reason-determiner">
      <div className="req-container">
        <div className="form-container">
          <input
            type="text"
            onChange={onHandleChange}
            value={value}
            placeholder="Type the text to be displayed"
          />
          <button onClick={onHandleGen}>Generate card</button>
        </div>
        <CustomUploadButton
          accept="image/*"
          storageRef={firebase.storage().ref("images")}
          onUploadStart={onHandleUploadStart}
          onUploadError={onHandleUploadError}
          onUploadSuccess={onHandleUploadSuccess}
          onProgress={onHandleProgress}
          className="upload-button"
        >
          {imgUrl === "" ? "Upload image" : "image uploaded"}
        </CustomUploadButton>

        {isUploading ? (
          <div className="progress-container">
            <h1>{progress}%</h1>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ReasonDeteminer;
