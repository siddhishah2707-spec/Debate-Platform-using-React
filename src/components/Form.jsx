import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  FaMicrophone,
  FaCalendarAlt,
  FaUsers,
  FaChalkboardTeacher,
  FaSignOutAlt,
  FaPlus,
  FaUserFriends,
  FaCalendarCheck,
  FaChevronUp,
  FaCog,
  FaQuestion,
  FaShare,
  FaFolder,
  FaTimes
} from 'react-icons/fa';

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Debate Created:', data);
    reset();
  };

  const handleSidebarClick = (route) => {
    switch (route) {
      case 'home': navigate('/home'); break;
      case 'upcoming': navigate('/upcoming'); break;
      case 'debate': navigate('/form'); break;
      case 'participants': navigate('/participants'); break;
      case 'logout': navigate('/login'); break;
      default: break;
    }
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={logoStyle}>
          <FaMicrophone size={24} style={{ marginRight: 8 }} />
          <span style={{ fontWeight: 700, fontSize: 20 }}>DebateHub</span>
        </div>
        <nav style={navStyle}>
          <SidebarButton icon={<FaChalkboardTeacher />} label="Home" onClick={() => handleSidebarClick('home')} />
          <div style={categoryStyle}>Debates</div>
          <SidebarButton icon={<FaCalendarAlt />} label="Upcoming" active onClick={() => handleSidebarClick('upcoming')} />
          <SidebarButton icon={<FaUsers />} label="My Debates" onClick={() => handleSidebarClick('debate')} />
          <SidebarButton icon={<FaUserFriends />} label="Join" expanded onClick={() => handleSidebarClick('join')} />
          <SidebarButton icon={<FaPlus />} label="Create" onClick={() => handleSidebarClick('create')} />
          <SidebarButton icon={<FaCalendarCheck />} label="Schedule" onClick={() => handleSidebarClick('schedule')} />
          <SidebarButton icon={<FaCog />} label="Settings" onClick={() => handleSidebarClick('settings')} />
        </nav>
        <div style={{ flex: 1 }} />
        <SidebarButton icon={<FaSignOutAlt />} label="Log out" onClick={() => handleSidebarClick('logout')} />
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        <div style={topHeaderStyle}>
          <div style={headerIconsStyle}>
            <FaFolder size={20} style={iconStyle} />
            <FaShare size={20} style={iconStyle} />
            <FaQuestion size={20} style={iconStyle} />
            <FaCog size={20} style={iconStyle} />
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" style={userAvatarStyle} />
            <FaTimes size={20} style={iconStyle} />
          </div>
        </div>

        <div style={formContainerStyle}>
          <h1 style={titleStyle}>Start New Debate</h1>

          <div style={progressStyle}>
            <div style={progressItemStyle}><span>Debate Topic:</span></div>
            <div style={progressItemStyle}><span>1. Argument</span></div>
            <div style={progressItemStyle}><span>2. Counter</span></div>
            <div style={progressItemStyle}><span>3. Judging</span></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} style={formLayoutStyle}>
            <div style={formColumnStyle}>
              <FormField label="Debate Name" register={register} name="name" placeholder="Enter debate name" />
              <FormField label="Format" register={register} name="format" placeholder="Enter format" />
              <FormField label="Debate ID" register={register} name="debateId" placeholder="Enter debate ID" />
              <FormField label="Source" register={register} name="source" placeholder="Enter source" />
              <FormField label="Rules" register={register} name="rules" placeholder="Enter rules" />
              <FormField label="Summary" register={register} name="summary" placeholder="Enter summary" isTextarea />
              <FormField label="Budget" register={register} name="budget" placeholder="Enter budget" />
            </div>
            <div style={formColumnStyle}>
              <FormField label="Time Limit" register={register} name="timeLimit" placeholder="Enter time limit" suffix="minutes" />
              <FormField label="Participants" register={register} name="participants" placeholder="Enter participants" />
              <FormField label="Judges" register={register} name="judges" placeholder="Enter judges" />
              <FormField label="Notes" register={register} name="notes" placeholder="Enter notes" isTextarea />
              <FormField label="Contact" register={register} name="contact" placeholder="Enter contact" />
              <div style={buttonContainerStyle}>
                <button type="submit" style={createButtonStyle}>Create Debate</button>
                <button type="button" onClick={() => reset()} style={cancelButtonStyle}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Field Component
