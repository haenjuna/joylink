import './mypage.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useState } from 'react'

export default function Mypage () {
    

  // message modal창 열고 닫기
  const [display, setDisplay] = useState("none");
  const modalStyle = display;
  const handleOpenMessage = () => {
    setDisplay("");
  }

  const handleCloseMessage = () => {
    setDisplay("none");
  }

  
  return (
    <>
      <Header />
      
      {/* 메인 영역 */}
      <div className='mypage_box'>
        <h2 className='mypage_title'>MyPage</h2>
        <div className='mypage_content_box'>
          <div className='mypage_menu'>
            <div className='mypage_menu_list'>
              <button>내 정보 수정</button>
              <button>내 동아리</button>
              <button>신청 현황</button>
              <button onClick={handleOpenMessage}>쪽지</button>
              <button>북마크</button>
            </div>
          </div>
          <div className='mypage_content'>
            <p className='mypage_content_title'>내정보</p>
            <ul className='mypage_content_list'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 쪽지 modal box */}
      <div id = "mypage_massage" className='fixed inset-0 p-4 m-auto bg-white border border-black border-solid' style={{width:'650px',height:'650px', display:modalStyle}} >
        <h1 className='mb-4' >쪽지</h1>
        
        {/* 상단 버튼 */}
        <div className='flex justify-between mb-4'>
          <span className='p-1 border-2'>
            <button className='mx-4'>받은 쪽지</button>
            <button className='mx-4'>보낸 쪽지</button>
          </span>
          <button className='p-1 border-2'>쪽지 쓰기</button>
        </div>
          
        {/* 리스트 상단 */}
        <div className='flex p-2 mb-4 border-2'>
          <input type="checkbox" />
          <div className='flex justify-center w-full mx-2'>
            <button>보낸 사람</button>
            <button className='mx-48'>제목</button>
            <button>날짜</button>
          </div>
        </div>
        
        {/* 쪽지 리스트 */}
        <div className='mb-4 border-2'>
          
          <div className='flex items-center p-2 mb-4'>
            <input type="checkbox"/>
            <div className='flex justify-between w-full mx-2'>
              <div>
                <p className='inline-block ml-1 text-center w-28'>user1</p>
                <a href='#' className='ml-2'>동아리 오리엔테이션 일정 공지</a>
              </div>
              <button className='w-20 text-sm'>2024-04-14</button>
            </div>
          </div>
          
          <div className='flex items-center p-2 mb-4'>
            <input type="checkbox" />
            <div className='flex justify-between w-full mx-2'>
              <div>
                <p className='inline-block ml-1 text-center w-28'>user2</p>
                <a href='#' className='ml-2'>회비 관련 문의드립니다.</a>
              </div>
              <button className='w-20 text-sm'>2024-04-13</button>
            </div>
          </div>

          <div className='flex items-center p-2 mb-4'>
            <input type="checkbox" />
            <div className='flex justify-between w-full mx-2'>
              <div>
                <p className='inline-block ml-1 text-center w-28'>user3</p>
                <a href='#' className='ml-2'>동아리 가입 신청합니다.</a>
              </div>
              <button className='w-20 text-sm'>2024-04-12</button>
            </div>
          </div>

        </div>

        {/* 하단 버튼 */}
        <div className='flex justify-end'>
          <button className='p-1 px-3 border-2'>삭제</button>
          <button className='p-1 px-3 border-2' onClick={handleCloseMessage}>닫기</button>
        </div>
        
      </div>
      
      <Footer />

    </>
  )
}