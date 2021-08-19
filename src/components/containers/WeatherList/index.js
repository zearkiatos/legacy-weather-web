import React, { Component } from "react";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine } from "react-sparklines";

class WeatherList extends Component {
  renderWeather(cityData) {
    const {
      city: { name },
      list,
    } = cityData;
    const temperatures = list.map((weather) => weather.main.temp);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temperatures}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return {
    weather,
  };
}

export default connect(mapStateToProps, null)(WeatherList);
