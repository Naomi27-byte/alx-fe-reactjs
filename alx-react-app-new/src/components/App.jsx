import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';


function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Naomi" age="22" bio="I love exploring art, culture, and technology." />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
