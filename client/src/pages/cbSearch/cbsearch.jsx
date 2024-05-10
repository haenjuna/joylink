// src/CbSearch.jsx
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../App';


const SearchBar = () => (
  <div className="flex items-center justify-center p-4">
    <div className="flex w-3/4 max-w-2xl">
      <input
        type="text"
        placeholder="이벤트 검색"
        className="flex-1 p-2 border border-gray-300 rounded-l-lg"
      />
      <button className="p-2 mr-4 text-white bg-blue-500 rounded-r-lg hover:bg-blue-700">
        검색
      </button>
      <Link to="/cbCreate" className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
        이벤트 만들기
      </Link>
    </div>
  </div>
);

const EventItem = ({ title, imageSrc, description }) => (
  <div className="flex flex-col items-center w-full h-full p-4 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
    <img src={imageSrc} alt={title} className="w-full h-auto mb-4" />
    <div className="font-bold">{title}</div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const EventGrid = ({ clublist, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEvents = clublist.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="grid w-full grid-cols-4 gap-6">
      {paginatedEvents.map(clublist => (
        <EventItem title={clublist.club_nm} imageSrc="https://cdn.pixabay.com/photo/2013/11/03/08/05/cheers-204742_1280.jpg" />
      ))}
    </div>
  );
};

  const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className="flex justify-center mt-4 space-x-1 text-sm text-gray-600">
    {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
      <button
        key={page}
        className={`px-2 py-1 bg-gray-200 rounded ${page === currentPage ? "bg-blue-500 text-white" : ""}`}
        onClick={() => onPageChange(page)}
      >
        {page}
      </button>
    ))}
  </div>
);

function CbSearch() {

    const [clublist, setClubList] = useState([]);
  
    useEffect(()=>{
      getClubList();
    },[])
  
  const getClubList = async () =>{
    const {data,error} = await supabase.from('clubs').select('*');
    if(error){
      console.log(error);
    }else{
      setClubList(data);
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(clublist.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <SearchBar />
      <div className="max-w-[1280px] p-8 mx-auto">
        <div className="p-4 overflow-hidden bg-white rounded shadow">
          <div className="mb-4 text-xl font-bold">진행 중인 이벤트 ({clublist.length}개)</div>
          <EventGrid clublist={clublist} currentPage={currentPage} itemsPerPage={itemsPerPage} />
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default CbSearch;
