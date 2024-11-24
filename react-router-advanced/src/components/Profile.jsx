import { Outlet, Route, Routes } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Routes>
        <Route path="/" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
      <Outlet />
    </div>
  );
}
export default Profile;