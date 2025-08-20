import React from 'react';
import { useNavigate } from 'react-router-dom';
import emojiImg from '../assets/emoji.jpg';
import debate1 from '../assets/debate 1.jpg';
import debate2 from '../assets/debate 2.jpg';
import debate3 from '../assets/debate 3.jpg';
import debate4 from '../assets/debate 4.jpg';
import debate5 from '../assets/debate 5.jpg';
import debate6 from '../assets/debate 6.jpg';

const roomImages = [debate1, debate2, debate3, debate4, debate5, debate6];

const JoinDebateRoom = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: 'Poppins, Arial, sans-serif', background: '#fff', minHeight: '100vh' }}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={logoContainerStyle}>
          <img src={emojiImg} alt="logo" style={logoStyle} />
          <span style={brandTextStyle}>DebateConnect</span>
        </div>
        <div style={navStyle}>
          <button onClick={() => navigate('/home')} style={linkStyle}>Home</button>
          <button style={logoutBtnStyle}>Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        {/* Room Grid */}
        <div style={roomGridStyle}>
          {roomImages.map((img, idx) => (
            <div key={idx} style={roomCardStyle}>
              <img src={img} alt={`Room ${idx + 1}`} style={roomImageStyle} />
            </div>
          ))}
        </div>

        {/* Role Selection */}
        <div style={roleBoxStyle}>
          <div style={roleHeaderStyle}>Select Your Role</div>
          <button onClick={() => navigate('/SpeakerDashboard')} style={roleBtnStyle}>Join as Speaker</button>
          <button onClick={() => alert('Judge dashboard not implemented')} style={roleBtnStyle}>Join as Judge</button>
          <button onClick={() => alert('Moderator dashboard not implemented')} style={roleBtnStyle}>Join as Moderator</button>
        </div>
      </div>
    </div>
  );
};

// ===== Styles =====
const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px 32px 12px 32px',
  borderBottom: '1px solid #eee',
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
};

const logoStyle = {
  width: 64,
  height: 64,
  marginRight: 8,
  verticalAlign: 'middle',
};

const brandTextStyle = {
  fontWeight: 700,
  fontSize: 42,
  letterSpacing: 1,
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 18,
};

const linkStyle = {
  textDecoration: 'none',
  color: '#222',
  fontWeight: 500,
  fontSize: 18,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
};

const logoutBtnStyle = {
  background: '#111',
  color: '#fff',
  border: 'none',
  borderRadius: 20,
  padding: '8px 22px',
  fontWeight: 600,
  fontSize: 18,
  cursor: 'pointer',
};

const mainContentStyle = {
  display: 'flex',
  padding: '32px',
  gap: 32,
};

const roomGridStyle = {
  flex: 3,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: 32,
};

const roomCardStyle = {
  borderRadius: 16,
  overflow: 'hidden',
  background: '#eee',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
};

const roomImageStyle = {
  width: '100%',
  height: 330,
  objectFit: 'cover',
  display: 'block',
};

const roleBoxStyle = {
  flex: 1,
  background: '#fff',
  borderRadius: 16,
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: 320,
};

const roleHeaderStyle = {
  fontWeight: 700,
  fontSize: 22,
  marginBottom: 28,
};

const roleBtnStyle = {
  width: '100%',
  background: '#fff',
  border: '2px solid #222',
  borderRadius: 10,
  padding: '12px 0',
  fontWeight: 600,
  fontSize: 18,
  marginBottom: 18,
  cursor: 'pointer',
  transition: 'background 0.2s, color 0.2s',
};

export default JoinDebateRoom;
