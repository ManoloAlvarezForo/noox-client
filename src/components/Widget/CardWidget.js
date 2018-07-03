import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        margin: '5px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class WidgetCard extends React.Component {
    render() {
        const { classes } = this.props;
        return (
                <Card className={classes.card} style={this.props.size}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary">
                            {this.props.title}
                        </Typography>
                        <Typography variant="headline" component="h2">
                            {this.props.head}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {this.props.subtitle}
                        </Typography>
                        <Typography component="p">
                            {this.props.body}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
        );
    }
}

WidgetCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WidgetCard);