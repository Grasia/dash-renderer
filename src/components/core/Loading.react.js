import {connect} from 'react-redux'
import {any} from 'ramda'
import React, {PropTypes} from 'react'
import '!style!css!./loading.css'; // eslint-disable-line

function Loading(props) {
    if (any(r => r.status === 'loading', props.requestQueue)) {
        return (
            <div className="dialog-component">
                <div className="cover"></div>
                <div className="dialog">
                    <p>Loading...</p>

                    <div className="loader"></div>

                    <p>Please wait.</p>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

Loading.propTypes = {
    requestQueue: PropTypes.array.required
}

export default connect(
    state => ({
        requestQueue: state.requestQueue
    })
)(Loading);
