"use client";
import React from "react";
import { Field, ErrorMessage } from "formik";

export default function Input({name, label, type, required, ...props}) {
    return(
        <div className="flex flex-col"><div className="captalize">
            {label || name} <span className="text-red-500">{required && "*"}</span>
            </div>
            <Field name={name}
             type={type}
              {...props} className="p-2 rounded border-zinc-400 border-solid border-2 outline-0 focus:border-blue-500"/>
            <div className="text-red-500 text-xs mt-1">
                <ErrorMessage name={name}/>
            </div>
</div>
    );
}