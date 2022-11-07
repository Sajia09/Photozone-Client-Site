import logo from './logo.svg';
import './App.css';
import router from './Routes/Routes'
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
