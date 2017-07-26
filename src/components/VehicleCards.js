import React, {Component} from 'react';

export default class VehicleCards extends Component {
  constructor(props) {
    super(props);
  }

  render () {

    let vehicleInfo = this.props.vehicle.map((vehicle, index) => {

      return (
        <div className="vehicleInfo" key={index}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      )

    })

    return (
      <div className="vehicleCards">
        {vehicleInfo}
      </div>
    )
  }


}
