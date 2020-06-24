import React from 'react';
import Column from './column';


class Table extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { items, titles } = this.props;
        return (
            <div>
                {titles.map(title => {
                    return <Column name={title} items={items} />
                })}
            </div>)
    }
}

export default Table;