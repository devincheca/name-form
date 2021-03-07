import { useEffect, useState } from 'react'
import './SavedNames.scoped.css'
import NameFetcher from '../../helpers/NameFetcher'

function SavedNames() {

  const [names, setNames] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      try { fetchNames() } catch(error) {
        console.trace(error)
        setTimeout(fetchNames, 5000)
      }
    }
  })

  function fetchNames() {
    const fetcher = new NameFetcher()
    fetcher.callback = (res) => {
      console.log(res)
      setLoading(false)
      if (res) {
        setNames(res)
      }
    }
    fetcher.getNames()
  }

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
        <div key={i} className={getRowColor(i)}>
          <div className="row">
            <div className="col s6">
              First Name: {name.firstName}
            </div>
            <div className="col s6">
              Last Name: {name.lastName}
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              First Name Encrypted: {name.firstNameEnc}
            </div>
            <div className="col s6">
              Last Name Encrypted: {name.lastNameEnc}
            </div>
          </div>
        </div>
      )
    })
  }

  function getRowColor(i) {
    return i % 2 === 0 ? 'even-row' : 'odd-row';
  }

  return (
    <div className="App">
      { getNames() }
    </div>
  );

}

export default SavedNames;
