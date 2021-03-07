import './SavedNames.scoped.css'

function SavedNames(props) {

  function getNames() {
    if (props.isLoading) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    if (props.names.length === 0) {
      return (
        <div>
          No names saved
        </div>
      )
    }
    return props.names.map((name, i) => {
      return (
        <div key={i} className={getRowColor(i)}>
          <div className="row unset-bottom">
            <div className="col s6">
              First Name: {name.firstName}
            </div>
            <div className="col s6">
              Last Name: {name.lastName}
            </div>
          </div>
          <div className="row unset-bottom">
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
    <div className="name-div">
      { getNames() }
    </div>
  );

}

export default SavedNames;
