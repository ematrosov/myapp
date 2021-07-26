import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    right: {
        alignSelf: "flex-end",
        textAlign: "right",
        minWidth: 400,
        margin: "10px 20px"
    },
    left: {
        alignSelf: "flex-start",
        textAlign: "left",
        minWidth: 400,
        margin: "10px 20px"
    }
})

export default function Message(props) {
    const classes = useStyles();

    return (
        <Card className={props.fromCurrentUser ? classes.right : classes.left}>
            <CardContent>
                <Typography variant="h6" component="p">
                    {props.fromCurrentUser ? 'Вы' : props.author}
                </Typography>
                <Typography variant="body1" component="p">
                    {props.text}
                </Typography>
            </CardContent>
        </Card>
    )
}