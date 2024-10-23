import React from 'react';
import './App.css'; // External CSS file for styles
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const App = () => {
  return (
    <div className="app">
      {/* Top section - User Profile */}
      <header className="header">
        <div className="profile">
          <img
            className="profile-img"
            src="https://via.placeholder.com/50"
            alt="Profile"
          />
        </div>
        <div className="header-right">
          <div className="greeting">
            <h4>Hello, Sandra</h4>
            <p>Today 24 Nov</p>
          </div>
          <div className="search-bar">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </header>

      {/* Daily Challenge Section */}
      <section className="daily-challenge">
        <div className="daily-content">
          <h3>Daily <br /> Challenge</h3>
          <p>Do your plan before 09:00 AM</p>
          <div className="avatars">
            {/* Placeholder for avatars */}
            <img
              src="https://via.placeholder.com/40"
              alt="Placeholder Image"
              className="avatar-img round-avatar"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar 2"
              className="avatar-img round-avatar"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar 3"
              className="avatar-img round-avatar"
            />
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="calendar">
        <div className="date">Mon 22</div>
        <div className="date">Tue 23</div>
        <div className="date active">Wed 24</div>
        <div className="date">Thu 25</div>
        <div className="date">Fri 26</div>
      </section>

      {/* Plan Section */}
      <section className="plan">
        <h3>Your Plan</h3>
        <div className="cards">
          {/* Yoga Group Card */}
          <div className="card yoga-group">
            <div className="medium">
              <p>Medium</p>
            </div>
            <h4>Yoga Group</h4>
            <p>25, Nov.</p>
            <p>8:00 - 9:00</p>
            <p>AS room</p>

            <div className="image-text-container">
              <img
                className="profile-img"
                src="https://via.placeholder.com/100"
                alt="Yoga"
              />
              <div className="text">
                <p className="trainer-title">Trainer</p>
                <span className="profile-name">Tiffany Way</span>
              </div>
            </div>
          </div>

          {/* Balance Card */}
          <div className="the-card">
            <div className="card1 balance">
              <div className="light">
                <p>Light</p>
              </div>
              <h4>Balance</h4>
              <p>9:00 - 10:00</p>
              <p>Location: Studio</p>
            </div>

            {/* New Card Under Balance */}
            <div className="card2 new-card">
              <div className="border-layer">
                {/* <div className="social-icons">
                  <a href="https://www.youtube.com" style={{
                    border: '3px solid pink',
                    borderRadius: '60px'
                  }} target="_blank">
                    <i style={{
                      color: 'pink', border: '3px solid pink',
                      borderRadius: '60px',
                      padding: '5px',
                    }} className="fab fa-youtube"></i>
                  </a>
                  <a href="https://twitter.com" style={{
                    border: '3px solid pink',
                    borderRadius: '60px'
                  }} target="_blank">
                    <i style={{
                      color: 'pink', border: '3px solid pink',
                      borderRadius: '60px',
                      padding: '5px',
                    }} className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com" style={{
                    border: '3px solid pink',
                    borderRadius: '60px'
                  }} target="_blank">
                    <i style={{
                      color: 'pink',
                      border: '3px solid pink',
                      borderRadius: '60px',
                      padding: '5px',
                    }} className="fab fa-facebook-f"></i>
                  </a>
                </div> */}
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="active">
          <i className="fas fa-home"></i> {/* Home icon */}
        </button>
        <button>
          <i className="fas fa-calendar-alt"></i> {/* Schedule icon */}
        </button>
        <button>
          <i className="fas fa-user"></i> {/* Profile icon */}
        </button>
      </nav>
    </div>
  );
};

export default App;
