import { useState } from 'react'
import './SavedNames.scoped.css'
// import GetNames from '../../helpers/GetNames'

function SavedNames() {

  const [names] = useState([])
  const [isLoading, setLoading] = useState(true)

  function getNames() {
    if (isLoading) {
      setTimeout(() => setLoading(false), 2000)
      return (
        <div>
          Loading...
        </div>
      );
    }
    if (names.length === 0) {
      return (
        <div>
          No names saved
        </div>
      )
    }
    /*
    const res = await GetNames()
    setNames(res)
    */
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
