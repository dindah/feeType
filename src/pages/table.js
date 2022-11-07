import './css/jquery.dataTables.css'
import './css/select.dataTables.min.css';
import './css/buttons.dataTables.min.css';
import React, {Component } from "react";

import { DataFeeType } from '../components/datafeetype';
import { Checkbox } from '@mui/material';

const $ = require('jquery');
$.DataTable = require('datatables.net');

class DataTable extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
        this._synctData()
    }

    _synctData(){
        const dataset = DataFeeType()
        console.log('Hallo', dataset)
        this.$el = $(this.el);
        this.$el.DataTable({
            data: dataset, //option 1
            columns: [
                {
                    data: null,
                    defaultContent: '',
                    className: 'select-checkbox',
                    orderable: false
                },
                { title: "Fee Type Code", data: "feetypeCode" },
                { title: "Fee Type Name", data: "feetypename" },
                { title: "Description", data: "Description" },
                { title: "Status", data: "Status" },
                { title: "Action", data: null }
            ],
        });
    }

    render(){
        return (
            <div>
                <table className="display" width='100%' ref={el => this.el = el} >
                </table>
            </div>
        )
    }
}

export default DataTable;