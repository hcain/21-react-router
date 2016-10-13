'use strict';

import { connect } from 'react-redux';
import Artist from '../components/Artist';
import { fetchArtist } from '../action-creators/artists';

const mapStateToProps = state => {
    return {selectedArtist: state.selectedArtist}
}
const mapDispatchToProps = (dispatch) => ({
    getTheArtist: artistID => dispatch(fetchArtist(artistID))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);
