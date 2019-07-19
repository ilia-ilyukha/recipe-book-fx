import React from 'react';
import './App.css';
import RecipeForm from './components/RecipeForm/RecipeForm.jsx';
import RecipeList from './components/RecipeList/RecipeList.jsx';
import EditForm from './components/EditForm/EditForm.jsx';

class App extends React.Component {

  render() {     
    return (
      <div className="App">        
        <EditForm />
        <RecipeForm />
        <RecipeList />
      </div>
    )
  }
}


export default App;