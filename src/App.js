
import './App.css';
import ProfileCard from './profile/Componrnt/ProfileCard';
import pic from './pic.png'
function App() {
  return (
    <div className="App">
      
      <div className='Appcon'>
      <ProfileCard name='Mohamed' profe='WEB DEVELOPER' bio='junior web developer'>
        <img src={pic} alt="" />
      </ProfileCard>
      </div>
      
    </div>
  );
}

export default App;
