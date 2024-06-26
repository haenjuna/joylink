import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Mainpage from "./pages/mainpage/mainpage";
import Mypage from './pages/mypage/mypage';
import CbJoin from "./pages/cbJoin/cbJoin";
import CbSearch from "./pages/cbSearch/cbsearch";
import CbCreate from "./pages/cbCreate/cbCreate";
import CbDescription from "./pages/cbDescription/cbDescription";
import CbDescription_1 from "./pages/cbDescription/cbDescription_1";
import cbDescription_2 from "./pages/cbDescription/cbDescription_2";
import Notice from "./pages/notice/notice";
import Login from './pages/login/login';
import Join from './pages/join/join';
import GetInfo from "./pages/getInfo/getInfo";
import Chatting from './pages/chatting/chatting';
import MyClubPage from "./pages/myClubPage/myClub";
import ClubManagement from "./pages/myClubPagePost/myClubPagePost";
import CheckUserInfo from "./pages/login/checkUserInfo";
import EmailVerified from "./pages/login/emailVerified";
import ChattingModal from "./components/chattingModal";
import SearchReceivedUser from "./pages/searchReceivedUser/searchReceivedUser";
import ClubManagementPage from "./pages/clubManagementPage/clubManagementPage";
import MyClubPagePost from "./pages/myClubPagePost/myClubPagePost";
import ViewAccountPage from "./pages/viewAccountPage/viewAccountPage";
import Gallery from "./pages/gallery/gallery";
import Vr from "./pages/VR/vr";
import ClubNotice from "./pages/clubNotice/clubNotice";
import FreeBoard from "./pages/freeBoard/freeBoard";
import QuestionBoard from "./pages/questionBoard/questionBoard";
import CbDescription_2 from "./pages/cbDescription/cbDescription_2";
import AddFreeBoard from "./pages/freeBoard/addFreeBoard";
export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Mainpage/>} />
          <Route path="checkUserInfo" element={<CheckUserInfo />} />
          <Route path="EmailVerified" element={<EmailVerified />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="cbSearch" element={<CbSearch />} /> 
          <Route path="cbCreate" element={<CbCreate />} /> 
          <Route path="notice" element={<Notice />} />
          <Route path="cbDescription" element={<CbDescription />} />
          <Route path="cbDescription_1" element={<CbDescription_1 />} />
          <Route path="cbDescription_2" element={<CbDescription_2 />} />
          <Route path="cbJoin" element={<CbJoin />} />
          <Route path="notice/:noticeId" element={<Notice />} />
          <Route path="event/:eventId" element={<Notice />} />
          <Route path="myClubPage" element={<MyClubPage />} />
          <Route path="clubManagementPage" element={<ClubManagementPage />} />
          <Route path="myClubPagePost" element={<MyClubPagePost/>} />
          <Route path="viewAccountPage" element={<ViewAccountPage/>} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="clubNotice" element={<ClubNotice/>}/>
          <Route path="freeBoard" element={<FreeBoard/>}/>
          <Route path="questionBoard" element={<QuestionBoard/>}/>
          <Route path="addFreeBoard" element={<AddFreeBoard/>}/>
          <Route path="clubManagement" element={<ClubManagement />}> {/*여기서 Route가 닫힌다!*/}
          </Route>
        </Route>
        <Route path="/vr" element={<Vr/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/getInfo" element={<GetInfo/>}/>
        <Route path="/chatting" element={<ChattingModal/>}/>
        <Route path="/myclub" element={<MyClubPage/>}/>
        <Route path="/searchreceiveduser" element={<SearchReceivedUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}



