import './App.css';
import Welcome from './components/Welcome/Welcome';
import Options from './components/Options/Options';
import Layout from './components/UI/Layout/Layout';
import Questionary  from './components/Questionary/Questionary';
import Results from './components/Results/Results';

function App() {
  return (
    <div className="App">
      {/* Routing Here */}
      {/* <Welcome /> */}
      <Layout>
        {/* <Options /> */}
        {/* <Questionary/> */}
        {/* <Results/> */}
        <Questionary />
      </Layout>
    </div>
  );
}

export default App;
