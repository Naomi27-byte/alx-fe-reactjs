import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Naomi" age="22" bio="I love exploring art, culture, and technology." />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
