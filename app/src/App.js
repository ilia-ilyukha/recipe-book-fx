import React from 'react';
import './App.css';
import RecipeForm from './components/RecipeForm/RecipeForm.jsx';
import RecipeList from './components/RecipeList/RecipeList.jsx';

class App extends React.Component {

  render() {     
    return (
      <div className="App">
        <RecipeForm />
        <RecipeList />
      </div>
    )
  }
}


export default App;