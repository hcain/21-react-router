'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import { fetchAlbum } from '../action-creators/albums';

const mapStateToProps = state => {
    return {selectedAlbum: state.selectedAlbum}
}

const mapDispatchToProps = (dispatch) => ({
    getTheAlbum: albumID => dispatch(fetchAlbum(albumID))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Album);
