import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaVideo,
  FaUsers,
  FaUser,
  FaSignOutAlt,
  FaSearch,
  FaChevronRight
} from 'react-icons/fa';

const SpeakerDashboard = () => {
  const navigate = useNavigate();

  const upcomingDebates = [
    {
      time: '11:00 AM',
      topic: 'School uniforms should be mandatory',
      status: 'Scheduled',
      canJoin: true
    },
    {
      time: '2:30 PM',
      topic: 'Social media does more harm than good',
      status: 'In Progress',
      canJoin: true
    },
    {
      time: '4:00 PM',
      topic: 'Technology improves the quality of life',
      status: 'Completed',
      canJoin: false
    }
  ];

  const debateHistory = [
    {
      status: 'Completed',
      date: 'Apr. 18',
      topic: 'Homework is beneficial for students'
    },
    {
      status: 'Completed',
      date: 'Apr. 15',
      topic: 'Zoos do more harm than good'
    },
    {
      status: 'Completed',
      date: 'Apr. 12',
      topic: 'The voting age should be lowered to 16'
    },
    {
      status: 'Completed',
      date: 'April 15, 2024',
      topic: 'Climate change is the biggest threat to humanity'
    }
  ];

  const handleNavigation = (route) => {
    switch (route) {
      case 'home':
        navigate('/home');
        break;
      case 'join':
        navigate('/join');
        break;
      case 'logout':
        navigate('/login');
        break;
      default:
        break;
    }
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={sidebarHeaderStyle}>
          <FaHome size={20} />
          <span style={sidebarHeaderTextStyle}>Home</span>
        </div>
        
        <nav style={navStyle}>
          <NavItem 
            icon={<FaVideo size={18} />} 
            label="Upcoming Debates" 
            active={true}
            onClick={() => handleNavigation('upcoming')}
          />
          <NavItem 
            icon={<FaVideo size={18} />} 
            label="Join Room" 
            onClick={() => handleNavigation('join')}
          />
          <NavItem 
            icon={<FaUsers size={18} />} 
            label="Debate History" 
            onClick={() => handleNavigation('history')}
          />
          <NavItem 
            icon={<FaUser size={18} />} 
            label="Profile" 
            onClick={() => handleNavigation('profile')}
          />
        </nav>

        <div style={logoutContainerStyle}>
          <NavItem 
            icon={<FaSignOutAlt size={18} />} 
            label="Log out" 
            onClick={() => handleNavigation('logout')}
          />
        </div>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <div style={headerLeftStyle}>
            <h1 style={titleStyle}>Student Dashboard</h1>
          </div>
          <div style={headerRightStyle}>
            <FaSearch size={20} style={searchIconStyle} />
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Profile" 
              style={profileImageStyle} 
            />
          </div>
        </div>

        {/* Content */}
        <div style={contentStyle}>
          {/* Upcoming Debates Section */}
          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Upcoming Debates</h2>
            <div style={tableContainerStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr style={tableHeaderRowStyle}>
                    <th style={tableHeaderStyle}>Time</th>
                    <th style={tableHeaderStyle}>Topic</th>
                    <th style={tableHeaderStyle}>Status</th>
                    <th style={tableHeaderStyle}></th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingDebates.map((debate, index) => (
                    <tr key={index} style={tableRowStyle}>
                      <td style={tableCellStyle}>{debate.time}</td>
                      <td style={tableCellStyle}>{debate.topic}</td>
                      <td style={tableCellStyle}>
                        <span style={{
                          ...statusStyle,
                          color: debate.status === 'Scheduled' ? '#2563eb' : 
                                 debate.status === 'In Progress' ? '#059669' : '#6b7280'
                        }}>
                          {debate.status}
                        </span>
                      </td>
                      <td style={tableCellStyle}>
                        {debate.canJoin && (
                          <button style={joinButtonStyle}>
                            Join
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Debate History Section */}
          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Debate History</h2>
            <div style={tableContainerStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr style={tableHeaderRowStyle}>
                    <th style={tableHeaderStyle}>Status</th>
                    <th style={tableHeaderStyle}>Date</th>
                    <th style={tableHeaderStyle}>Topic</th>
                    <th style={tableHeaderStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {debateHistory.map((debate, index) => (
                    <tr key={index} style={tableRowStyle}>
                      <td style={tableCellStyle}>
                        <span style={{
                          ...statusStyle,
                          color: '#059669'
                        }}>
                          {debate.status}
                        </span>
                      </td>
                      <td style={tableCellStyle}>{debate.date}</td>
                      <td style={tableCellStyle}>{debate.topic}</td>
                      <td style={tableCellStyle}>
                        <div style={actionButtonsStyle}>
                          <button style={actionButtonStyle}>View Feedback</button>
                          <button style={actionButtonStyle}>View Scores</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// NavItem Component
const NavItem = ({ icon, label, active = false, onClick }) => (
  <div
    onClick={onClick}
    style={{
      ...navItemStyle,
      background: active ? '#f3f4f6' : 'transparent',
      color: active ? '#1f2937' : '#6b7280',
      fontWeight: active ? '600' : '500'
    }}
  >
    {icon}
    <span>{label}</span>
  </div>
);

// ===== Styles =====
const containerStyle = {
  display: 'flex',
  height: '100vh',
  fontFamily: 'Inter, system-ui, sans-serif',
  background: '#ffffff'
};

const sidebarStyle = {
  width: '240px',
  background: '#f9fafb',
  borderRight: '1px solid #e5e7eb',
  display: 'flex',
  flexDirection: 'column',
  padding: '24px 0'
};

const sidebarHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '0 24px',
  marginBottom: '32px',
  color: '#1f2937',
  fontWeight: '600',
  fontSize: '16px'
};

const sidebarHeaderTextStyle = {
  fontSize: '16px',
  fontWeight: '600'
};

const navStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  flex: 1
};

const navItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 24px',
  cursor: 'pointer',
  fontSize: '14px',
  transition: 'all 0.2s'
};

const logoutContainerStyle = {
  padding: '0 24px',
  marginTop: 'auto'
};

const mainContentStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: '#ffffff'
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px 32px',
  borderBottom: '1px solid #e5e7eb',
  background: '#ffffff'
};

const headerLeftStyle = {
  display: 'flex',
  alignItems: 'center'
};

const titleStyle = {
  fontSize: '28px',
  fontWeight: '700',
  color: '#111827',
  margin: 0
};

const headerRightStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
};

const searchIconStyle = {
  color: '#6b7280',
  cursor: 'pointer'
};

const profileImageStyle = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  cursor: 'pointer'
};

const contentStyle = {
  flex: 1,
  padding: '32px',
  overflowY: 'auto'
};

const sectionStyle = {
  marginBottom: '40px'
};

const sectionTitleStyle = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#111827',
  marginBottom: '20px'
};

const tableContainerStyle = {
  background: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  overflow: 'hidden'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse'
};

const tableHeaderRowStyle = {
  background: '#f9fafb',
  borderBottom: '1px solid #e5e7eb'
};

const tableHeaderStyle = {
  padding: '16px 24px',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: '600',
  color: '#374151',
  borderBottom: '1px solid #e5e7eb'
};

const tableRowStyle = {
  borderBottom: '1px solid #f3f4f6'
};

const tableCellStyle = {
  padding: '16px 24px',
  fontSize: '14px',
  color: '#374151',
  verticalAlign: 'middle'
};

const statusStyle = {
  padding: '4px 12px',
  borderRadius: '16px',
  fontSize: '12px',
  fontWeight: '600',
  background: '#f3f4f6'
};

const joinButtonStyle = {
  background: '#2563eb',
  color: '#ffffff',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'background-color 0.2s'
};

const actionButtonsStyle = {
  display: 'flex',
  gap: '8px'
};

const actionButtonStyle = {
  background: 'transparent',
  color: '#2563eb',
  border: '1px solid #2563eb',
  padding: '6px 12px',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.2s'
};

export default SpeakerDashboard;
