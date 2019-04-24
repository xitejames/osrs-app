import React, {
  Component,
} from 'react';
import SingleImageZoomViewer from 'react-native-single-image-zoom-viewer'
import { 
  ActivityIndicator, 
  Image 
} from 'react-native'
import { 
  Content, 
  Container, 
} from "native-base";
import styles from '../../Styles/style'
import { black } from 'ansi-colors';

  export class PictureZoom extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        loaded: false,
        image: undefined,
      };
      
    }
  
    componentDidMount(){
      const newM = require('../../../assets/Images/osrsWorldMap.png');
      this.setState({ loaded: true, image: newM, })
    }

    componentWillReceiveProps(){

      this.setState({ loaded: true })
    }

    render() {
        const { loaded, image } = this.state

        if(!loaded){
          return(
            <Container style={styles.container} >
              <Content style={styles.content}>
                <ActivityIndicator style={styles.indicator} 
                size={'large'}
                color="black"
                />
              </Content>
            </Container>
          );
        }

        return (
          <SingleImageZoomViewer 
          style={styles.map}
          source={image}
          height={4850}
          width={8306}
          />
       );
    }
  }
  
