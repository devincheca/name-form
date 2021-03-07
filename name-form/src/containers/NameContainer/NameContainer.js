import { useState, useEffect } from 'react'
import './NameContainer.scoped.css'
import {
  FormInput,
  SavedNames
} from '../../components/components'
import NameFetcher from '../../helpers/NameFetcher'

function NameContainer() {

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
      setLoading(false)
      if (res) {
        setNames(res)
      }
    }
    fetcher.getNames()
  }

  function refreshNames() {
    setLoading(true)
    fetchNames()
  }

  return (
    <div className="">
      <SavedNames
        names={names}
        isLoading={isLoading} />
      <FormInput onSuccess={() => refreshNames()} />
    </div>
  );

}

export default NameContainer;
