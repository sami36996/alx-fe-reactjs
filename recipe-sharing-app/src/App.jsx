import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { useParams } from 'react-router-dom';

const RecipeDetailWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <SearchBar />    {/* ← ADD IT HERE */}
              <RecipeList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetailWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
