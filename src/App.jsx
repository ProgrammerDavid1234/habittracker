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
          <div className="card1 balance">
            <div className="light">
              <p>light</p>
            </div>
            <h4>Balance</h4>
            <p>9:00 - 10:00</p>
            <p>Location: Studio</p>
            <img
              src="https://via.placeholder.com/100"
              alt="Balance"
            />
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      {/* <nav className="bottom-nav">
        <button>Home</button>
        <button>Schedule</button>
        <button>Profile</button>
      </nav> */}
    </div>
  );
};

export default App;
