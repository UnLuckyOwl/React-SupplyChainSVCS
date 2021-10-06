import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import Contact from './components/pages/Contact/Contact'
import Navbar from './components/Navbar'
import About from './components/pages/about/About'

import Home from './components/pages/HomePage/Home'
import Loads from './components/pages/Loads/Loads'
import Services from './components/pages/Services/Services'
import Pricing from './components/Pricing'

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/loads" component={Loads} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    )
}

export default App
