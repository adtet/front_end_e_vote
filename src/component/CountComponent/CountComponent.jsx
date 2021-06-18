import React, { Component } from 'react'
import ChartComponent from '../../component/ChartComponent/ChartComponent';

class CountComponent extends Component {
    render() {
        return (
            <div className="chart-page p-2" id="dashboard-page">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2 mb-2">
                        <div className="card p-3">
                            <h2 className="text-center">HIMA MBTI</h2>
                            <ChartComponent labels={['udin', 'bayu', 'golput']} bg={['red', 'blue', 'grey']} data={[20, 30, 50]} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2 mb-2">
                        <div className="card p-3">
                            <h2 className="text-center">HIMA MBTI</h2>
                            <ChartComponent labels={['udin', 'bayu', 'golput']} bg={['red', 'blue', 'grey']} data={[20, 30, 50]} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2 mb-2">
                        <div className="card p-3">
                            <h2 className="text-center">HIMA MBTI</h2>
                            <ChartComponent labels={['udin', 'bayu', 'golput']} bg={['red', 'blue', 'grey']} data={[20, 30, 50]} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2 mb-2">
                        <div className="card p-3">
                            <h2 className="text-center">HIMA MBTI</h2>
                            <ChartComponent labels={['udin', 'bayu', 'golput']} bg={['red', 'blue', 'grey']} data={[20, 30, 50]} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountComponent;