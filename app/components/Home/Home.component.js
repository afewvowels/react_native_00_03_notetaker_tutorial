import React from 'react';
import { View, Text } from 'react-native';
import styles from './Home.component.style';
import TextArea from '../TextArea/TextArea.component';

const Home = () => (
  <View style={styles.container}>
    <Text style={styles.textAreaTitle}>Please place your text here</Text>
    <TextArea style={styles.textArea} />
    <View styles={styles.bottomBar}>
        <View styles={styles.bottomBarWrapper}>
            <Text style={styles.saveBtn}>Save</Text>
            <Text style={styles.characterCount}>{20} characters</Text>
        </View>
    </View>
  </View>
);

export default Home;
