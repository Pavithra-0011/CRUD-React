import './App.css';
import Axios from './crud-op/create.jsx';
import Createpost from './crud-op/create.jsx';
import Updatepost from './crud-op/update.jsx';
import Readpost from './crud-op/read-Del.jsx';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './file.scss';

function App() {

  return (
    <>
    <div>
       <BrowserRouter>
       <div className='navigation'>
       <ul>
        <li><Link to='/'>CREATE</Link></li>
        <li><Link to='/read'>READ</Link></li>
        <li><Link to='/update/:id'>UPDATE</Link></li>
       </ul>
       </div>
         <Routes>
          <Route path='/' element={< Createpost/>}/>
          <Route path='/read' element={<Readpost/>}/>
          <Route path='/update/:id' element={<Updatepost/>}/>
         </Routes>
       </BrowserRouter>
    </div>
    </>
  )
}
 export default App;