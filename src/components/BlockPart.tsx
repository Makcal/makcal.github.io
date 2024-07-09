import classes from "./BlockPart.module.css";
import React from "react";

export default function BlockPart({ flexBasis, children }: { flexBasis?: string; children?: React.ReactNode }) {
    return (
        <div className={classes.blockPart} style={{ flexBasis }}>
            {children}
        </div>
    );
}
