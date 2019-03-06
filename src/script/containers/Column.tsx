import React, { FunctionComponent } from "react";
import { Field } from "../components/Field";

interface ColumnProps {
    column: string[];
}

export const Column: FunctionComponent<ColumnProps> = ({
    column = []
}) => {
    return (
        <div className="column">
            {
                column.map((color: string, index: number) =>
                    <Field key={ index } color={ color } />
                )
            }
        </div>
    )
}
