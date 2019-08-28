
import React, {Component} from 'react'
import preview from "./preview.css"
import moment from 'moment';

export default class Preview extends Component {
    render() {
        var connects = this.props.result.connections;
        return (
            <table>
            <thead>
                <tr>
                    <th>Station</th>
                    <th>Platform</th>
                    <th>Time</th>
                    <th>Duration</th>
                </tr>
            </thead>
                <tbody>
                        {connects.map((connect,i) => (
                        <tr key={i}> 
                            <td>
                                {connect.from.location.name}<br/>
                                {connect.to.location.name}
                            </td>
                            <td>
                                {connect.from.platform}<br/>
                                {connect.to.platform}
                            </td>
                            <td>
                                {moment(connect.from.departure).format('HH:mm')}<br/>
                                {moment(connect.to.arrival).format('HH:mm')}
                            </td>
                            <td>
                                {connect.duration.substr(4,4)}
                            </td>
                        </tr>
                        ))}
            </tbody>
            </table>
        );
      }
  }
  