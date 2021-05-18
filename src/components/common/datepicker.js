import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Datepicker extends Component {
    render() {
        const { inline, className, selected, onChange } = this.props
        return (
            <DatePicker
                selected={selected}
                onChange={onChange}
                // calendarClassName="embedded"
                inline={inline}
                className={className}
            // selected={this.state.embeddedDate}
            />
        );
    }
}

export default Datepicker;
