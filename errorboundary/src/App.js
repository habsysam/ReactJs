import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';
import ErrorBoundary from './error-boundary/ErrorBoundary';
import PersonDetail from './components/PersonDetail';
import Err1 from './error-boundary/Err1';
import CalculatorComp from './utils/CalculatorComp';
import ComponentA from './components/ComponentA';
import React, { Suspense, useState} from 'react';

// React components lazy loading
const LazyComp = React.lazy(() => {
  return import('./components/ComponentA')
})

function App() {
  const [showComponent, setshowComponent] = useState(false);
  return (
    <div className="App">
     {/* { <ErrorBoundary>
        <PersonList />
      </ErrorBoundary>
      <hr />
      <Err1>
        <PersonDetail />
      </Err1> */}
      <CalculatorComp />
      <button onClick={() => {
        setshowComponent(!showComponent)
      }} >
        {showComponent ? 'Hide' : 'Show'}
      </button>

      {/* {showComponent && LazyComp} */}
      {showComponent && 
      <Suspense fallback={<div>Loading... </div>}>
      <LazyComp />
      </Suspense>}
      {/* {showComponent ? <ComponentA /> : null } */}
    </div>
  );
}

export default App;
