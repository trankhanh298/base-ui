import './App.scss';
import AppRoutes from './Routes';
import VerticalSideBar from './components/VerticalSideBar/VerticalSideBar';

function App() {

  return (
    <div className="root-container container-fluid p-0">
      <div className="row header m-0">
        <h1>header</h1>
      </div>

      <div className="row main m-0">
        <div className="col-2 p-0">
          <VerticalSideBar />
        </div>
        <div className="col-8">
          <AppRoutes />
        </div>
      </div>

      <div className="row footer m-0">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
