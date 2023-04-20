import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Skins from './components/Skins';
import Support from './components/Support';
import Login from './components/Login';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Skininfoknife1 from './components/Skin-info/Skin-info-knife/Skininfoknife1';
import Skininfoknife2 from './components/Skin-info/Skin-info-knife/Skininfoknife2';
import Skininfoknife3 from './components/Skin-info/Skin-info-knife/Skininfoknife3';
import Skininfoglove1 from './components/Skin-info/Skin-info-glove/Skininfoglove1';
import Skininfoglove2 from './components/Skin-info/Skin-info-glove/Skininfoglove2';
import Skininfoglove3 from './components/Skin-info/Skin-info-glove/Skininfoglove3';
import Skininfoawp1 from './components/Skin-info/Skin-info-awp/Skininfoawp1';
import Skininfoawp2 from './components/Skin-info/Skin-info-awp/Skininfoawp2';
import Skininfoawp3 from './components/Skin-info/Skin-info-awp/Skininfoawp3';
import Skininfom4a41 from './components/Skin-info/Skin-info-m4a4/Skininfom4a41';
import Skininfom4a42 from './components/Skin-info/Skin-info-m4a4/Skininfom4a42';
import Skininfom4a43 from './components/Skin-info/Skin-info-m4a4/Skininfom4a43';
import Skininfoak1 from './components/Skin-info/Skin-info-ak/Skininfoak1';
import Skininfoak2 from './components/Skin-info/Skin-info-ak/Skininfoak2';
import Skininfoak3 from './components/Skin-info/Skin-info-ak/Skininfoak3';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} exact> <Home /> </Route>
        <Route path="/skins" component={Skins} exact> <Skins /> </Route>
        <Route path="/support" component={Support} exact> <Support /> </Route>
        <Route path="/login" component={Login} exact><div className='page'><Login /> </div> </Route>
        <Route path="/Skininfoknife1" component={Skininfoknife1} exact> <Skininfoknife1/> </Route>
        <Route path="/Skininfoknife2" component={Skininfoknife2} exact> <Skininfoknife2/> </Route>
        <Route path="/Skininfoknife3" component={Skininfoknife3} exact> <Skininfoknife3/> </Route>
        <Route path="/Skininfoglove1" component={Skininfoglove1} exact> <Skininfoglove1/> </Route>
        <Route path="/Skininfoglove2" component={Skininfoglove2} exact> <Skininfoglove2/> </Route>
        <Route path="/Skininfoglove3" component={Skininfoglove3} exact> <Skininfoglove3/> </Route>
        <Route path="/Skininfoawp1" component={Skininfoawp1} exact> <Skininfoawp1/> </Route>
        <Route path="/Skininfoawp2" component={Skininfoawp2} exact> <Skininfoawp2/> </Route>
        <Route path="/Skininfoawp3" component={Skininfoawp3} exact> <Skininfoawp3/> </Route>
        <Route path="/Skininfoak1" component={Skininfoak1} exact> <Skininfoak1/> </Route>
        <Route path="/Skininfoak2" component={Skininfoak2} exact> <Skininfoak2/> </Route>
        <Route path="/Skininfoak3" component={Skininfoak3} exact> <Skininfoak3/> </Route>
        <Route path="/Skininfom4a41" component={Skininfom4a41} exact> <Skininfom4a41/> </Route>
        <Route path="/Skininfom4a42" component={Skininfom4a42} exact> <Skininfom4a42/> </Route>
        <Route path="/Skininfom4a43" component={Skininfom4a43} exact> <Skininfom4a43/> </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
