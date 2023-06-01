import './App.css';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="container">
      <div className='left_column'>
        <div className='content'>
        </div>
      </div>
      <div className='right_column'>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
