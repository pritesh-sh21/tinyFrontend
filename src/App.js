import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { TinyMiracle, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import CreateCommunity from './pages/CreateCommunity';
import CommunityStatus from './pages/CommunityStatus';
import CommunitySessions from './pages/CommunitySessions';
import Communities from './pages/Communities';
import CommunityList from './pages/CommunityList';
import CommunityDetails from './pages/CommunityDetails';
import AddPeople from './pages/AddPeople';
import SessionDetails from './pages/SessionDetails';
import AllPeople from './pages/AllPeople';
import CreateSession from './pages/CreateSession';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route exact path="/" element={(<TinyMiracle />)} />
                <Route exact path="/tinymiracle" element={(<TinyMiracle />)} />

                {/* pages  */}
                <Route exact path="/orders" element={<Orders />} />
                <Route exact path="/employees" element={<Employees />} />
                <Route exact path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route exact path="/kanban" element={<Kanban />} />
                <Route exact path="/editor" element={<Editor />} />
                <Route exact path="/calendar" element={<Calendar />} />
                <Route exact path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route exact path="/area" element={<Area />} />
                <Route exact  path="/line" element={<Line />} />
                <Route exact path="/bar" element={<Bar />} />
                <Route exact path="/pie" element={<Pie />} />
                <Route exact path="/financial" element={<Financial />} />
                <Route exact path="/color-mapping" element={<ColorMapping />} />
                <Route exact path="/pyramid" element={<Pyramid />} />
                <Route exact path="/stacked" element={<Stacked />} />
                <Route exact path="/community" element={<Communities />} />
                <Route exact path="/create_community" element={<CreateCommunity />} />
                <Route exact path="/community_status" element={<CommunityStatus />} />
                <Route exact path="/community_sessions" element={<CommunitySessions />} />
                <Route exact path="/community_list" element={<CommunityList />} />
                <Route exact path="/community_details" element={<CommunityDetails />} />
                <Route exact path="/add_people" element={<AddPeople />} />
                <Route exact path="/session_details" element={<SessionDetails />} />
                <Route exact path="/all_people" element={<AllPeople />} />
                <Route exact path="/create_session" element={<CreateSession />} />


              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
