import { useEffect, useState } from 'react'
import './SavedNames.scoped.css'
import NameFetcher from '../../helpers/NameFetcher'

function SavedNames() {

  const [names, setNames] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetcher = new NameFetcher()
    fetcher.callback = (res) => {
      setLoading(false)
      setNames(res.names)
    }
    fetcher.getNames()
  })

  function getNames() {
    if (isLoading) {
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
    return names.map((name, i) => {
      return (
        <div key={i} className="row">
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
