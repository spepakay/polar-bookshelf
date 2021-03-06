import {deepMemo} from "../../react/ReactUtils";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import React from "react";

/**
 * Dialog that prevents events from being handled up the tree.
 */
export const MUIDialog = deepMemo((props: DialogProps) => {

    function preventEventPropagation(event: React.KeyboardEvent) {
        console.log("FIXME: blocking");
        event.stopPropagation();
        event.preventDefault();
    }

    return (

        <Dialog {...props}
                // onKeyPress={preventEventPropagation}
                // onKeyDown={preventEventPropagation}
                // onKeyUp={preventEventPropagation}
                >

            {props.children}

        </Dialog>
    );

});
