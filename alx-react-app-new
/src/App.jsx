import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Samuel" age={19} bio="Front-end dev student at ALX" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;