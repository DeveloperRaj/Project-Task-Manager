import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

import Header from './components/Header';
import ProfileDisplay from './components/ProfileDisplay';
import ProjectsDisplay from './components/ProjectsDisplay';
import TaskSlider from './components/TaskSlider';

export default function App() {

  //loading states
  const [fontLoaded, setFontLoaded] = useState(false);
  const [appLoaded, setAppLoaded] = useState(false);

  //data states
  const [user, setUser] = useState({});
  const [projectData, setProjectData] = useState([
    {key: 1, projectName: 'Green House', shortName: 'GH', thumbnailColor: '#01CBC6', tasks: [
      {key: 1, taskText: 'Do do cillum non ex aliquip sit'},
      {key: 2, taskText: 'Ad tempor eiusmod proident ut voluptate est in dolore do'},
      {key: 3, taskText: 'Dolor irure non eiusmod esse nisi officia dolor labore'},
      {key: 4, taskText: 'Lorem ipsum tempor esse in dolore.'},
      {key: 5, taskText: 'Duis proident exercitation sit.'},
    ]},
    {key: 2, projectName: 'Cyber Punk', shortName: 'CP', thumbnailColor: '#8B78E6', tasks: [
      {key: 1, taskText: 'Elit dolor in pariatur cupidatat.'},
      {key: 2, taskText: 'Duis sint elit labore amet.'},
      {key: 3, taskText: 'Lorem ipsum voluptate ut.'},
      {key: 4, taskText: 'Magna nulla sit.'},
      {key: 5, taskText: 'Aliqua et culpa veniam nostrud.'},
    ]},
    {key: 3, projectName: 'Easy Crypto', shortName: 'EC', thumbnailColor: '#2B2B52', tasks: [
      {key: 1, taskText: 'Lorem ipsum adipisicing elit quis laboris dolore.'},
      {key: 2, taskText: 'Dolor aute esse.'},
      {key: 3, taskText: 'Adipisicing do excepteur exercitation.'},
      {key: 4, taskText: 'Lorem ipsum velit fugiat in.'},
      {key: 5, taskText: 'Ut aliquip.'},
    ]},
    {key: 4, projectName: 'Fly High', shortName: 'FH', thumbnailColor: '#EA7773', tasks: [
      {key: 1, taskText: 'Lorem ipsum eu nulla.'},
      {key: 2, taskText: 'Lorem ipsum anim ut exercitation in.'},
      {key: 3, taskText: 'Eiusmod culpa aliquip qui.'},
      {key: 4, taskText: 'Excepteur consequat.'},
      {key: 5, taskText: 'Aliquip veniam dolore sint nisi.'},
    ]},
    {key: 5, projectName: 'Car Mech', shortName: 'CM', thumbnailColor: '#1BCA9B', tasks: [
      {key: 1, taskText: 'Ex in.'},
      {key: 2, taskText: 'Labore consectetur nostrud eu exercitation.'},
      {key: 3, taskText: 'Reprehenderit commodo pariatur esse.'},
      {key: 4, taskText: 'Ullamco et sunt minim dolor..'},
      {key: 5, taskText: 'Excepteur nostrud ut.'},
    ]},
    {key: 6, projectName: 'Color Picker', shortName: 'CP', thumbnailColor: '#0A79DF', tasks: [
      {key: 1, taskText: 'Labore consectetur.'},
      {key: 2, taskText: 'Commodo nostrud duis minim qui.'},
      {key: 3, taskText: 'Aliqua consectetur amet tempor velit.'},
      {key: 4, taskText: 'Consequat consectetur duis sit cupidatat.'},
      {key: 5, taskText: 'Lorem ipsum dolor commodo adipisicing.'},
    ]},
    {key: 7, projectName: 'UI AI', shortName: 'UA', thumbnailColor: '#FF4848', tasks: [
      {key: 1, taskText: 'Id amet sed minim fugiat.'},
      {key: 2, taskText: 'Lorem ipsum veniam in ullamco.'},
      {key: 3, taskText: 'Sint dolor dolor ut dolore.'},
      {key: 4, taskText: 'Et laboris.'},
      {key: 5, taskText: 'Cillum non sit proident.'},
    ]},
  ]);
  const [selectedProject, setSelectedProject] = useState(0);
  const [tasksData, setTasksData] = useState([]);

  //loading custom fonts
  useEffect(() => {
    const LoadFonts = async () => {
      await Font.loadAsync({
          'Sen': require('./assets/fonts/Sen-Bold.ttf'),
          'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
          'Cabin': require('./assets/fonts/Cabin-Medium.ttf')
      });
    } 
    LoadFonts()
    .then(() => setFontLoaded(true));
  });

  //after fonts are loaded, getting random user
  useEffect(() => {
    fetch('https://randomuser.me/api/', {method: 'GET',})
      .then(response => response.json())
      .then(json => {
        setUser({ name: json.results[0].name.first, image: json.results[0].picture.large });
      })
      .then(() => setAppLoaded(true))
      .catch(error => {
        console.error(error);
      });
  }, [fontLoaded]);

  //if selected project changes, fetch tasks for that
  useEffect(() => {

    if (selectedProject != 0){
      const data = projectData.filter(project => project.key == selectedProject);
      setTasksData(data[0].tasks);
    }

  }, [selectedProject]);

  if (fontLoaded && appLoaded) {
    return (
      <View style={styles.container}>
        <Header />
        <ProfileDisplay name={user.name} image={user.image} />
        <ProjectsDisplay 
          projectData={projectData}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <TaskSlider 
          selectedProject={selectedProject}
          tasksData={tasksData}
        />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252a41',
  },
});
