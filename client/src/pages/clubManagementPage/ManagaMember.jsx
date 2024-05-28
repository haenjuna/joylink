import React, { useState, useEffect } from 'react';
import { supabase } from '../../App';

export default function ManagaMember() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetchMembers();
    }, []);
    const formatDate = (dateString) => {
        const options = { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleString('ko-KR', options).replace(',', '');
    };

    const fetchMembers = async () => {
        const { data, error } = await supabase
            .from('members')
            .select(`
                club_position,
                mem_st,
                mem_date,
                users:user_seq (user_name, user_birth, user_id, user_pn)
            `)
            .eq('club_seq', 1);

        if (error) {
            console.error('Error fetching members:', error);
        } else {
            setMembers(data);
        }
    };

    return (
        <div className="font-custom">
            <h2 className="mb-4 text-2xl font-bold">회원 관리</h2>
            <div className="p-5 m-5 border border-indigo-300 rounded">
                <h3>회원 목록</h3>
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="p-4 border-b">이름</th>
                            <th className="p-4 border-b">생년월일</th>
                            <th className="p-4 border-b">이메일</th>
                            <th className="p-4 border-b">전화번호</th>
                            <th className="p-4 border-b">직위</th>
                            <th className="p-4 border-b">가입 상태</th>
                            <th className="p-4 border-b">가입 날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, index) => (
                            <tr key={index}>
                                <td className="p-4 border-b">{member.users.user_name}</td>
                                <td className="p-4 border-b">{member.users.user_birth}</td>
                                <td className="p-4 border-b">{member.users.user_id}</td>
                                <td className="p-4 border-b">{member.users.user_pn}</td>
                                <td className="p-4 border-b">{member.club_position}</td>
                                <td className="p-4 border-b">{member.mem_st}</td>
                                <td className="p-4 border-b">{formatDate(member.mem_date)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
