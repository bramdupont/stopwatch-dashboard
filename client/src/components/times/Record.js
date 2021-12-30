import React from 'react';
import TimeForm from "./TimeForm";

const Record = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold font-primary">Record <span className="text-base text-gray-500">(in S.)</span></h1>
            <TimeForm/>
        </div>
    )
}

export default Record;