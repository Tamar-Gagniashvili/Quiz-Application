import './App.css';
import {Switch, Route} from 'react-router';

import Welcome from './components/Welcome/Welcome';
import Options from './components/Options/Options';
import Layout from './components/UI/Layout/Layout';
import Questionary  from './components/Questionary/Questionary';
import Results from './components/Results/Results';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Welcome}/>
        <Layout>
          <Route path='/options' exact component={Options}/>
          <Route path='/questionary' component={Questionary}/>
          <Route path='/results' component={Results}/>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
