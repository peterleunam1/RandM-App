import { Route, Link} from "wouter";
import './App.css'
import SearchList from "./components/organisms/searchList/searchlist";
import Home from './components/pages/home/home'



function App() {
 

  return (
    <div className="App">
      <Route path="/" component={Home}></Route>
      <Route path="/search/:keyword" component={SearchList}/>
         
    </div>
  )
}

export default App
