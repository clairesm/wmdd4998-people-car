import './App.css';
import 'antd/dist/reset.css';
import Title from './components/layout/Title';
import AddPerson from './components/forms/AddPerson';
import AddCar from './components/forms/AddCar';

const App = () => {
  return (
    <div className='App'>
      <Title />
      <AddPerson />
      <AddCar />
    </div>
  );
};

export default App;
