import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
    title?: String,
    id?: Number,
    name?: String,
    email?: String
}
export default function Example(props: Props) {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Hello {props.name}</div>

                        <div className="card-body">Welcome to Inertia JS</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
