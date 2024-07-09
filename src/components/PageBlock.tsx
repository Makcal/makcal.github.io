import classes from "./PageBlock.module.css";
import React, { CSSProperties } from "react";

export default function PageBlock({ styles, children }: { styles?: CSSProperties; children?: React.ReactNode }) {
    return (
        <div className={classes.pageBlock} style={{ ...styles }}>
            {children}
        </div>
    );
}
