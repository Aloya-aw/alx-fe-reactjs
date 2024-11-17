import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'

import './App.css'

function App() {
  return (
    <div>
      <p>
        <AddRecipeForm />
        <RecipeList />        
      </p>
      <h1>
        <RecipeDetails />
      </h1>
      <EditRecipeForm />
      <DeleteRecipeButton />
    </div>
  )
}

export default App
