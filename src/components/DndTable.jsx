// Package includes
import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { DragDropContext } from "react-beautiful-dnd";

// Additional components
import { DraggableTr, DroppableTbody } from '../components';

// Utils
import { getTableData, getTableColumns, move } from '../utils';

export default class DndTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getTableData(15)
        };

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        console.log(" -----------\n", "Before move\n", "-----------");
        console.table(this.state.data);

        try {
            // Insert row into its new position in array.
            let from = result.source.index,
                to   = result.destination.index,
                data = move(this.state.data, from, to);

            // Update sortOrder
            for (let i = 0; i < data.length; i++) {
                data[i].sortOrder = i+1;
            }

            console.log(" -----------\n", "After move\n", "-----------");
            this.setState({ data }, () => console.table(data));
        } catch (e) {
            console.error(e);
            console.log("Likely still setting up after previous drag event?")
        }
    }

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <ReactTable
                    columns={getTableColumns()}
                    data={this.state.data}
                    TrComponent={DraggableTr}
                    getTrProps={(_, info) => {return {info}}}
                    TbodyComponent={DroppableTbody}
                    className="-highlight"
                />
            </DragDropContext>
        )
    }
}