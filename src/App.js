

import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import CreateRecipe from './components/CreateRecipe'
import Login from './components/loginComponent/Login'
import Signup from './components/signupComponent/Signup';
import AllRecipe from './components/allRecipe/AllRecipe'
function App() {
  return (
    <Router>
        <Routes>
          <Route  path="/allrecipe" element={<Home />}/>
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<AllRecipe/>} />
      </Routes>
    </Router>
  );
}

export default App;
