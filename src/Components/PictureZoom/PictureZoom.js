import React, {
  Component,
} from 'react';
import SingleImageZoomViewer from 'react-native-single-image-zoom-viewer'
import { ActivityIndicator, Image } from 'react-native'
import resolveAssetSource from 'resolveAssetSource';

  export class PictureZoom extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        loaded: false,
        image: undefined,
      };
      
    }
  
    componentDidMount(){
      const newM = require('../../../assets/osrsWorldMap.png');
      this.setState({ loaded: true, image: newM, })
    }

    componentWillReceiveProps(){

      this.setState({ loaded: true })
    }

    render() {
        const { loaded, image } = this.state

        if(!loaded){
          return (
            <ActivityIndicator size={"large"} />
          );
        }

        return (
          <SingleImageZoomViewer 
          source={image}
          style={{ height: 4850, width: 8306 }}
          height={4850}
          width={8306}
          />
       );
    }
  }
  
