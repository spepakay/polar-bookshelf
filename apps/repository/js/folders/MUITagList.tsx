import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {MUITagListItem} from "./MUITagListItem";
import {TagDescriptor} from "polar-shared/src/tags/TagDescriptors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);
//
// export default function CheckboxList() {
//     const classes = useStyles();
//     const [checked, setChecked] = React.useState([0]);
//
//     const handleToggle = (value: number) => () => {
//         const currentIndex = checked.indexOf(value);
//         const newChecked = [...checked];
//
//         if (currentIndex === -1) {
//             newChecked.push(value);
//         } else {
//             newChecked.splice(currentIndex, 1);
//         }
//
//         setChecked(newChecked);
//     };
//
//     return (
//         <List className={classes.root}>
//             {[0, 1, 2, 3].map((value) => {
//                 const labelId = `checkbox-list-label-${value}`;
//
//                 return (
//                 );
//             })}
//         </List>

interface IProps {
    readonly tags: ReadonlyArray<TagDescriptor>
}

export const MUITagList = (props: IProps) => {
    return (
        <>
            {props.tags.map(tag => <MUITagListItem key={tag.id}
                                                  selected={false}
                                                  nodeId={tag.id}
                                                  label={tag.label}
                                                  info={tag.count}/>)}
        </>
    );
}
