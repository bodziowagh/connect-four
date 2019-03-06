import React, { FunctionComponent } from "react";
import { Field } from "./Field";

interface ColumnProps {
    column: string[];
    onClick: () => void;
}

export const Column: FunctionComponent<ColumnProps> = ({
    column = [],
    onClick
}: ColumnProps) => {

    return (
        <div className="column" onClick={ onClick }>
            {
                column.map((color: string, index: number) =>
                    <Field key={ index } color={ color } />
                )
            }
        </div>
    )
};