const FormField = ({ label, register, name, placeholder, suffix, isTextarea }) => (
  <div style={fieldStyle}>
    <label style={labelStyle}>{label}</label>
    <div style={inputContainerStyle}>
      {isTextarea ? (
        <textarea {...register(name)} placeholder={placeholder} style={textareaStyle} />
      ) : (
        <input {...register(name)} placeholder={placeholder} style={inputStyle} />
      )}
      {suffix && <span style={suffixStyle}>{suffix}</span>}
    </div>
  </div>
);

// Sidebar Button
const SidebarButton = ({ icon, label, active, expanded, onClick }) => (
  <div
    onClick={onClick}
    style={{
      ...sidebarButtonStyle,
      background: active ? '#222' : 'transparent',
      color: active ? '#fff' : '#222',
    }}
  >
    {icon}
    <span>{label}</span>
    {expanded && <FaChevronUp size={12} style={{ marginLeft: 'auto' }} />}
  </div>
);

// ==== Styles ====
const containerStyle = {
  display: 'flex',
  height: '100vh',
  fontFamily: 'Poppins, Arial, sans-serif',
  background: '#f6f6f6',
};

const sidebarStyle = {
  width: '240px',
  background: '#dedede',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '24px',
  color: '#222',
};

const navStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

const categoryStyle = {
  fontSize: '12px',
  fontWeight: '600',
  color: '#666',
  marginTop: '16px',
  marginBottom: '8px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const sidebarButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '10px 12px',
  borderRadius: '8px',
  fontWeight: '600',
  fontSize: '14px',
  cursor: 'pointer',
};

const mainContentStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: '#fff',
};

const topHeaderStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '16px 24px',
  borderBottom: '1px solid #eee',
};

const headerIconsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const iconStyle = {
  color: '#666',
  cursor: 'pointer',
};

const userAvatarStyle = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  cursor: 'pointer',
};

const formContainerStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '32px 16px',
  overflowY: 'auto',
  minHeight: '100vh',
  width: '100%',
};


const titleStyle = {
  fontSize: '28px',
  fontWeight: '700',
  marginBottom: '24px',
  color: '#222',
  textAlign: 'center',
};

const progressStyle = {
  display: 'flex',
  gap: '24px',
  marginBottom: '32px',
  justifyContent: 'center',
};

const progressItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
};

const formLayoutStyle = {
  display: 'flex',
  gap: '48px',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
  background: '#fff',
  padding: '40px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
};


const formColumnStyle = {
  flex: 1,
};

const fieldStyle = {
  marginBottom: '20px',
};

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  fontWeight: '600',
  marginBottom: '8px',
  color: '#333',
};

const inputContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const inputStyle = {
  flex: 1,
  padding: '12px 16px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '14px',
  outline: 'none',
};

const textareaStyle = {
  flex: 1,
  padding: '12px 16px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '14px',
  outline: 'none',
  resize: 'vertical',
  minHeight: '80px',
  fontFamily: 'inherit',
};

const suffixStyle = {
  fontSize: '14px',
  color: '#666',
  whiteSpace: 'nowrap',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '12px',
  marginTop: '32px',
};

const createButtonStyle = {
  background: '#000',
  color: '#fff',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
};

const cancelButtonStyle = {
  background: '#f5f5f5',
  color: '#333',
  border: '1px solid #ddd',
  padding: '12px 24px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
};

export default Form;
