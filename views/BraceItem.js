import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles'

const BraceItem = ({props}) => {
	return (
	    <View style={styles.braceContainer}>
            <View style={styles.titles}>
                <Text style={styles.title}>M-iBrace</Text>
                <Text style={styles.subtitle}>La Solution ideale</Text>
            </View>
        </View>
	);
};

export default BraceItem;