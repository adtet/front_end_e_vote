import React, { Component } from 'react';
import './ChartComponent.css';
import { Pie } from 'react-chartjs-2';

class ChartComponent extends Component {

    data = {
        labels: this.props.labels,
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: this.props.bg,
                data: this.props.data
            }
        ]
    }

    render() {
        return (
            <div className="w-100">
                <Pie
                    data={this.data}
                    options={{
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    }}
                />
            </div>
        )
    }
}

export default ChartComponent;