import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Anasayfa from './components/pages/Anasayfa';
import CevreHaberleri from './components/pages/CevreHaberleri';
import Projeler from './components/pages/Projeler';
import Hakkimizda from './components/pages/Hakkimizda';
import Iletisim from './components/pages/Iletisim';
import DogalKaynaklar from './components/pages/DogalKaynaklar';
import UyeKayit from './components/UyeKayit';

function App() {

  
  return (
    <>
    <Router>
      <Navbar   />
        <Switch>
          <Route path='/' exact component =
          {Anasayfa}/>
          <Route path='/CevreHaberleri' exact component=
          {CevreHaberleri}/>
          <Route path='/projeler' exact component=
          {Projeler}/>
          <Route path='/dogalkaynaklar' exact component=
          {DogalKaynaklar}/>
          <Route path='/iletisim' exact component=
          {Iletisim }/>
          <Route path='/hakkimizda' exact component=
          {Hakkimizda }/>
          <Route path ='/uyekayit' exact component=
          {UyeKayit }/>
        </Switch>
    </Router>
      
      
    </>
  );
}

export default App;
