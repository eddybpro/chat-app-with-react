import "./PhoneCard.css";
import { Avatar, Dog1, Dog2, Dog3 } from "./assets";

function PhoneCard() {
  return (
    <div className="PhoneCard">
      <div className="PhoneCard-Header">
        <div className="PhoneCard-Header-FirstPart">
          <button className="PhoneCard-Header-FirstPart-BackBtn">
            <span className="PhoneCard-Header-FirstPart-BackBtn-Span1"></span>
            <span className="PhoneCard-Header-FirstPart-BackBtn-Span2"></span>
          </button>
          <img
            src={Avatar}
            alt=""
            className="PhoneCard-Header-FirstPart-UserImg"
          />
          <div>
            <h2 className="PhoneCard-Header-FirstPart-UserName">
              samuel green
            </h2>
            <p className="PhoneCard-Header-FirstPart-Status">
              Available to Walk
            </p>
          </div>
        </div>
        <button className="PhoneCard-Header-Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="PhoneCard-MsgBox">
        <p className="PhoneCard-MsgBox-UserMsg">
          {" "}
          That sounds great. I&apos;d be happy with that.
        </p>
        <p className="PhoneCard-MsgBox-UserMsg">
          Could you send over some pictures of your dog, please?
        </p>
        <div className="PhoneCard-MsgBox-ClientBox">
          <img src={Dog1} alt="" />
          <img src={Dog2} alt="" />
          <img src={Dog3} alt="" />
        </div>
        <p className="PhoneCard-MsgBox-ClientMsg">
          Here are a few pictures. She&apos;s a happy girl!
        </p>
        <p className="PhoneCard-MsgBox-ClientMsg">Can you make it?</p>
        <p className="PhoneCard-MsgBox-UserMsg">
          She looks so happy! The time we discussed works. How long shall I take
          her out for?
        </p>
        <div className="PhoneCard-MsgBox-UserBox">
          <div>
            <input type="radio" name="price" aria-label="radio" />
            <p>30 minutes walk</p>
          </div>
          <strong>$29</strong>
        </div>
        <div className="PhoneCard-MsgBox-UserBox">
          <div>
            <input type="radio" name="price" aria-label="radio" />
            <p>1 hour walk</p>
          </div>
          <strong>$49</strong>
        </div>
        <div className="PhoneCard-MsgBox-AddMsg">
          <input
            type="text"
            name="newMsg"
            aria-label="new msg"
            placeholder="Type a message..."
          />
          <button className="PhoneCard-MsgBox-AddMsg-Btn">
            <span className="PhoneCard-MsgBox-AddMsg-Btn-Span1"></span>
            <span className="PhoneCard-MsgBox-AddMsg-Btn-Span2"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default PhoneCard;
