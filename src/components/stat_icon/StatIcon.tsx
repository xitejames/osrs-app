import React, { Component } from 'react'
import { View, Text, StyleSheet, } from 'react-native';
import skillIcon from './Image'

interface IProps {
    currentName?: string
    currentRank?: number
    currentLevel?: number
    currentXP?: number
    currentImage?: string
}


class StatIcon extends Component<IProps> {    
    constructor(props: IProps) {
        super(props)
      }
    
    render() {
        return (
            <View style={styles.statItem}>
                {skillIcon.getPath(this.props.currentName)}
                <Text style={styles.statText}>{this.props.currentName}</Text>
                <Text style={styles.statText}>Level:{this.props.currentLevel}</Text>
                <Text style={styles.statText}>Rank:{this.props.currentRank}</Text>
                <Text style={styles.statText}>XP:{this.props.currentXP}</Text>
            </View>  
        )
    }
}

const styles = StyleSheet.create({
    statBar: {
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    statItem: {
        alignItems: 'center',
        width: 80
    },
    statText: {
        fontSize: 11,
        color: '#FF0'
    },

});


export default StatIcon;