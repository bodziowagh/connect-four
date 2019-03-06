import React, { FunctionComponent } from "react";

interface FieldProps {
    color: string;
}

export const Field: FunctionComponent<FieldProps> = ({
    color
}) => {
    return (
        <div
            className="field"
            style={ { backgroundColor: color } }
        />
    )
};
