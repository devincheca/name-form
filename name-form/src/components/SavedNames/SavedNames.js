import { useState } from 'react';
import './SavedNames.scoped.css';

function SavedNames() {

  const [names, setNames] = useState([])
  const [isLoading, setLoading] = useState(true)

  function getNames() {
    if (isLoading) {
      setTimeout(() => setLoading(false), 2000);
      return 'Loading...';
    }
    if (names.length === 0) {
      return 'No names saved';
    }
    return names.map(name => {
      return (
        <div className="row">
          <div className="col s6">
            {name.firstName}
          </div>
          <div className="col s6">
            {name.lastName}
          </div>
        </div>
      )
    })
  }

  return (
    <div className="App">
      { getNames() }
    </div>
  );

}

export default SavedNames;
