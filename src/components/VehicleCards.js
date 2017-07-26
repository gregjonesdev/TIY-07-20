import React, {Component} from 'react';

export default class VehicleCards extends Component {

  render () {

    let vehicleInfo = this.props.vehicle.map((vehicle, index) => {

      return (
        <div className="vehicleInfo" key={index}>
          <h5>Vehicle: {vehicle.name}</h5>
          <h6>Model: {vehicle.model}</h6>
          <div className="specs">
            <h6>Specs</h6>
            <ul>
              <li>Manufacturer: {vehicle.manufacturer}</li>
              <li>Class: {vehicle.vehicle_class}</li>
              <li>Passengers: {vehicle.passengers}</li>
              <li>Crew: {vehicle.crew}</li>
              <li>Length: {vehicle.length}</li>
              <li>Max Speed: {vehicle.max_atmosphering_speed}</li>
              <li>Cargo Capacity: {vehicle.cargo_capacity}</li>
            </ul>
          </div>
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
