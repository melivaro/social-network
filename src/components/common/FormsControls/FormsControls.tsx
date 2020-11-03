import React from "react";
import s from "./FormsControls.module.css"
import {WrappedFieldProps} from "redux-form";

export const CustomField: React.FC<WrappedFieldProps & {fieldType: string}> = ({input, meta: {error, touched}, fieldType, ...restProps}) => {
    const hasError = touched && error
    return <div>
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            {React.createElement(fieldType,{...input, ...restProps},)}
            {hasError && <span>{error}</span>}
        </div>
    </div>
}


