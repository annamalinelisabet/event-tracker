import './App.css';
import Views from './Views/Views';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUser } from './Store/Actions/userActions'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])

  return (
    <div className="App">
      <Views />
    </div>
  );
}

export default App;
