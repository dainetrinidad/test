import React, {Component} from 'react';
import './App.css';

import AQUIFERS from './data/aquifers'

class App extends Component {
    constructor(props) {
        super(props);

        let aquiferLocations = AQUIFERS.results
            .filter(item => item.location)


        this.state = {
            aquiferLocations: aquiferLocations
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange = (event) => {
        alert(event.target.value)
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                   Province of British Columbia
                </header>
                <div class="selectLocation">
                    <label>Select aquifer location:</label>
                    <select name="aquifers" onChange={this.handleChange}
                            aria-label="Aquifer Locations">
                        {this.state.aquiferLocations.map((aquifer, i)=>(
                            <option value={aquifer.location} key={i}>
                                {aquifer.location}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

export default App;
