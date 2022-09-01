
import './App.css';

import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter , Route , Routes } from 'react-router-dom';

import Home from './components/home/Home';
import ArticleDetails from './components/home/Home';

function App() {
  return (
   
    <Provider store={store} className="App">
    <div>
    <BrowserRouter>

    <Routes>
    <Route exact path="/" element= {<Home />} />
    <Route exact path="/articles/" element= {<ArticleDetails />} />
    </Routes>
    
    </BrowserRouter>
    </div>
    </Provider> 

  );
}

export default App;
