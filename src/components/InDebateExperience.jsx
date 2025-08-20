import React from 'react';
import debateImage from '../assets/debate 7.png';

const InDebateExperience = () => {
  return (
    <div style={containerStyle}>
      
      {/* Left Panel */}
      <div style={leftPanelStyle}>
        <div>
          <button style={buttonPrimary}>Live Now</button>
          <button style={buttonSecondary}>Ask a Question</button>

          <div style={{ marginTop: '32px' }}>
            <h3 style={headingStyle}>Debate Topics:</h3>
            <div style={topicButton}>Topic 1: Climate Change</div>
            <div style={topicButton}>Topic 2: Economy</div>
            <div style={topicButton}>Topic 3: Education</div>
          </div>
        </div>
      </div>

      {/* Center Panel */}
      <div style={centerStyle}>
        <img 
          src={debateImage}
          alt="Debate in progress"
          style={imageStyle}
        />
        <div style={timerContainerStyle}>
          <span style={timerLabelStyle}>Time Remaining:</span>
          <span style={timerStyle}>05:32</span>
        </div>
      </div>

      {/* Right Panel - Chat */}
      <div style={rightPanelStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <h3 style={headingStyle}>Chats</h3>
          <div style={chatAreaStyle}></div>
          <div style={chatInputContainer}>
            <input type="text" placeholder="Type a message..." style={chatInputStyle} />
            <button style={buttonPrimary}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==== STYLES ====

const containerStyle = {
  display: 'flex',
  height: '100vh',
  width: '100vw',
  fontFamily: 'Arial, sans-serif',
  overflow: 'hidden',
};

const leftPanelStyle = {
  width: '280px',
  background: '#f5f5f5',
  padding: '20px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  borderRight: '1px solid #e0e0e0',
};

const rightPanelStyle = {
  width: '320px',
  background: '#f5f5f5',
  padding: '20px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderLeft: '1px solid #e0e0e0',
};

const centerStyle = {
  flex: 1,
  padding: '24px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fff',
  overflowY: 'auto',
};

const imageStyle = {
  maxWidth: '90%',
  maxHeight: '70vh',
  objectFit: 'contain',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
};

const timerContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginTop: '20px',
  padding: '12px 20px',
  background: '#f8f8f8',
  borderRadius: '8px',
  border: '1px solid #e0e0e0',
};

const timerLabelStyle = {
  fontWeight: '500',
  fontSize: '16px',
  color: '#333',
};

const timerStyle = {
  background: '#d3d3d3',
  borderRadius: '6px',
  padding: '8px 16px',
  fontSize: '18px',
  fontWeight: '600',
  color: '#333',
};

const topicButton = {
  background: '#d3d3d3',
  padding: '12px 16px',
  borderRadius: '8px',
  marginBottom: '10px',
  fontWeight: '500',
  cursor: 'pointer',
  fontSize: '14px',
  transition: 'background-color 0.2s',
};

const chatAreaStyle = {
  flex: 1,
  marginTop: '12px',
  background: '#fff',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  minHeight: '300px',
  overflowY: 'auto',
  marginBottom: '12px',
};

const chatInputContainer = {
  display: 'flex',
  gap: '8px',
  marginTop: '12px',
};

const chatInputStyle = {
  flex: 1,
  padding: '12px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '14px',
  outline: 'none',
};

const buttonPrimary = {
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  padding: '12px 16px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '14px',
  marginBottom: '8px',
  width: '100%',
};

const buttonSecondary = {
  backgroundColor: '#fff',
  color: '#000',
  border: '1px solid #ccc',
  padding: '12px 16px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '14px',
  marginBottom: '8px',
  width: '100%',
};

const headingStyle = {
  fontSize: '18px',
  fontWeight: '600',
  marginBottom: '12px',
  color: '#333',
};

export default InDebateExperience;
