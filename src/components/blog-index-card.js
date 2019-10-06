import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      marginBottom: 16,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    },
    more: {
      fontSize: 12,
      color: `#9E9E9E`,
    },
    summary: {
        marginBottom: 12,
        fontSize: 14,
    },
});

const BlogIndexCard = ({ post }) => {
    const classes = useStyles();
    return <Card className={classes.card}>
        <CardContent>
            <Link to={post.frontmatter.path}>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    {post.frontmatter.title}
                </Typography>
                <Typography className={classes.summary} color="textSecondary" variant="body2" component="p">
                    {post.frontmatter.summary}
                </Typography>
                <Typography className={classes.more} variant="caption">
                    Learn More...
                </Typography>
            </Link>
        </CardContent>
    </Card>;
};

export default BlogIndexCard;
