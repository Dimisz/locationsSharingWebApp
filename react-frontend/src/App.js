import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Users from './user/pages/Users';
import Place from './places/pages/Place';

const App = () => {
  return (
    
    
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Users />} />
        <Route path='/places/new' element={<Place />} />
      </Routes>
    </BrowserRouter>
    

  )
}
export default App;
