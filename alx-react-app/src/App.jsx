import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <UserProfile 
        name="Naomi" 
        age="23" 
        bio="Loves reading and to explore" 
      /> 
    </div>
  );
}
export default App;
