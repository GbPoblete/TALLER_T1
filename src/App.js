import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import SeasonBreaking from './components/Season_breaking';
import SeasonCall from './components/Season_call'
import SeasonInfoBreaking from './components/Season_info_breaking'
import SeasonInfoCall from './components/Season_info_call'
import EpisodeInfoBreaking from './components/Episode_info_breaking'
import EpisodeInfoCall from './components/Episode_info_call'

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/Better+Call+Saul+temporada/:id/:n_e_c/:id_episode" exact>
            <EpisodeInfoCall/>
          </Route>

          <Route path="/Breaking+Bad+temporada/:id/:n_e_b/:id_episode" exact>
            <EpisodeInfoBreaking/>
          </Route>

          <Route path="/Breaking+Bad+temporada/:id" exact>
            <SeasonInfoBreaking/>
          </Route>

          <Route path="/Better+Call+Saul+temporada/:id" exact>
            <SeasonInfoCall/>
          </Route>

          <Route path="/" exact>
            <SeasonBreaking/>
            <SeasonCall/>
          </Route>
          
        </Switch>
      </div>
    </Router>
    
  );
}
export default App;


/*function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group">
          <Link to="/temporadaxkk" className="btn btn-dark">
            Temporada x
          </Link>
        </div>
        <Switch>
          <Route path="/temporada">
            <EpisodesBreaking/>
          </Route>
          <Route path="/" exact>
            <h1>PAGINA DE INICIO SHI SHEÑORR</h1>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}
export default App; */