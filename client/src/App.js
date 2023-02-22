import './App.css';
import 'antd/dist/reset.css';
import Title from './components/layout/Title';
import AddPerson from './components/forms/AddPerson';

const App = () => {
  return (
    <div className='App'>
      <Title />
      <AddPerson />
    </div>
  );
};

export default App;
