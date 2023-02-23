import './App.css';
import 'antd/dist/reset.css';
// import Title from './components/layout/Title';
// import AddPerson from './components/forms/AddPerson';
// import AddCar from './components/forms/AddCar';
// import People from './components/lists/People';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import LearnMore from './components/screens/LearnMore';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import Home from './components/screens/Home';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className='App'>
          {/* <Title />
          <AddPerson />
          <AddCar />
          <People /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/LearnMore/:id'
              element={<LearnMore />}
            />
          </Routes>
        </div>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
