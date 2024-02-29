import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#313131' }} className="p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo" style={{ width: '100%', maxWidth: '439px' }}>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '18.45%' }}>
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                overflow: 'hidden', // This line hides the scrollbars
              }}
              src="https://rive.app/s/8FzjZj_Hi0ysXt2OWMM2rA/embed"
              allowFullScreen
              scrolling="no" // This attribute also helps in disabling scrollbars
            ></iframe>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
