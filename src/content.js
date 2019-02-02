import React, {Component} from 'react';
import { withStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import PropTypes from 'prop-types';

const styles = {

}

class Content extends Component {
    render() {

        return (
            <div>
                <Typography>This is the content</Typography>
            </div>
        );
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(Content);
