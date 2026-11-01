import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <main className="min-h-screen pt-24">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
