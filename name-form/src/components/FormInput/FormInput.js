import { useState } from 'react';
import './FormInput.scoped.css';
import NameSaver from '../../helpers/NameSaver'

async function FormInput() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  async function saveNameInput() {
    const saver = new NameSaver()
    saver.firstName = firstName
    saver.lastName = lastName
    const res = await saver.save()
    console.log(res)
  }

  return (
    <div className="App">
      <div className="row pad-sides">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <a class="waves-effect waves-light btn" onClick={() => saveNameInput()}>Save</a>
          </div>
        </form>
      </div>
    </div>
  );

}

export default FormInput;
