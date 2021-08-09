import React from 'react'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";

export default function NewsList(props) {
    return (
        <List>
            {
                props.news.map((newsItem) =>
                    <ListItem alignItems="flex-start" key={newsItem.id}>
                        <ListItemAvatar>
                            <Avatar src={newsItem.imageUrl} />
                        </ListItemAvatar>
                        <a href={newsItem.url}>
                            <ListItemText primary={newsItem.title}
                                secondary={newsItem.summary} />
                        </a>
                    </ListItem>
                )
            }
        </List>
    )
}