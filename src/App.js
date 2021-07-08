import logo from './logo.svg';
import "./keys";
import './App.css';
import Axios from "axios"
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {

    const [query,setquery] = useState("");
    const [recipes,setrecipes] = useState([])

  const YOUR_APP_ID = "847cb860";
  const YOUR_APP_KEY = 'bc7f68f83b1e8ca1c8912d0e5d916055'

  var url = `https://api.edamam.com/search?q=${query}
  &app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

 async function getRecipes() {
   var result = await Axios.get(url);
   setrecipes(result.data.hits);
   console.log(result.data);
 }
  
 const onSubmit = (e) => {
   e.preventDefault();
   getRecipes();
 }
  return (
    <div className="app">
      <h1 >Food</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
         type = "text"
         className="app__input"
        placeholder="Enter Ingrediants"
        value ={query} 
        onChange={(e) => setquery(e.target.value)}
         />
         
         <input className="app__submit" type="submit" value="Search" />

         <select className="app__healthLabels" ></select>
      </form>

      <div className ="app__recipes">
        {recipes.map(recipe=> {
         return <RecipeTile recipe={recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;
