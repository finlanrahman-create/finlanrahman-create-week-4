import Qodar from './assets/Qodar.jpg';
import Haikal from './assets/Haikal.jfif';
import Ardhan from './assets/Ardhan.jfif';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <Header />
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            name="Qodar"
            role="Front-End Developer"
            bio="Suka ngoding dan desain antarmuka."
            avatar={Qodar}
          />
          <Card
            name="Haikal"
            role="UI/UX Designer"
            bio="Fokus pada pengalaman pengguna."
            avatar={Haikal}
          />
          <Card
            name="Ardhan"
            role="Back-End Developer"
            bio="Ahli dalam database dan API."
            avatar={Ardhan}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
