import "./cbCreate.css";
import Navbar from "../../components/Navbar";

function CbCreate() {
  return (
    <div className="App-Container">
      <Navbar />
      <div className="Box">
        <div className="Top">
        <div className="BoxTitle">동아리명  <div className="Content1"></div></div>
        <div className="BoxTitle">동아리 분류 <div className="Content1"></div></div>
        <div className="BoxTitle">활동 지역   <div className="Content1"></div></div>
        <div className="BoxTitle">동아리 설명</div>
          <div className="Content2"></div>
        </div>
        <div className="Button-Group">
            <button className="Apply-Button">취소</button>
            <button className="Apply-Button">생성</button>
        </div>
      </div>
      <div className="Footer">푸터</div>
    </div>
  );
}

export default CbCreate;
