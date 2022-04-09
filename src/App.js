import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';

import Signup from './components/signup/signup';
import aboutus from './components/aboutus/aboutus';
import SourceryPro from './components/sourcerypro/sourcerypro';
import Plans from './components/plans/plans';
import Privacy from './components/privacy/privacy';
import Blogs from './components/blogs/blogs';
import BlogPosts from './components/blogPosts/blogPosts';
import Dashboard from './components/dashboard/dashboard';


function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/signup" component={Signup}/>
      <Route  path="/about-us" component={aboutus}/>
      <Route  path="/sourcery-pro" component={SourceryPro}/>
      <Route  path="/plans" component={Plans}/>
      <Route  path="/privacy" component={Privacy}/>
      <Route  path="/blogs" component={Blogs}/>
      <Route  path="/blog-post" component={BlogPosts}/>
      <Route  path="/dashboard" component={Dashboard}/>
      
       {/* footer */}
   
    </Switch>
   
    </Router>
   
    
     
    </>
  );
}

export default App;
