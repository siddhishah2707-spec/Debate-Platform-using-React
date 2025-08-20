import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaMicrophone,
  FaCalendarAlt,
  FaUsers,
  FaChalkboardTeacher,
  FaSignOutAlt,
  FaPlus,
  FaUserFriends,
  FaCalendarCheck
} from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSidebarClick = (route) => {
    switch (route) {
      case 'home':
        navigate('/home');
        break;
      case 'upcoming':
        navigate('/upcoming');
        break;
      case 'debate':
        navigate('/form');
        break;
      case 'participants':
        navigate('/participants');
        break;
      case 'logout':
        navigate('/login');
        break;
      default:
        break;
    }
  };

  const handleActionClick = (action) => {
    switch (action) {
      case 'start-debate':
        navigate('/in-debate'); // ✅ updated to route to InDebateExperience
        break;
      case 'join-debate':
        navigate('/join');
        break;
      case 'schedule-debate':
        navigate('/schedule-debate');
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ fontFamily: 'Poppins, Arial, sans-serif', background: '#f6f6f6', minHeight: '100vh', padding: 0, margin: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '24px 32px 12px 32px', background: '#fff', borderBottom: '1px solid #eee' }}>
        <FaMicrophone size={32} style={{ marginRight: 16, color: '#222' }} />
        <span style={{ fontWeight: 700, fontSize: 32, letterSpacing: 1 }}>Debate Hub</span>
      </div>

      <div style={{ display: 'flex', gap: 24, padding: 24 }}>
        {/* Sidebar */}
        <div style={{ width: 220, background: '#dedede', borderRadius: 16, padding: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SidebarButton icon={<FaChalkboardTeacher />} label="Home" active onClick={() => handleSidebarClick('home')} />
          <SidebarButton icon={<FaCalendarAlt />} label="Upcoming" onClick={() => handleSidebarClick('upcoming')} />
          <SidebarButton icon={<FaMicrophone />} label="Debate" onClick={() => handleSidebarClick('debate')} />
          <SidebarButton icon={<FaUsers />} label="Participants" onClick={() => handleSidebarClick('participants')} />
          <SidebarButton icon={<FaChalkboardTeacher />} label="Debate" onClick={() => handleSidebarClick('debate')} />
          <div style={{ flex: 1 }} />
          <SidebarButton icon={<FaSignOutAlt />} label="Log out" onClick={() => handleSidebarClick('logout')} />
        </div>

        {/* Main Content */}
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ background: '#dedede', borderRadius: 16, padding: 32, alignItems: 'center', minHeight: 220, textAlign: 'center' }}>
            <div style={{ fontWeight: 600, fontSize: 26, marginBottom: 12 }}>Welcome back, User!</div>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" style={{ width: 60, height: 60, borderRadius: '50%', marginBottom: 18 }} />
            <div style={{ fontWeight: 500, fontSize: 18, marginBottom: 10 }}>Your debates today:</div>
            <div style={{ height: '4cm' }} />
          </div>

          <div style={{ display: 'flex', gap: 32, width: '100%', alignItems: 'stretch' }}>
            <div style={{ flex: 1.3, background: '#dedede', borderRadius: 16, padding: 24, minWidth: 340 }}>
              <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>Debate</div>
              <Calendar />
            </div>
            <div style={{ flex: 1.7, background: '#dedede', borderRadius: 16, padding: 24, minWidth: 440 }}>
              <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>Invitations</div>
              <div style={{ textAlign: 'center', fontSize: 16, color: '#888', minHeight: 60 }}>No invitations right now</div>
            </div>
            <div style={{ flex: 1.7, background: '#dedede', borderRadius: 16, padding: 24, minWidth: 340 }}>
              <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>Insights</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, marginBottom: 8 }}>
                <span>Debates you've participated in this week</span>
                <span style={{ fontWeight: 700 }}>0</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16 }}>
                <span>Total debates hosted this month</span>
                <span style={{ fontWeight: 700 }}>0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <ActionButton icon={<FaUserFriends size={28} />} label="Start a Debate" onClick={() => handleActionClick('start-debate')} />
          <ActionButton icon={<FaPlus size={28} />} label="Join a Debate" onClick={() => handleActionClick('join-debate')} />
          <ActionButton icon={<FaCalendarCheck size={28} />} label="Schedule a Debate" onClick={() => handleActionClick('schedule-debate')} />
        </div>
      </div>
    </div>
  );
};

// Sidebar Button
const SidebarButton = ({ icon, label, active, onClick }) => (
  <div 
    onClick={onClick}
    style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: '10px 18px', borderRadius: 8,
      background: active ? '#222' : 'transparent', color: active ? '#fff' : '#222', fontWeight: 600, fontSize: 17, cursor: 'pointer'
    }}
  >
    {icon}
    <span>{label}</span>
  </div>
);

// Action Button
const ActionButton = ({ icon, label, onClick }) => (
  <div 
    onClick={onClick}
    style={{ 
      background: '#dedede', 
      borderRadius: 16, 
      padding: '32px 18px', 
      display: 'flex', 
      alignItems: 'center', 
      gap: 18, 
      fontWeight: 700, 
      fontSize: 22, 
      cursor: 'pointer'
    }}
  >
    {icon}
    <span>{label}</span>
  </div>
);

// Calendar Component
const Calendar = () => {
  const now = new Date();
  const istDate = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

  const currentMonth = istDate.getMonth();
  const currentYear = istDate.getFullYear();
  const currentDate = istDate.getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const startDay = firstDay === 0 ? 6 : firstDay - 1;

  const renderCalendarDays = () => {
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<td key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === currentDate;
      days.push(
        <td
          key={day}
          style={{
            padding: '4px',
            textAlign: 'center',
            background: isToday ? '#222' : 'transparent',
            color: isToday ? '#fff' : '#000',
            borderRadius: isToday ? '8px' : '0',
            fontWeight: isToday ? '700' : '400'
          }}
        >
          {day}
        </td>
      );
    }

    return days;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 6 }}>
        {monthNames[currentMonth]} {currentYear}
      </div>
      <table style={{ width: '100%', fontSize: 15 }}>
        <thead>
          <tr style={{ color: '#888' }}>
            <th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th><th>S</th>
          </tr>
        </thead>
        <tbody>
          {(() => {
            const days = renderCalendarDays();
            const rows = [];
            for (let i = 0; i < days.length; i += 7) {
              rows.push(<tr key={`row-${i}`}>{days.slice(i, i + 7)}</tr>);
            }
            return rows;
          })()}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
